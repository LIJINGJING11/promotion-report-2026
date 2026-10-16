const CACHE_VERSION = '20261016-v1';
const STATIC_CACHE = `promotion-static-${CACHE_VERSION}`;
const RUNTIME_CACHE = `promotion-runtime-${CACHE_VERSION}`;

const APP_SHELL = [
  './', './index.html', './project.html', './organization.html',
  './styles.css', './project.css', './app.js', './project.js',
  './organization.js', './materials-manager.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys
          .filter((key) => key.startsWith('promotion-') && ![STATIC_CACHE, RUNTIME_CACHE].includes(key))
          .map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

const sameOrigin = (request) => new URL(request.url).origin === self.location.origin;
const isDocument = (request) => request.mode === 'navigate' || request.destination === 'document';
const isImage = (request) => request.destination === 'image';
const isScriptOrStyle = (request) => ['script', 'style'].includes(request.destination);
const isLargeMedia = (request) => {
  const pathname = new URL(request.url).pathname.toLowerCase();
  return request.destination === 'video' || pathname.endsWith('.pdf') || pathname.endsWith('.mov') || pathname.endsWith('.mp4');
};

const networkFirst = async (request) => {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(STATIC_CACHE);
      cache.put(request, response.clone());
    }
    return response;
  } catch (_) {
    return (await caches.match(request)) || caches.match('./index.html');
  }
};

const staleWhileRevalidate = async (request) => {
  const cache = await caches.open(RUNTIME_CACHE);
  const cached = await cache.match(request);
  const update = fetch(request).then((response) => {
    if (response.ok) cache.put(request, response.clone());
    return response;
  }).catch(() => cached);
  return cached || update;
};

const cacheFirst = async (request) => {
  const cache = await caches.open(RUNTIME_CACHE);
  const cached = await cache.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (response.ok) cache.put(request, response.clone());
  return response;
};

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET' || !sameOrigin(request) || isLargeMedia(request)) return;
  if (isDocument(request)) event.respondWith(networkFirst(request));
  else if (isImage(request)) event.respondWith(cacheFirst(request));
  else if (isScriptOrStyle(request)) event.respondWith(staleWhileRevalidate(request));
});
