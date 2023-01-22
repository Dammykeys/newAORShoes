//instal service worker
self.addEventListener("install", e => {
    e.waitUntil(
        //create cache called static
        caches.open("static").then(cache => {
            //upload into cache
            return cache.addAll([
                "./",
                "./src/style.css",
                "./src/script.js",
                "./images/aor_logo.png",
                "./images/aor_logo192.png",
                "./images/aor_logo512.png",
                "./images/happy.jpg",
                "./src/order.html",
                "./src/specials.html"
            ]).then(() => self.skipWaiting());
        })
    );
})

self.addEventListener("fetch", e => {
    e.respondWith(
        //create cache called static
        caches.match(e.request).then(response => {
            //upload into cache
            console.log("new sw!");
            return response || fetch(e.request);
        })
    );
})