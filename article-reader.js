/* Article data and reader renderer for Rizal's Footsteps. */
(function (root) {
    const data = typeof rizalData !== 'undefined' ? rizalData : (root.rizalData || []);
    const SOURCES = {
        nhcp: { sourceName: 'National Historical Commission of the Philippines', url: 'https://nhcp.gov.ph/', citationText: 'Historical markers and Rizal heritage materials.' },
        joserizal: { sourceName: 'JoseRizal.ph', url: 'https://www.joserizal.ph/', citationText: 'Biographical and documentary guide to José Rizal’s life and works.' },
        nlp: { sourceName: 'National Library of the Philippines', url: 'https://web.nlp.gov.ph/', citationText: 'Filipiniana collections and digitized primary-source catalogues.' },
        britannica: { sourceName: 'Encyclopaedia Britannica', url: 'https://www.britannica.com/biography/Jose-Rizal', citationText: 'Concise secondary historical overview of José Rizal.' }
    };
    const EVENT_SOURCE_KEYS = {
        e1: ['nhcp', 'joserizal'], e2: ['joserizal', 'nhcp'], e3: ['joserizal', 'nlp'], e4: ['joserizal', 'nhcp'], e5: ['joserizal', 'britannica'], e6: ['nhcp', 'joserizal'], e7: ['joserizal', 'nlp'], e8: ['nhcp', 'joserizal'], e9: ['joserizal', 'nlp'], e10: ['joserizal', 'britannica'], e11: ['nlp', 'joserizal'], e12: ['joserizal', 'britannica'], e13: ['nhcp', 'joserizal'], e14: ['nlp', 'joserizal'], e15: ['britannica', 'joserizal'], e16: ['nlp', 'joserizal'], e17: ['nhcp', 'joserizal'], e18: ['nhcp', 'britannica'], e19: ['nhcp', 'joserizal'], e20: ['nhcp', 'nlp'], e21: ['nhcp', 'britannica'], e22: ['nlp', 'joserizal'], e23: ['nhcp', 'britannica']
    };
    function clean(value) { return String(value || '').replace(/ÃƒÂ±|Ã‚Â±|Ã±/g, 'ñ').replace(/ÃƒÂ©|Ã‚Â©|Ã©/g, 'é').replace(/Ãš/g, 'Ú').replace(/Ã³/g, 'ó').replace(/Ã¡/g, 'á'); }
    function slug(value) { return clean(value).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''); }
    function sourcesFor(event) { return (EVENT_SOURCE_KEYS[event.id] || ['nhcp', 'joserizal']).map(key => SOURCES[key]); }
    function buildSection(event, location) {
        const sources = sourcesFor(event), primary = sources[0], title = clean(event.title), description = clean(event.description), locationName = clean(location.location_name);
        const content = `${description} [${primary.sourceName}](${primary.url}) documents this episode in the wider chronology of Rizal's life.\n\nRead against the setting of ${locationName}, the episode shows how education, travel, writing, civic work, or imprisonment shaped the person Rizal was becoming. [${sources[1].sourceName}](${sources[1].url}) provides a second point of reference for the names, dates, and circumstances associated with this account.\n\nThis stop is best understood as part of a connected story rather than an isolated anecdote. The linked documentation is available for readers who want to investigate the account further.`;
        return { heading: title, content, images: event.images || [], referenceIds: EVENT_SOURCE_KEYS[event.id] || ['nhcp', 'joserizal'], eventId: event.id };
    }
    function articleFromLocation(location) {
        const sections = (location.significant_events || []).map(event => buildSection(event, location));
        const referenceKeys = [...new Set(sections.flatMap(section => section.referenceIds))];
        const references = referenceKeys.map(key => ({ id: key, ...SOURCES[key] }));
        const summary = clean(location.description), wordCount = `${summary} ${sections.map(section => section.content).join(' ')}`.split(/\s+/).length;
        return { id: `location-${location.id}-${slug(location.location_name)}`, title: clean(location.location_name), subtitle: summary, summary, readTime: `${Math.max(1, Math.ceil(wordCount / 220))} min read`, heroImage: location.images?.[0] || sections[0]?.images?.[0] || '', sections, references, metadata: { location: clean(location.location_name), coordinates: location.coordinates, transitType: location.transit, nextStopId: location.next_stop_id }, locationId: location.id };
    }
    function getArticleById(locationId) { const location = data.find(item => String(item.id) === String(locationId)); return location ? articleFromLocation(location) : null; }
    function getArticleByEventId(eventId) {
        for (const location of data) { const event = (location.significant_events || []).find(item => String(item.id) === String(eventId)); if (event) { const article = articleFromLocation(location); return { ...article, id: `event-${slug(event.id)}-${slug(event.title)}`, title: clean(event.title), subtitle: clean(event.description), summary: clean(event.description), sections: [article.sections.find(section => section.eventId === event.id)] }; } }
        return null;
    }
    function getAllArticles() { return data.map(articleFromLocation); }
    function escapeHtml(value) { return String(value || '').replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character])); }
    function markdownToHtml(markdown) { return markdown.split(/\n\n+/).map(paragraph => escapeHtml(paragraph).replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')).map(paragraph => `<p>${paragraph}</p>`).join(''); }
    function renderArticleReader(container, article, handlers = {}) {
        if (!container || !article) return;
        container.innerHTML = `<article class="article-reader" aria-labelledby="article-reader-title"><header class="article-reader-header"><p class="eyebrow">${escapeHtml(article.metadata.location)} · ${escapeHtml(article.readTime)}</p><h1 id="article-reader-title">${escapeHtml(article.title)}</h1><p class="article-reader-subtitle">${escapeHtml(article.subtitle)}</p><img class="article-reader-hero" src="${escapeHtml(article.heroImage)}" alt="${escapeHtml(article.title)}" loading="lazy"></header><div class="article-reader-meta"><span>${escapeHtml(article.metadata.transitType)} transit</span><span>${article.metadata.coordinates.join(', ')}</span></div><div class="article-reader-body">${article.sections.map(section => `<section class="article-reader-section"><h2>${escapeHtml(section.heading)}</h2>${markdownToHtml(section.content)}${section.images?.length ? `<div class="article-reader-images">${section.images.slice(0, 2).map((src, index) => `<img src="${escapeHtml(src)}" alt="${escapeHtml(section.heading)} image ${index + 1}" loading="lazy">`).join('')}</div>` : ''}</section>`).join('')}</div><footer class="article-reader-footer"><p class="section-label">References &amp; Citations</p><ol>${article.references.map(reference => `<li><a href="${escapeHtml(reference.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(reference.sourceName)}</a><span>${escapeHtml(reference.citationText)}</span></li>`).join('')}</ol><nav class="article-reader-nav" aria-label="Article navigation"><button type="button" class="button button-outline" data-article-previous ${article.locationId === 1 ? 'disabled' : ''}>← Previous stop</button><button type="button" class="button button-dark" data-article-next ${article.metadata.nextStopId ? '' : 'disabled'}>Next stop →</button></nav></footer></article>`;
        container.querySelector('[data-article-previous]')?.addEventListener('click', () => handlers.onPrevious?.(article)); container.querySelector('[data-article-next]')?.addEventListener('click', () => handlers.onNext?.(article));
    }
    Object.assign(root, { getArticleById, getArticleByEventId, getAllArticles, renderArticleReader });
})(window);
