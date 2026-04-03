// Service Worker para cache y performance
const CACHE_NAME = 'promadin-v1.0.0';
const STATIC_CACHE = 'promadin-static-v1.0.0';
const DYNAMIC_CACHE = 'promadin-dynamic-v1.0.0';

// Recursos a cachear inicialmente
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/logo-promadin.webp',
  '/favicon.svg'
];

// Recursos dinámicos a cachear
const DYNAMIC_ASSETS = [
  '/Talleres/01.webp',
  '/Talleres/02.webp',
  '/Talleres/03.webp',
  '/Talleres/04.webp',
  '/Talleres/05.webp',
  '/Talleres/06.webp',
  '/Talleres/07.webp',
  '/Talleres/08.webp',
  '/Talleres/09.webp',
  '/Talleres/10.webp',
  '/Talleres/11.webp',
  '/Talleres/12.webp',
  '/Talleres/13.webp'
];

// Instalación del service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE).then((cache) => {
        return cache.addAll(STATIC_ASSETS);
      }),
      caches.open(DYNAMIC_CACHE).then((cache) => {
        return cache.addAll(DYNAMIC_ASSETS);
      })
    ]).then(() => {
      return self.skipWaiting();
    })
  );
});

// Activación del service worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Estrategia de cache: Cache First para assets estáticos, Network First para contenido dinámico
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Cache First para assets estáticos
  if (STATIC_ASSETS.some(asset => request.url.includes(asset))) {
    event.respondWith(
      caches.match(request).then((response) => {
        return response || fetch(request).then((response) => {
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(STATIC_CACHE).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return response;
        });
      })
    );
  }
  // Network First para contenido dinámico
  else if (DYNAMIC_ASSETS.some(asset => request.url.includes(asset))) {
    event.respondWith(
      fetch(request).then((response) => {
        if (response.status === 200) {
          const responseClone = response.clone();
          caches.open(DYNAMIC_CACHE).then((cache) => {
            cache.put(request, responseClone);
          });
        }
        return response;
      }).catch(() => {
        return caches.match(request);
      })
    );
  }
  // Para otras requests, usa Network First con fallback a cache
  else {
    event.respondWith(
      fetch(request).catch(() => {
        return caches.match(request);
      })
    );
  }
});