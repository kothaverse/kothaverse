const CACHE_NAME = 'kothaverse-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './20261121_192551.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Network-first strategy (Supabase live data sobsomoy fresh thakbe, offline hole cache dekhabe)
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        const clone = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone));
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});

// Notification click korle app open hobe
self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  e.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((list) => {
      if (list.length > 0) return list[0].focus();
      return clients.openWindow('./index.html');
    })
  );
});

// Background Push Event (App bondho thakleo kaj korbe)
self.addEventListener('push', (e) => {
  const data = e.data ? e.data.json() : { title: 'KothaVerse', body: 'নতুন আপডেট এসেছে!' };
  e.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: './20261121_192551.png',
      badge: './20261121_192551.png',
      vibrate: [200, 100, 200],
      data: { url: data.url || './index.html' }
    })
  );
});
