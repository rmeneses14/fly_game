// ─── Baloo Adventure SW v3 ───────────────────────────────────────────────────
const CACHE_NAME = 'baloo-adventure-v3';
const BASE = '/fly_game';

const ASSETS = [
  BASE + '/',
  BASE + '/index.html',
  BASE + '/manifest.json',
  BASE + '/icons/icon-192x192.png',
  BASE + '/icons/icon-512x512.png',
];

self.addEventListener('install', event => {
  // Forzar activación inmediata sin esperar tabs viejos
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())  // Tomar control inmediato de todos los tabs
  );
});

self.addEventListener('fetch', event => {
  // Solo cachear recursos del mismo origin
  if (!event.request.url.startsWith(self.location.origin)) {
    event.respondWith(fetch(event.request));
    return;
  }
  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request).then(response => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
        return response;
      });
    }).catch(() => caches.match(BASE + '/index.html'))
  );
});
