const CACHE_NAME = 'rizal-footsteps-v5';
const APP_SHELL = ['./', './index.html', './style.css', './app.js', './data.js', './joserizal.svg', './vendor/maptiler-sdk.css', './vendor/maptiler-sdk.umd.min.js', './vendor/leaflet-maptilersdk.js'];

self.addEventListener('install', event => {
    event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)));
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))));
    self.clients.claim();
});

self.addEventListener('fetch', event => {
    const request = event.request;
    if (request.method !== 'GET') return;
    const url = new URL(request.url);
    const isMapTile = url.hostname === 'api.maptiler.com';
    const isAppAsset = url.origin === self.location.origin;
    if (!isMapTile && !isAppAsset) return;

    event.respondWith(
        caches.match(request).then(cached => {
            const network = fetch(request).then(response => {
                if (response.ok || response.type === 'opaque') {
                    const copy = response.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
                }
                return response;
            }).catch(() => cached || Response.error());
            return cached || network;
        })
    );
});
