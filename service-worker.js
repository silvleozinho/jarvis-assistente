self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("jarvis-cache").then(cache => {
      return cache.addAll([
        "index.html",
        "style.css",
        "app.js",
        "manifest.json",
        "beep.mp3"
      ]);
    })
  );
});
