const addResourcesToCache = async (resources) => {
    const cache = await caches.open("v1");
    await cache.addAll(resources);
  };
  
self.addEventListener("install", (event) => {
  event.waitUntil(
    addResourcesToCache([    
      "/simple-to-do/",
      "/simple-to-do/index.html",
      "/simple-to-do/styles/base.css",
      "/simple-to-do/styles/to-do-styles.css",
      "/simple-to-do/simple-to-do.js"
    ]),
  );
  });