const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/index.js',
  "/images/coffee1.jpg",
  "/images/coffee2.jpg",
  "/images/coffee3.jpg",
  "/images/coffee4.jpg",
  "/images/coffee5.jpg",
  "/images/coffee6.jpg",
  "/images/coffee7.jpg",
  "/images/coffee8.jpg",
  "/images/coffee9.jpg",
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

//with out kill switch
/*
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
*/
//Kill switch
let isServiceWorkerEnabled = true; // This variable controls the kill switch

self.addEventListener('fetch', event => {
  if (!isServiceWorkerEnabled) {
    console.log("bypassing service worker");
    // If the kill switch is disabled, bypass the service worker
    return fetch(event.request);
  }

  // Service worker logic when enabled
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request).then(networkResponse => {
        // Cache new requests
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      });
    })
  );
});

// Function to toggle the kill switch status
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'toggleKillSwitch') {
    isServiceWorkerEnabled = event.data.isEnabled;
    console.log(`Service worker kill switch is now ${isServiceWorkerEnabled ? 'enabled' : 'disabled'}.`);
  }
}); 
