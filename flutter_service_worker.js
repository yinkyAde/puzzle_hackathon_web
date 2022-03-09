'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "986cdca68785d63f840bebc213cffea2",
".git/config": "bcece7e78a8bf33fc183c97a08098502",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4ee2b9393b2a817a93f0c6f89e95ad89",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "563aed4496591a4a29354b7e762fc57b",
".git/logs/refs/heads/master": "563aed4496591a4a29354b7e762fc57b",
".git/logs/refs/remotes/origin/master": "3b89d066602d061191e6ca7528216350",
".git/objects/00/54ac00fb235f994eb018327982544555df5f70": "33159ea35fd449446c81b20b83842a6f",
".git/objects/0c/fd162cf734d7a373863c16e4999b852bd92786": "1bd0cf1bbda6fdcfee8e6fac7a06e78a",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0d/e11ad7c31bab82780af344cb75f2d67c4ecd9a": "751281390fb524e7214e935b9ca5b2cb",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/22/5fd82ac35a921fbfc86d20c1871316d6720d20": "0b4156cd5940f9e325c33678cbe985af",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/7daf3ec4ff2b242a341b6e726c414cb801afa4": "698f2c46431f0b8b3cc4524366cef62a",
".git/objects/34/254f157642fbc14c701a47d67221f56f0d22e2": "39e4f9d95c0dc04f7702eb3ab602b511",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/3f/5d1b3a4fa3b8c8004bbbc1a4e81730258b32ea": "7fbe6a624c6497dff2584f6bf7e9372d",
".git/objects/4d/e81740c6dcbba418960c224ecc1349050ab639": "f33fd8128adb11fdd4f5360006dcc135",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/53/388ba017bcf53390964b1b59cbd9a7217e0fcc": "50b0590f1d036886c3e90e12c2766e11",
".git/objects/54/b4397d7bd8fb8a9743bde1f6279b3ad06882f9": "eede07db82110f832cca663b1315e9c2",
".git/objects/63/388ffb402b2c49c3f4fa2012fc2c4605e2f894": "0f56cf5d2fef952f08f2007f6ec0b40c",
".git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
".git/objects/73/654d730e2b88df177881726d8b1109b3c540e7": "0170797067262df4c2ada4cf01116481",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/82/d9094fdf27cf0102182531425289ac2e548a6f": "454f00c762932f7a7069762c8a4ebed2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/29dc0dcd5ee702257168d27ceb935f179a4a98": "c2a8cc4a2845e8f78148a63b18d30955",
".git/objects/8f/f80f92acc04aedad47429cbe771ede79ee4628": "66351c4e9e898e947d9b6c8580dd9604",
".git/objects/9a/801240d46221e6cdf4e059eacb7b7779007d64": "f8293c4d0e9f55e0870c3bbdadf3230f",
".git/objects/a0/e23ac4df05d5d33be537f99ca201bd290ccf0f": "4680fa5aaf928465072ef1625e523cc6",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/b1/a7ccd76e2aca1ae5a39bf813e61bd8ff740e11": "bb5f28cb1470fa210abc8f592171949b",
".git/objects/b6/588c73cb9abd6bf8c23d5626b1eac98c52963e": "862765b6116e1843b179f6ba876bcb8f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/39dfc4829950b26d25d7a97d581caf62d6da83": "34660ce302ad86665ac3936b34df41b3",
".git/objects/c9/7a838da35c5e2fb8100912164f9a4f4c1a0813": "cae6ba7162d57752f68e582e849090d5",
".git/objects/d0/32d4dde15a8aa342e2e99acb1fdc00a8c7ac70": "e0675bbb8424c8f45f315a8fc9680d5c",
".git/objects/d5/fc633818e78866e748eb4eaff8f00e31958b53": "075e748c38ae3674b61f1aa8ddc4bb4c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e3/36734cef22c190f2c43aa57ec685d2d519c484": "921180605cd9a0213cb37fb527d41d98",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/refs/heads/master": "d5b0eedcec1d4a4eab23dce3c305f458",
".git/refs/remotes/origin/master": "d5b0eedcec1d4a4eab23dce3c305f458",
"assets/AssetManifest.json": "816e415802046569bc5fa3c702861f0a",
"assets/assets/images/flutterlogo.jpg": "aee5074fb630facfe8bfd859a917ffb2",
"assets/assets/images/flutterlogo.png": "0e685d59ba418c98bb0539058b19ae9a",
"assets/FontManifest.json": "ea480823b2da1152ee0a75edae515124",
"assets/fonts/ManRope/manrope-bold.ttf": "4e52de26746dee5a53685ed68bd914ef",
"assets/fonts/ManRope/manrope-extrabold.ttf": "5c850b424c2b8c249f7049e2fdfc4e17",
"assets/fonts/ManRope/manrope-light.ttf": "7d08b75b830d5c338c8c9cbbe244692c",
"assets/fonts/ManRope/manrope-medium.ttf": "6608eee398f08a422e0d2e59493863a3",
"assets/fonts/ManRope/manrope-regular.ttf": "f9736c4c8cf0ae20669d2e04eb20fab5",
"assets/fonts/ManRope/manrope-thin.ttf": "e1ce34fd5957e7560d690a68c5fa1cc2",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "c3a464424309d63dfdf066c9e72520d3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3ce36e620644378094c318414edf38d9",
"/": "3ce36e620644378094c318414edf38d9",
"main.dart.js": "c3d0563112344642d79c890eebe24fce",
"manifest.json": "fedbb5099b25fe244d5420c3e8bcf23a",
"version.json": "c26b57e73bf76d15ce6d358e55b3644c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
