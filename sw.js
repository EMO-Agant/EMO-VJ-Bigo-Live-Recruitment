// Minimal service worker — required by some browsers (esp. Android/Chrome)
// to consider the site "installable" as a PWA. It doesn't need to do
// any real caching for this to work.
self.addEventListener('install', (e) => { self.skipWaiting(); });
self.addEventListener('activate', (e) => { self.clients.claim(); });
self.addEventListener('fetch', (e) => {
  // Pass-through: just let the network handle everything normally.
});
