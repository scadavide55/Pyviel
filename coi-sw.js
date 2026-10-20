/* Makes the page cross-origin isolated, which Python's input() and Stop need.
   GitHub Pages cannot send the two headers itself, so this small service worker adds them
   to every answer. The first visit reloads once (see index.html). It does nothing else. */
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (event) { event.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (event) {
  var request = event.request;
  if (request.cache === 'only-if-cached' && request.mode !== 'same-origin') return;
  event.respondWith(fetch(request).then(function (response) {
    if (response.status === 0) return response;
    var headers = new Headers(response.headers);
    headers.set('Cross-Origin-Embedder-Policy', 'require-corp');
    headers.set('Cross-Origin-Opener-Policy', 'same-origin');
    return new Response(response.body, {status: response.status, statusText: response.statusText, headers: headers});
  }).catch(function (error) { return Response.error(); }));
});
