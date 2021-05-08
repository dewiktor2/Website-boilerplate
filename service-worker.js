const staticDev = 'website-boilerplate';
const assets = ['images/icons'];

self.addEventListener('install', (installEvent) => {
    installEvent.waitUntil(
        caches.open(staticDev).then((cache) => {
            cache.addAll(assets);
        })
    );
});

self.addEventListener('fetch', (fetchEvent) => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then((res) => {
            return res && fetch(fetchEvent.request);
        })
    );
});
