self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('evolveme-v2').then(function(cache) {
      return cache.addAll([
        './index.html',
        './manifest.json',
        './stage0.png',
        './stage1.png',
        './stage2.png'
      ]);
    })
  );
});
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});