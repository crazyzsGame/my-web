const filesToCache = [
    "/",
  ];
  var cacheName = 'CrazysGame';
  
  self.addEventListener('install', async function (event) {
    try {
      // const cache = await caches.open(cacheName);
      // cache.addAll(staticAssets);
      console.log('Service Worker: Installing....');
  
      event.waitUntil(
  
        // Open the Cache
        caches.open(cacheName).then(function (cache) {
          console.log('Service Worker: Caching App Shell at the moment......');
  
          // Add Files to the Cache
          return cache.addAll(filesToCache);
        })
      );
    } catch (error) {
  
    }
  });
  
  self.addEventListener('activate', (event) => {
    try {
  
      console.log('Service Worker: Activating....');
  
  
      event.waitUntil(
        caches.keys().then(function (cacheNames) {
          return Promise.all(cacheNames.map(function (key) {
            if (key !== cacheName) {
              console.log('Service Worker: Removing Old Cache', key);
              return caches.delete(key);
            }
          }));
        })
      );
  
      return self.clients.claim();
    } catch (error) {
  
    }
  });
  
  
  self.addEventListener('fetch', (event) => {
    try {
      // console.log('Service Worker: Fetch', event.request.url);
      // console.log("Url", event.request.url);
  
      event.respondWith(
        caches.match(event.request).then(function (response) {
          return response || fetch(event.request);
        })
      );
    } catch (error) {
  
    }
  });