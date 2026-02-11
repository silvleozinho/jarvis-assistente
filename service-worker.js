self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("jarvis-cache").then(cache => {
      return cache.addAll([
        "index.html",
        "style.css",
        "app.js",
        "manifest.json",
        "beep.mp3",
        "boot.mp3",
        "icon-192.png",
        "icon-512.png"
      ]);
    })
  );
});
