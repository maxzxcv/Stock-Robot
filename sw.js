const CACHE_NAME = 'repair-stock-v1';
const ASSETS = [
  'index.html',
  'Search.html',
  'add_Item.html',
  'view_category.html',
  'logodrive.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});