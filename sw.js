const CACHE = 'graf-tgn-v1';
const ASSETS = [
  './index.html',
  './manifest.json',
  './PRO_RH_001_v3_2025.pdf',
  './MANUAL_ATRI_permisos_V3.pdf',
  './TRAMITACIO_DIETES_DGOE_v2.pdf',
  './FRM_RH_005_actualitzat.docx'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE).then(function(cache) {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k){ return k !== CACHE; })
            .map(function(k){ return caches.delete(k); })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  // Network first for weather API, cache first for local assets
  if (e.request.url.includes('api.open-meteo.com') ||
      e.request.url.includes('nominatim.openstreetmap.org')) {
    e.respondWith(
      fetch(e.request).catch(function() {
        return new Response(JSON.stringify({}), { headers: { 'Content-Type': 'application/json' }});
      })
    );
    return;
  }

  e.respondWith(
    caches.match(e.request).then(function(cached) {
      return cached || fetch(e.request).then(function(response) {
        var clone = response.clone();
        caches.open(CACHE).then(function(cache){ cache.put(e.request, clone); });
        return response;
      });
    }).catch(function() {
      return caches.match('./index.html');
    })
  );
});
