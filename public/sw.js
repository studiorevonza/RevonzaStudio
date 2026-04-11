// Service Worker for Revonza Studio
// Improves performance and SEO through caching strategies

const CACHE_NAME = 'revonza-studio-v1.0.0';
const urlsToCache = [
  '/',
  '/about',
  '/services',
  '/projects',
  '/pricing',
  '/contact',
  '/manifest.json',
  '/favicon.ico',
  '/Aboutimage.webp',
  '/Aboutimage.png',
  '/logo.png'
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

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version if available, otherwise fetch from network
        if (response) {
          // Update cache in background for future requests
          fetch(event.request).then((networkResponse) => {
            if (networkResponse.status === 200) {
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, networkResponse.clone());
              });
            }
          });
          
          return response;
        }
        
        // Fetch from network if not in cache
        return fetch(event.request);
      }
    )
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});