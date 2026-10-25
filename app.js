/* Rizal Footsteps — intentionally dependency-light map controller. */
let MAPTILER_API_KEY = window.MAPTILER_API_KEY || 'i_will_input_my_api_key_myself';
let SUPABASE_URL = window.SUPABASE_URL || '';
let SUPABASE_ANON_KEY = window.SUPABASE_ANON_KEY || '';
let map, markers = [], route, movingMarker, maptilerLayer, currentLocationId;
let commentsPage = 0;
const COMMENTS_PAGE_SIZE = 3;
let journeyFeedbackPage = 0;
const JOURNEY_FEEDBACK_PAGE_SIZE = 5;
const JOURNEY_ANIMATION_DURATION = 1800;
let ratings = JSON.parse(localStorage.getItem('rizalLocationRatings') || '{}');
let theme = localStorage.getItem('rizalTheme') || 'light';

async function loadMapTilerKey() {
    if (window.MAPTILER_API_KEY) return;
    try {
        const response = await fetch('.env', { cache: 'no-store' });
        if (!response.ok) return;
        const envText = await response.text();
        const match = envText.match(/^MAPTILER_API_KEY=(.+)$/m);
        if (match && match[1].trim() && !match[1].includes('i_will_input_my_api_key_myself')) {
            MAPTILER_API_KEY = match[1].trim();
        }
        const supabaseUrl = envText.match(/^SUPABASE_URL=(.+)$/m);
        const supabaseKey = envText.match(/^SUPABASE_ANON_KEY=(.+)$/m);
        if (!SUPABASE_URL && supabaseUrl) SUPABASE_URL = supabaseUrl[1].trim();
        if (!SUPABASE_ANON_KEY && supabaseKey) SUPABASE_ANON_KEY = supabaseKey[1].trim();
    } catch (error) {
        console.warn('MapTiler key could not be loaded from .env; use a local server or window.MAPTILER_API_KEY.', error);
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    await loadMapTilerKey();
    applyTheme();
    document.getElementById('welcome-theme-toggle').addEventListener('click', toggleTheme);
    const welcome = document.getElementById('welcome-screen');
    const start = () => { welcome.classList.add('is-hidden'); setTimeout(initApp, 350); };
    document.getElementById('start-journey-btn').addEventListener('click', start);
});

function initApp() {
    registerOfflineCache();
    applyTheme();
    map = L.map('map', { zoomControl: false, minZoom: 2 }).setView(rizalData[0].coordinates, 12);
    L.control.zoom({ position: 'bottomleft' }).addTo(map);
    maptilerLayer = new L.MaptilerLayer({ apiKey: MAPTILER_API_KEY, style: mapStyleId() }).addTo(map);
    const coords = rizalData.map(item => item.coordinates);
    route = L.polyline(coords, { color: routeColor(), weight: 2.5, opacity: .88, lineCap: 'round', lineJoin: 'round' }).addTo(map);
    rizalData.forEach(location => {
        const icon = L.divIcon({ className: 'archive-marker', html: `<span class="marker-dot"></span><span class="marker-label">${location.location_name}</span>`, iconSize: [1, 1], iconAnchor: [6, 6] });
        const marker = L.marker(location.coordinates, { icon, title: location.location_name, keyboard: true }).addTo(map);
        marker.on('click', () => chooseLocation(location));
        markers.push({ marker, location });
    });
    bindEvents();
    setTimeout(() => map.invalidateSize(), 100);
    chooseLocation(rizalData[0], false);
    prefetchRouteVectorTiles();
}

function registerOfflineCache() {
    if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js?v=20261101').catch(error => console.warn('Offline cache unavailable:', error));
}

function tilePoint(lat, lng, zoom) {
    const scale = 2 ** zoom;
    return { x: Math.floor(((lng + 180) / 360) * scale), y: Math.floor((1 - Math.asinh(Math.tan(lat * Math.PI / 180)) / Math.PI) / 2 * scale) };
}

function mapStyleId() { return theme === 'dark' ? 'dataviz-dark' : 'dataviz-light'; }
function routeColor() { return theme === 'dark' ? '#f3eee5' : '#27231f'; }

function toggleTheme() { theme = theme === 'light' ? 'dark' : 'light'; localStorage.setItem('rizalTheme', theme); const mapContainer = document.getElementById('map'); mapContainer?.classList.add('theme-switching'); applyTheme(); if (route) route.setStyle({ color: routeColor(), opacity: theme === 'dark' ? .92 : .82 }); if (maptilerLayer) maptilerLayer.setStyle(mapStyleId()); window.setTimeout(() => mapContainer?.classList.remove('theme-switching'), 360); }

async function prefetchRouteVectorTiles() {
    if (!MAPTILER_API_KEY || MAPTILER_API_KEY.includes('i_will_input')) return;
    try {
        const response = await fetch(`https://api.maptiler.com/maps/${mapStyleId()}/style.json?key=${MAPTILER_API_KEY}`);
        if (!response.ok) return;
        const style = await response.json();
        const tileJsons = await Promise.all(Object.values(style.sources || {}).map(async source => {
            if (source.tiles) return source;
            if (!source.url) return null;
            const sourceResponse = await fetch(`${source.url}${source.url.includes('?') ? '&' : '?'}key=${MAPTILER_API_KEY}`);
            return sourceResponse.ok ? sourceResponse.json() : null;
        }));
        const urls = new Set();
        tileJsons.filter(Boolean).forEach(source => (source.tiles || []).forEach(template => {
            [4, 5].forEach(zoom => rizalData.forEach(location => {
                const center = tilePoint(location.coordinates[0], location.coordinates[1], zoom);
                urls.add(template.replace('{z}', zoom).replace('{x}', center.x).replace('{y}', center.y));
            }));
        }));
        urls.forEach(url => fetch(`${url}${url.includes('?') ? '&' : '?'}key=${MAPTILER_API_KEY}`, { mode: 'cors' }).catch(() => {}));
    } catch (error) { console.warn('Vector tile prefetch unavailable:', error); }
}

function chooseLocation(location, animate = true) {
    const previous = rizalData.find(item => item.id === currentLocationId);
    const isMoving = Boolean(previous && previous.id !== location.id);
    const isMobile = window.matchMedia('(max-width: 700px)').matches;
    if (isMoving) { animateJourney(previous, location); if (isMobile) { document.getElementById('drawer').classList.add('traveling'); closeDrawer(); } }
    currentLocationId = location.id;
    if (animate) map.flyTo(location.coordinates, 12, { duration: 1.1 });
    updateDrawer(location);
    if (isMoving && isMobile) window.setTimeout(() => { openDrawer(); window.setTimeout(() => document.getElementById('drawer').classList.remove('traveling'), 500); }, JOURNEY_ANIMATION_DURATION); else openDrawer();
}

function animateJourney(from, to) {
    if (movingMarker) map.removeLayer(movingMarker);
    const icon = L.divIcon({ className: 'journey-marker', html: '<span class="kalesa-icon" aria-label="horse-drawn carriage">♞</span>', iconSize: [42, 42], iconAnchor: [21, 21] });
    movingMarker = L.marker(from.coordinates, { icon, zIndexOffset: 1000 }).addTo(map);
    const started = performance.now(), duration = JOURNEY_ANIMATION_DURATION;
    const frame = now => { if (!movingMarker) return; const p = Math.min((now - started) / duration, 1); movingMarker.setLatLng([from.coordinates[0] + (to.coordinates[0] - from.coordinates[0]) * p, from.coordinates[1] + (to.coordinates[1] - from.coordinates[1]) * p]); if (p < 1) requestAnimationFrame(frame); else { map.removeLayer(movingMarker); movingMarker = null; } };
    requestAnimationFrame(frame);
}

function updateDrawer(location) {
    document.getElementById('drawer-title').textContent = location.location_name.replace('BiÃ±an', 'Biñan');
    const events = document.getElementById('events-list'); events.innerHTML = '';
    location.significant_events.forEach(event => { const item = document.createElement('li'); item.className = 'event-item'; item.innerHTML = `<span>${event.title}</span><b>↗</b>`; item.addEventListener('click', () => openModal(event)); events.appendChild(item); });
    const gallery = document.getElementById('photo-grid'); gallery.innerHTML = '';
    (location.images || []).slice(0, 4).forEach((src, i) => { const img = document.createElement('img'); img.src = src; img.alt = `${location.location_name} archive image ${i + 1}`; img.loading = 'lazy'; img.onerror = () => { img.style.visibility = 'hidden'; }; gallery.appendChild(img); });
    renderRating(location.id);
    commentsPage = 0;
    ensureCommentsPagination();
    loadStopFeedback(location.id);
    const next = rizalData.find(item => item.id === location.next_stop_id); document.getElementById('next-stop-text').textContent = next ? `Next: ${next.location_name}` : 'Journey complete'; document.getElementById('next-stop-btn').disabled = false;
}

function renderRating(locationId) { const widget = document.getElementById('rating-widget'); widget.innerHTML = ''; const saved = ratings[locationId] || 0; for (let i = 1; i <= 5; i++) { const star = document.createElement('button'); star.type = 'button'; star.className = `star ${i <= saved ? 'is-selected' : ''}`; star.textContent = '★'; star.setAttribute('aria-label', `${i} stars`); star.setAttribute('aria-checked', i === saved); star.addEventListener('click', () => { ratings[locationId] = i; localStorage.setItem('rizalLocationRatings', JSON.stringify(ratings)); renderRating(locationId); }); widget.appendChild(star); } }

async function supabaseRequest(path, options = {}, withMeta = false) {
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY || SUPABASE_URL.includes('your-project')) return null;
    const baseUrl = SUPABASE_URL.replace(/\/+$/, '').replace(/\/rest(?:\/v1)?$/, '');
    const response = await fetch(`${baseUrl}/rest/v1/${path}`, { ...options, headers: { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}`, 'Content-Type': 'application/json', ...(options.headers || {}) } });
    if (!response.ok) throw new Error(`Supabase request failed (${response.status})`);
    const body = await response.text();
    const data = body ? JSON.parse(body) : null;
    if (!withMeta) return data;
    const contentRange = response.headers.get('content-range') || '';
    const total = Number(contentRange.split('/')[1]) || (Array.isArray(data) ? data.length : 0);
    return { data: data || [], total };
}

function renderJourneyFeedbacks(feedbacks) { const list = document.getElementById('journey-feedbacks-list'); list.replaceChildren(); if (!feedbacks.length) { list.innerHTML = '<p class="feedback-status">No journey reflections yet. Be the first to share one.</p>'; return; } feedbacks.forEach(feedback => { const card = document.createElement('article'); card.className = 'journey-feedback-card'; const header = document.createElement('div'); const name = document.createElement('strong'); name.textContent = feedback.display_name || 'Anonymous'; const rating = document.createElement('span'); rating.textContent = feedback.rating ? `${'★'.repeat(feedback.rating)}${'☆'.repeat(5 - feedback.rating)}` : 'Journey note'; header.append(name, rating); const comment = document.createElement('p'); comment.textContent = feedback.comment; const date = document.createElement('small'); date.textContent = feedback.created_at ? new Date(feedback.created_at).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }) : ''; card.append(header, comment, date); list.appendChild(card); }); }
function renderJourneyFeedbackPagination(total) { const pagination = document.getElementById('journey-feedbacks-pagination'); const pages = Math.max(1, Math.ceil(total / JOURNEY_FEEDBACK_PAGE_SIZE)); pagination.classList.toggle('is-hidden', pages <= 1); pagination.querySelector('span').textContent = `Page ${Math.min(journeyFeedbackPage + 1, pages)} of ${pages}`; pagination.querySelector('[data-page="previous"]').disabled = journeyFeedbackPage <= 0; pagination.querySelector('[data-page="next"]').disabled = journeyFeedbackPage >= pages - 1; }
async function loadJourneyFeedbacks() { const list = document.getElementById('journey-feedbacks-list'); list.innerHTML = '<p class="feedback-status">Loading reflections…</p>'; try { const from = journeyFeedbackPage * JOURNEY_FEEDBACK_PAGE_SIZE; const result = await supabaseRequest(`journey_feedback?select=display_name,rating,comment,created_at&order=created_at.desc&limit=${JOURNEY_FEEDBACK_PAGE_SIZE}&offset=${from}`, { headers: { Prefer: 'count=exact' } }, true); renderJourneyFeedbacks(result.data); renderJourneyFeedbackPagination(result.total); } catch (error) { list.innerHTML = '<p class="feedback-status">Reflections are unavailable right now.</p>'; document.getElementById('journey-feedbacks-pagination').classList.add('is-hidden'); console.warn(error); } }
async function loadStopFeedback(stopId) {
    const list = document.getElementById('stop-comments'); list.innerHTML = '<p class="feedback-status">Loading notes…</p>';
    try { const from = commentsPage * COMMENTS_PAGE_SIZE; const result = await supabaseRequest(`stop_feedback?stop_id=eq.${stopId}&select=display_name,rating,comment,created_at&order=created_at.desc&limit=${COMMENTS_PAGE_SIZE}&offset=${from}`, { headers: { Prefer: 'count=exact' } }, true); renderComments(list, result.data); renderCommentsPagination(result.total); } catch (error) { list.innerHTML = '<p class="feedback-status">Comments are unavailable right now.</p>'; console.warn(error); }
}

function renderComments(list, rows) { list.innerHTML = rows.length ? rows.map(row => `<article class="comment-card"><div><strong>${escapeHtml(row.display_name)}</strong><span>${'★'.repeat(row.rating)}</span></div><p>${escapeHtml(row.comment)}</p></article>`).join('') : '<p class="feedback-status">Be the first to leave a note.</p>'; }
function ensureCommentsPagination() { if (document.getElementById('comments-pagination')) return; const pagination = document.createElement('div'); pagination.id = 'comments-pagination'; pagination.className = 'comments-pagination'; pagination.innerHTML = '<button type="button" data-page="previous" aria-label="Previous comments">←</button><span></span><button type="button" data-page="next" aria-label="Next comments">→</button>'; document.getElementById('stop-comments').after(pagination); pagination.querySelector('[data-page="previous"]').addEventListener('click', () => { if (commentsPage > 0) { commentsPage--; loadStopFeedback(currentLocationId); } }); pagination.querySelector('[data-page="next"]').addEventListener('click', () => { commentsPage++; loadStopFeedback(currentLocationId); }); }
function renderCommentsPagination(total) { const pagination = document.getElementById('comments-pagination'); if (!pagination) return; const pages = Math.max(1, Math.ceil(total / COMMENTS_PAGE_SIZE)); pagination.classList.toggle('is-hidden', pages <= 1); pagination.querySelector('span').textContent = `Page ${Math.min(commentsPage + 1, pages)} of ${pages}`; pagination.querySelector('[data-page="previous"]').disabled = commentsPage <= 0; pagination.querySelector('[data-page="next"]').disabled = commentsPage >= pages - 1; }
function escapeHtml(value) { return String(value).replace(/[&<>'"]/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character])); }
function renderJourneyRating() { const widget = document.getElementById('journey-rating-widget'); widget.innerHTML = ''; for (let i = 1; i <= 5; i++) { const star = document.createElement('button'); star.type = 'button'; star.className = `star ${i <= (window.journeyRating || 0) ? 'is-selected' : ''}`; star.textContent = '★'; star.setAttribute('aria-label', `${i} stars`); star.addEventListener('click', () => { window.journeyRating = i; renderJourneyRating(); }); widget.appendChild(star); } }
async function submitStopFeedback(event) { event.preventDefault(); const status = document.getElementById('stop-feedback-status'); const comment = document.getElementById('stop-feedback-comment').value.trim(); const rating = ratings[currentLocationId] || 0; if (!comment) return; if (!rating) { status.textContent = 'Choose a star rating first.'; return; } status.textContent = 'Posting…'; try { await supabaseRequest('stop_feedback', { method: 'POST', headers: { Prefer: 'return=minimal' }, body: JSON.stringify({ stop_id: currentLocationId, rating, comment, display_name: document.getElementById('stop-feedback-name').value.trim() || 'Anonymous' }) }); event.target.reset(); status.textContent = 'Thanks for sharing.'; loadStopFeedback(currentLocationId); } catch (error) { status.textContent = 'Could not post yet. Check your Supabase configuration.'; console.warn(error); } }
function resetJourneyFeedbackModal() { document.getElementById('journey-feedback-form-wrap').classList.remove('hidden'); document.getElementById('journey-thank-you').classList.add('hidden'); document.getElementById('reflection-eyebrow').textContent = 'Journey complete'; document.getElementById('reflection-title').textContent = 'Leave a reflection'; }
function showJourneyThankYou() { document.getElementById('journey-feedback-form-wrap').classList.add('hidden'); document.getElementById('journey-thank-you').classList.remove('hidden'); document.getElementById('reflection-eyebrow').textContent = 'Thank you for visiting'; document.getElementById('reflection-title').textContent = 'Tour complete'; }
async function submitJourneyFeedback(event) { event.preventDefault(); const status = document.getElementById('journey-feedback-status'); const comment = document.getElementById('journey-feedback-comment').value.trim(); if (!comment) { showJourneyThankYou(); return; } status.textContent = 'Posting…'; try { await supabaseRequest('journey_feedback', { method: 'POST', headers: { Prefer: 'return=minimal' }, body: JSON.stringify({ rating: window.journeyRating || null, comment, display_name: document.getElementById('journey-feedback-name').value.trim() || 'Anonymous' }) }); event.target.reset(); showJourneyThankYou(); } catch (error) { status.textContent = 'Could not post yet. Check your Supabase configuration.'; console.warn(error); } }
function openDrawer() { document.getElementById('drawer').classList.remove('closed'); document.getElementById('drawer').classList.add('open'); document.getElementById('journey-feedbacks-toggle')?.classList.add('drawer-open'); }
function closeDrawer() { document.getElementById('drawer').classList.remove('open'); document.getElementById('drawer').classList.add('closed'); document.getElementById('journey-feedbacks-toggle')?.classList.remove('drawer-open'); }
function openModal(event) { document.getElementById('modal-title').textContent = event.title; document.getElementById('modal-description').textContent = event.description; const images = document.getElementById('modal-images'); images.innerHTML = ''; (event.images || []).slice(0, 2).forEach((src, i) => { const img = document.createElement('img'); img.src = src; img.alt = `${event.title} image ${i + 1}`; img.onerror = () => img.remove(); images.appendChild(img); }); document.getElementById('modal').classList.remove('hidden'); }
function closeModal() { document.getElementById('modal').classList.add('hidden'); }
function bindEvents() {
    document.getElementById('close-drawer').addEventListener('click', closeDrawer); document.getElementById('close-modal').addEventListener('click', closeModal);
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    document.getElementById('journey-feedbacks-toggle').addEventListener('click', () => { journeyFeedbackPage = 0; document.getElementById('journey-feedbacks-modal').classList.remove('hidden'); loadJourneyFeedbacks(); });
    document.getElementById('close-journey-feedbacks').addEventListener('click', () => document.getElementById('journey-feedbacks-modal').classList.add('hidden'));
    document.querySelector('#journey-feedbacks-pagination [data-page="previous"]').addEventListener('click', () => { if (journeyFeedbackPage > 0) { journeyFeedbackPage--; loadJourneyFeedbacks(); } });
    document.querySelector('#journey-feedbacks-pagination [data-page="next"]').addEventListener('click', () => { journeyFeedbackPage++; loadJourneyFeedbacks(); });
    document.getElementById('modal').addEventListener('click', e => { if (e.target.id === 'modal') closeModal(); }); document.getElementById('modal-nav-btn').addEventListener('click', closeModal);
    document.getElementById('stop-feedback-form').addEventListener('submit', submitStopFeedback); document.getElementById('journey-feedback-form').addEventListener('submit', submitJourneyFeedback); renderJourneyRating();
    document.getElementById('close-reflection').addEventListener('click', () => document.getElementById('reflection-modal').classList.add('hidden')); document.getElementById('skip-journey-feedback').addEventListener('click', showJourneyThankYou); document.getElementById('finish-tour-btn').addEventListener('click', () => document.getElementById('reflection-modal').classList.add('hidden'));
    document.getElementById('next-stop-btn').addEventListener('click', () => { const here = rizalData.find(item => item.id === currentLocationId); const next = rizalData.find(item => item.id === here?.next_stop_id); if (next) chooseLocation(next); else { resetJourneyFeedbackModal(); renderJourneyRating(); document.getElementById('reflection-modal').classList.remove('hidden'); } });
    document.getElementById('drawer-handle').addEventListener('click', () => document.getElementById('drawer').classList.toggle('expanded'));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeModal(); closeDrawer(); } });
}

function applyTheme() {
    document.documentElement.dataset.theme = theme;
    const brandSymbol = document.querySelector('.brand-symbol');
    if (brandSymbol && !brandSymbol.querySelector('img')) { brandSymbol.textContent = ''; const image = document.createElement('img'); image.className = 'rizal-brand-portrait'; image.src = 'joserizal.svg?v=20261026'; image.alt = ''; image.setAttribute('aria-hidden', 'true'); brandSymbol.appendChild(image); }
    document.querySelectorAll('#theme-toggle, #welcome-theme-toggle').forEach(toggle => { const dark = theme === 'dark'; toggle.setAttribute('aria-pressed', dark); toggle.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode'); toggle.querySelector('span').textContent = dark ? '☀' : '☾'; toggle.querySelector('.theme-toggle-label').textContent = dark ? 'Light mode' : 'Dark mode'; });
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#1d1b19' : '#f4efe6');
}
