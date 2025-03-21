'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "63c2178ce0dc965b20d76459c1d932a7",
"assets/AssetManifest.bin.json": "6bb7e78f2069d742079324f97458dedb",
"assets/AssetManifest.json": "dfe9f10b7a628fe2d92c0fe6ef26d468",
"assets/assets/fonts/BeautifulBoldFont.ttf": "ec478fc73747085c0b7028c642d992b1",
"assets/assets/fonts/MeriendaOne.ttf": "4bb2f8baeead2c479b13f123a85b4a9c",
"assets/assets/images/0.jpg": "95516379b04c37f16944f5ee61655120",
"assets/assets/images/1.jpg": "a998dd9bd630caed1c66be8c93c17f46",
"assets/assets/images/10.jpg": "19a1d1e0ed5bfa78b93f709a76bdae55",
"assets/assets/images/11.jpg": "3611a846c8b8b86e2c90c23eb4af1d29",
"assets/assets/images/12.jpg": "5737d6995fd47a06a5c653a69de8eb3d",
"assets/assets/images/13.jpg": "630d595c03c8fd8e42641858f1b534ee",
"assets/assets/images/14.jpg": "761f9a659f0cd04db6a2c4d935d8ee5b",
"assets/assets/images/15.jpg": "644bcf6a1d05537751221bec5bf0637b",
"assets/assets/images/16.jpg": "b90800d6c2c423835daa832e8af7f3c7",
"assets/assets/images/17.jpg": "34ce5f48d95caaccda4f7fbb9b5869c5",
"assets/assets/images/18.jpg": "f03906ab700fb8743b9870e4d457337d",
"assets/assets/images/19.jpg": "cd88a4469b6576780578de58b9d76242",
"assets/assets/images/2.jpg": "5467d6e97d9368ad0b465e891546bbd5",
"assets/assets/images/20.jpg": "170fd210490e8b7e65d3caf5eb7943b1",
"assets/assets/images/21.jpg": "3ec741b11d80c104dfa00b1107bc7b3c",
"assets/assets/images/22.jpg": "f08094f8d481584f5de885363ab2ca35",
"assets/assets/images/23.jpg": "9b38e8ca560c04fc18e1ade900f590ce",
"assets/assets/images/24.jpg": "2bcaf774985b968edc3a4977439a3d46",
"assets/assets/images/25.jpg": "6e667fe18c5d1355fad6748450fa640b",
"assets/assets/images/26.jpg": "934b21a77fcbb07ed6be23a9460712c1",
"assets/assets/images/27.jpg": "f70d69d0e5b847ab5458dae9a8be4208",
"assets/assets/images/28.jpg": "fc7690e143d7ca927f632ea30426c26c",
"assets/assets/images/29.jpg": "9e013251b56168dbc29173d30c78e606",
"assets/assets/images/3.jpg": "a009de9a0d010f097c0d0d9555a09a49",
"assets/assets/images/30.jpg": "847482b0759e58a68a17bfcd10ee0193",
"assets/assets/images/31.jpg": "fa295e0ca75f195c468f9f86e2f33b08",
"assets/assets/images/32.jpg": "17bef10191828b6a35f9876d767d0680",
"assets/assets/images/33.jpg": "59887cb965cf9da088b484b1b6fb9c3c",
"assets/assets/images/34.jpg": "2b17bcda1360d0e01f0fcc62a9fd211b",
"assets/assets/images/35.jpg": "1b7a1c2331e1bc313103e09b073406d3",
"assets/assets/images/36.jpg": "b332f396df79cd32c9471401b728eb8a",
"assets/assets/images/37.jpg": "2df1f4783f432084c4590be89fe21332",
"assets/assets/images/38.jpg": "8907a66f4c64968018f99460f216ab64",
"assets/assets/images/39.jpg": "6ea249a621b2e77d7d4ce89d56f4a1ff",
"assets/assets/images/4.jpg": "a99320c21a20bf828df9694b24b32ebb",
"assets/assets/images/40.jpg": "48494aff03a0b2fd7e1a104c93f017fa",
"assets/assets/images/41.jpg": "c27fe76b0d42af191a1b66be4fac26b8",
"assets/assets/images/42.jpg": "38ca5381fd937737d6885f66aeb2d698",
"assets/assets/images/43.jpg": "3f29549a739398099e854aba38558c0c",
"assets/assets/images/44.jpg": "7e6b46ab1df2e8fbe56cd1021b43c1ca",
"assets/assets/images/45.jpg": "6117ea503c79fc3bdd226874b8a4e04e",
"assets/assets/images/46.jpg": "9d78b900d799a0962090b7e172195ad2",
"assets/assets/images/47.jpg": "c83d707434e41a9591ec141b01f61634",
"assets/assets/images/48.jpg": "7b621968a884aae8d33ae2719fffcea9",
"assets/assets/images/49.jpg": "830cb26ac99970dd0e97f10047750189",
"assets/assets/images/5.jpg": "0fac39c680b3209be5912a7b94b3a926",
"assets/assets/images/50.jpg": "080378c9858cd959b2833643849f97ce",
"assets/assets/images/51.jpg": "708f723398c6806e90f1448fddb4899f",
"assets/assets/images/52.jpg": "0be26399feb84b5e540e24fc1838eea4",
"assets/assets/images/6.jpg": "17dce634b5bb1773d42f65dac511726f",
"assets/assets/images/7.jpg": "c23403e36d823214e153c523f5a37fb3",
"assets/assets/images/8.jpg": "502be354f354af371455e1021f81a46c",
"assets/assets/images/9.jpg": "17dce634b5bb1773d42f65dac511726f",
"assets/assets/music/bgm.mp3": "5646c322695378ef358120c503b1af9e",
"assets/FontManifest.json": "bceaa6b0f9f3606035976bbe1eef9d7e",
"assets/fonts/MaterialIcons-Regular.otf": "54c31551cdc1f87d5114b04966f2e3a4",
"assets/NOTICES": "c353df2dfdfbe43e60745880d7fa66de",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "a02bd332fe6f9a5abb2a18aed890fae4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6db3d028e4f4288fc034406ba593d528",
"/": "6db3d028e4f4288fc034406ba593d528",
"main.dart.js": "4ad54b7023d379c37abcfed1fdef31e3",
"manifest.json": "c8db22e02dc4de4801c5b49e30c97c77",
"version.json": "3eec5a9a3df691aaa075da3ccbcce60c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
