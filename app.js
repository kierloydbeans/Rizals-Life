// Initialize Lucide icons
lucide.createIcons();

// Global state
let map;
let markers = [];
let polyline;
let currentLocationId = null;
let ratings = JSON.parse(localStorage.getItem('rizalLocationRatings')) || {};
let movingMarker = null;
let isDrawerExpanded = false;

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    // Check if user has seen welcome screen
    const hasSeenWelcome = localStorage.getItem('rizalWelcomeSeen');
    
    if (hasSeenWelcome) {
        document.getElementById('welcome-screen').classList.add('hidden');
        initApp();
    } else {
        // Show welcome screen
        showWelcomeScreen();
    }
});

// Show welcome screen
function showWelcomeScreen() {
    const welcomeScreen = document.getElementById('welcome-screen');
    const startBtn = document.getElementById('start-journey-btn');
    
    if (!startBtn) {
        console.error('Start button not found');
        return;
    }
    
    startBtn.addEventListener('click', () => {
        console.log('Start button clicked');
        welcomeScreen.classList.add('hidden');
        localStorage.setItem('rizalWelcomeSeen', 'true');
        
        // Initialize app after welcome screen animation
        setTimeout(() => {
            initApp();
        }, 500);
    });
    
    lucide.createIcons();
}

// Initialize the main app
function initApp() {
    initMap();
    createMarkersAndPolyline();
    setupEventListeners();
    
    // Invalidate map size to ensure it renders correctly
    setTimeout(() => {
        map.invalidateSize();
    }, 100);
    
    // Start at the first location
    if (rizalData.length > 0) {
        selectLocation(rizalData[0].id);
    }
}

// Initialize Leaflet map
function initMap() {
    map = L.map('map', {
        zoomControl: false
    }).setView([14.2117, 121.1653], 8);
    
    // Add zoom control to top-right
    L.control.zoom({
        position: 'topright'
    }).addTo(map);
    
    // Add Wikimedia tiles (free, no API key required)
    L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | <a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>',
        maxZoom: 19
    }).addTo(map);
    
    // Handle map resize
    window.addEventListener('resize', () => {
        map.invalidateSize();
    });
}

// Create markers and connect them with polyline
function createMarkersAndPolyline() {
    const coordinates = rizalData.map(location => location.coordinates);
    
    // Create polyline connecting all locations
    polyline = L.polyline(coordinates, {
        color: '#453925',
        weight: 3,
        opacity: 0.7,
        dashArray: '10, 10'
    }).addTo(map);
    
    // Create markers for each location
    rizalData.forEach(location => {
        const marker = L.marker(location.coordinates, {
            title: location.location_name
        }).addTo(map);
        
        // Add popup
        marker.bindPopup(`<b>${location.location_name}</b><br>Click to explore`);
        
        // Add click event
        marker.on('click', () => {
            handleMarkerClick(location);
        });
        
        markers.push({
            marker,
            location
        });
    });
}

// Handle marker click
function handleMarkerClick(location) {
    const prevLocation = rizalData.find(l => l.id === currentLocationId);
    
    // Check transit type and animate moving marker
    if (prevLocation) {
        animateMovingMarker(prevLocation.coordinates, location.coordinates, location.transit);
        // showTransitBanner(location.transit, location.location_name);
    } else {
        // First location, just fly to it
        map.flyTo(location.coordinates, 10, {
            duration: 1.5
        });
        selectLocation(location.id);
        return;
    }
    
    // Select location after animation
    setTimeout(() => {
        selectLocation(location.id);
        // Remove moving marker after reaching destination
        if (movingMarker) {
            map.removeLayer(movingMarker);
            movingMarker = null;
        }
    }, 2500);
}

// Animate moving marker along path
function animateMovingMarker(startCoords, endCoords, transitType) {
    // Remove existing moving marker if any
    if (movingMarker) {
        map.removeLayer(movingMarker);
    }
    
    // Create custom icon based on transit type
    let iconSvg = '';
    if (transitType === 'overseas' || transitType === 'sea') {
        // 18th century ship icon
        iconSvg = `
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 42 L58 42 L54 34 L10 34 Z" fill="#8B4513"/>
                <path d="M10 34 L54 34 L50 26 L14 26 Z" fill="#A0522D"/>
                <rect x="28" y="22" width="2" height="12" fill="#654321"/>
                <rect x="34" y="22" width="2" height="12" fill="#654321"/>
                <path d="M29 22 L29 8 L35 8 L35 22" fill="#D2691E"/>
                <circle cx="12" cy="46" r="4" fill="#654321"/>
                <circle cx="52" cy="46" r="4" fill="#654321"/>
                <path d="M32 8 L32 4" stroke="#654321" stroke-width="2"/>
                <path d="M26 10 L38 10" stroke="#D2691E" stroke-width="2"/>
                <path d="M24 14 L40 14" stroke="#D2691E" stroke-width="2"/>
            </svg>
        `;
    } else {
        // Horse carriage icon (local transport)
        iconSvg = `
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="14" cy="38" rx="8" ry="5" fill="#D2691E"/>
                <path d="M8 36 L8 44" stroke="#654321" stroke-width="2"/>
                <path d="M20 36 L20 44" stroke="#654321" stroke-width="2"/>
                <circle cx="6" cy="32" r="4" fill="#D2691E"/>
                <path d="M2 30 L6 32 L6 34" stroke="#654321" stroke-width="2" fill="none"/>
                <path d="M10 42 L10 50" stroke="#654321" stroke-width="2"/>
                <path d="M18 42 L18 50" stroke="#654321" stroke-width="2"/>
                <rect x="26" y="28" width="24" height="14" rx="2" fill="#8B4513"/>
                <path d="M26 28 L26 22 L50 22 L50 28" fill="#A0522D"/>
                <circle cx="32" cy="46" r="4" fill="#654321"/>
                <circle cx="44" cy="46" r="4" fill="#654321"/>
                <path d="M32 42 L32 50" stroke="#8B4513" stroke-width="1"/>
                <path d="M28 46 L36 46" stroke="#8B4513" stroke-width="1"/>
                <path d="M44 42 L44 50" stroke="#8B4513" stroke-width="1"/>
                <path d="M40 46 L48 46" stroke="#8B4513" stroke-width="1"/>
                <path d="M22 38 L26 35" stroke="#654321" stroke-width="2"/>
            </svg>
        `;
    }
    
    // Create custom DivIcon
    const customIcon = L.divIcon({
        className: 'moving-marker-icon',
        html: `<div style="width: 40px; height: 40px;">${iconSvg}</div>`,
        iconSize: [40, 40],
        iconAnchor: [20, 20]
    });
    
    // Create marker at start position
    movingMarker = L.marker(startCoords, { icon: customIcon }).addTo(map);
    
    // Animate along the path
    const duration = 2500; // 2.5 seconds
    const startTime = performance.now();
    let lastCameraUpdate = 0;
    
    function animate(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Interpolate between start and end coordinates
        const lat = startCoords[0] + (endCoords[0] - startCoords[0]) * progress;
        const lng = startCoords[1] + (endCoords[1] - startCoords[1]) * progress;
        
        movingMarker.setLatLng([lat, lng]);
        
        // Make camera follow the moving marker with throttling
        // Only update camera every 100ms to avoid too many tile requests
        if (currentTime - lastCameraUpdate > 100) {
            map.panTo([lat, lng], {
                animate: false
            });
            lastCameraUpdate = currentTime;
        }
        
        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }
    
    requestAnimationFrame(animate);
}

// Show transit banner
function showTransitBanner(transitType, destination) {
    const banner = document.getElementById('transit-banner');
    const message = document.getElementById('transit-message');
    const transitIcon = document.getElementById('transit-icon');
    
    let iconSvg = '';
    let text = 'journey';
    
    if (transitType === 'overseas' || transitType === 'sea') {
        // 18th century ship icon
        iconSvg = `
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 42 L58 42 L54 34 L10 34 Z" fill="#8B4513"/>
                <path d="M10 34 L54 34 L50 26 L14 26 Z" fill="#A0522D"/>
                <rect x="28" y="22" width="2" height="12" fill="#654321"/>
                <rect x="34" y="22" width="2" height="12" fill="#654321"/>
                <path d="M29 22 L29 8 L35 8 L35 22" fill="#D2691E"/>
                <circle cx="12" cy="46" r="4" fill="#654321"/>
                <circle cx="52" cy="46" r="4" fill="#654321"/>
                <path d="M32 8 L32 4" stroke="#654321" stroke-width="2"/>
                <path d="M26 10 L38 10" stroke="#D2691E" stroke-width="2"/>
                <path d="M24 14 L40 14" stroke="#D2691E" stroke-width="2"/>
            </svg>
        `;
        text = 'Overseas journey';
    } else {
        // Horse carriage icon (local transport) - better design
        iconSvg = `
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Horse body -->
                <ellipse cx="14" cy="38" rx="8" ry="5" fill="#D2691E"/>
                <path d="M8 36 L8 44" stroke="#654321" stroke-width="2"/>
                <path d="M20 36 L20 44" stroke="#654321" stroke-width="2"/>
                <!-- Horse head -->
                <circle cx="6" cy="32" r="4" fill="#D2691E"/>
                <path d="M2 30 L6 32 L6 34" stroke="#654321" stroke-width="2" fill="none"/>
                <!-- Horse legs -->
                <path d="M10 42 L10 50" stroke="#654321" stroke-width="2"/>
                <path d="M18 42 L18 50" stroke="#654321" stroke-width="2"/>
                <!-- Carriage body -->
                <rect x="26" y="28" width="24" height="14" rx="2" fill="#8B4513"/>
                <!-- Carriage canopy -->
                <path d="M26 28 L26 22 L50 22 L50 28" fill="#A0522D"/>
                <!-- Carriage wheels -->
                <circle cx="32" cy="46" r="4" fill="#654321"/>
                <circle cx="44" cy="46" r="4" fill="#654321"/>
                <!-- Wheel spokes -->
                <path d="M32 42 L32 50" stroke="#8B4513" stroke-width="1"/>
                <path d="M28 46 L36 46" stroke="#8B4513" stroke-width="1"/>
                <path d="M44 42 L44 50" stroke="#8B4513" stroke-width="1"/>
                <path d="M40 46 L48 46" stroke="#8B4513" stroke-width="1"/>
                <!-- Connection -->
                <path d="M22 38 L26 35" stroke="#654321" stroke-width="2"/>
            </svg>
        `;
        text = 'Local journey';
    }
    
    transitIcon.innerHTML = iconSvg;
    message.textContent = `${text} to ${destination}...`;
    banner.classList.add('show');
    
    // Hide banner after 3 seconds
    setTimeout(() => {
        banner.classList.remove('show');
    }, 3000);
}

// Select a location and update drawer
function selectLocation(locationId) {
    currentLocationId = locationId;
    const location = rizalData.find(l => l.id === locationId);
    
    if (!location) return;
    
    // Update drawer content
    updateDrawer(location);
    
    // Open drawer
    openDrawer();
    
    // Highlight current marker
    markers.forEach(({ marker, location: loc }) => {
        if (loc.id === locationId) {
            marker.openPopup();
        }
    });
}

// Update drawer content
function updateDrawer(location) {
    document.getElementById('drawer-title').textContent = location.location_name;
    
    // Update events list
    const eventsList = document.getElementById('events-list');
    eventsList.innerHTML = '';
    
    location.significant_events.forEach(event => {
        const li = document.createElement('li');
        li.className = 'event-item';
        li.innerHTML = `
            <span class="font-medium text-gray-800">${event.title}</span>
        `;
        li.addEventListener('click', () => openModal(event, location));
        eventsList.appendChild(li);
    });
    
    // Update photo grid
    const photoGrid = document.getElementById('photo-grid');
    photoGrid.innerHTML = '';
    
    location.images.slice(0, 3).forEach((imageUrl, index) => {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = `${location.location_name} photo ${index + 1}`;
        img.className = 'photo-item w-full h-32 object-cover rounded-lg cursor-pointer';
        img.addEventListener('click', () => {
            // Show full image in modal
            openModal({
                title: location.location_name,
                description: location.description,
                images: [imageUrl]
            }, location);
        });
        photoGrid.appendChild(img);
    });
    
    // Update rating widget
    updateRatingWidget(location.id);
    
    // Update next stop button
    const nextStopBtn = document.getElementById('next-stop-btn');
    const nextStopText = document.getElementById('next-stop-text');
    
    if (location.next_stop_id) {
        const nextLocation = rizalData.find(l => l.id === location.next_stop_id);
        nextStopText.textContent = `Next stop: ${nextLocation.location_name} ->`;
        nextStopBtn.classList.remove('hidden');
    } else {
        nextStopBtn.classList.add('hidden');
    }
    
    // Re-initialize Lucide icons
    lucide.createIcons();
}

// Update rating widget
function updateRatingWidget(locationId) {
    const ratingWidget = document.getElementById('rating-widget');
    ratingWidget.innerHTML = '';
    
    const currentRating = ratings[locationId] || 0;
    
    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('button');
        star.className = `star-rating ${i <= currentRating ? 'active' : 'inactive'}`;
        star.innerHTML = '<i data-lucide="star"></i>';
        star.addEventListener('click', () => setRating(locationId, i));
        star.addEventListener('mouseenter', () => {
            // Hover effect
            for (let j = 1; j <= 5; j++) {
                const stars = ratingWidget.children;
                if (j <= i) {
                    stars[j - 1].classList.add('active');
                    stars[j - 1].classList.remove('inactive');
                } else {
                    stars[j - 1].classList.remove('active');
                    stars[j - 1].classList.add('inactive');
                }
            }
        });
        star.addEventListener('mouseleave', () => {
            // Reset to saved rating
            updateRatingWidget(locationId);
        });
        ratingWidget.appendChild(star);
    }
    
    lucide.createIcons();
}

// Set rating for a location
function setRating(locationId, rating) {
    ratings[locationId] = rating;
    localStorage.setItem('rizalLocationRatings', JSON.stringify(ratings));
    updateRatingWidget(locationId);
}

// Open drawer
function openDrawer() {
    const drawer = document.getElementById('drawer');
    const toggleBtn = document.getElementById('toggle-drawer');
    drawer.classList.remove('translate-x-full', 'closed');
    drawer.classList.add('open');
    isDrawerExpanded = false;
    drawer.classList.remove('expanded');
    drawer.classList.add('collapsed');
    toggleBtn.innerHTML = '<i data-lucide="chevron-up" class="w-6 h-6"></i>';
    lucide.createIcons();
}

// Close drawer
function closeDrawer() {
    const drawer = document.getElementById('drawer');
    drawer.classList.remove('translate-x-0', 'open');
    drawer.classList.add('closed', 'translate-x-full');
    isDrawerExpanded = false;
}

// Toggle drawer expanded/collapsed (mobile)
function toggleDrawerExpanded() {
    const drawer = document.getElementById('drawer');
    const toggleBtn = document.getElementById('toggle-drawer');
    isDrawerExpanded = !isDrawerExpanded;
    
    if (isDrawerExpanded) {
        drawer.classList.remove('collapsed');
        drawer.classList.add('expanded');
        toggleBtn.innerHTML = '<i data-lucide="chevron-down" class="w-6 h-6"></i>';
    } else {
        drawer.classList.remove('expanded');
        drawer.classList.add('collapsed');
        toggleBtn.innerHTML = '<i data-lucide="chevron-up" class="w-6 h-6"></i>';
    }
    lucide.createIcons();
}

// Open modal
function openModal(event, location) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalImages = document.getElementById('modal-images');
    const modalNavText = document.getElementById('modal-nav-text');
    
    modalTitle.textContent = event.title;
    modalDescription.textContent = event.description;
    modalNavText.textContent = "Rizal's Home";
    
    // Update modal images
    modalImages.innerHTML = '';
    if (event.images && event.images.length > 0) {
        // Show up to 2 images in modal (vertical stack)
        event.images.slice(0, 2).forEach((imageUrl, index) => {
            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = `${event.title} photo ${index + 1}`;
            img.className = 'photo-item w-full h-64 object-cover rounded-lg';
            modalImages.appendChild(img);
        });
    }
    
    modal.classList.remove('hidden');
    lucide.createIcons();
}

// Close modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');
}

// Setup event listeners
function setupEventListeners() {
    // Close drawer button
    document.getElementById('close-drawer').addEventListener('click', closeDrawer);
    
    // Toggle drawer button (mobile)
    document.getElementById('toggle-drawer').addEventListener('click', toggleDrawerExpanded);
    
    // Drawer handle swipe gestures (mobile)
    const drawerHandle = document.getElementById('drawer-handle');
    let touchStartY = 0;
    let touchEndY = 0;
    
    drawerHandle.addEventListener('touchstart', (e) => {
        touchStartY = e.changedTouches[0].screenY;
    }, false);
    
    drawerHandle.addEventListener('touchend', (e) => {
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe(touchStartY, touchEndY);
    }, false);
    
    // Handle swipe gestures
    function handleSwipe(start, end) {
        const swipeThreshold = 50;
        const diff = start - end;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe up - expand
                if (!isDrawerExpanded) {
                    toggleDrawerExpanded();
                }
            } else {
                // Swipe down - collapse
                if (isDrawerExpanded) {
                    toggleDrawerExpanded();
                }
            }
        }
    }
    
    // Close modal button
    document.getElementById('close-modal').addEventListener('click', closeModal);
    
    // Modal navigation button
    document.getElementById('modal-nav-btn').addEventListener('click', () => {
        closeModal();
        openDrawer();
    });
    
    // Next stop button
    document.getElementById('next-stop-btn').addEventListener('click', () => {
        const currentLocation = rizalData.find(l => l.id === currentLocationId);
        if (currentLocation && currentLocation.next_stop_id) {
            const nextLocation = rizalData.find(l => l.id === currentLocation.next_stop_id);
            if (nextLocation) {
                closeDrawer();
                handleMarkerClick(nextLocation);
            }
        }
    });
    
    // Close modal on backdrop click
    document.getElementById('modal').addEventListener('click', (e) => {
        if (e.target.id === 'modal') {
            closeModal();
        }
    });
    
    // Close drawer on map click (optional)
    map.on('click', () => {
        // Uncomment to close drawer when clicking on map
        // closeDrawer();
    });
}
