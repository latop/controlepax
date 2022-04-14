'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b651caa8768fc7b1c26de61a5acaf7cb",
".git/config": "2fa2aeedf8d3c83eb795fd74316939a8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "002da849b272ed3f5a001911dc75c627",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d2f27bbd1a6d62fd945e6ab4ca80e2bf",
".git/logs/refs/heads/main": "a114f43f1cee33fe1c2d430f4a521dbf",
".git/logs/refs/remotes/origin/main": "e01a0521c212ee7412f4aad29ff89a64",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/0e039d2ad1e6ad9cd200258c112dcab2d49f21": "81934ca0496f03eb386ccc90a4f74890",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0d/e471cd1c65dd3ad21a18cd7d0a7bf89046752b": "b4cb435f109ed0edba3d0cfc6a56c9df",
".git/objects/11/368ced89c60cedff371c294db217e81a6b99ec": "2b26c38527e2dbccd0e89cae6d83f4d7",
".git/objects/18/ba14621cd4c0c71a331d0ad3067388d406f5cc": "61c5f3ed3ecfe89f0c8daad8beed1498",
".git/objects/18/d0b38711589906dd6f6f6f8c1bc58a5af9d2f4": "70b292bb630dd286482baf400b8f3961",
".git/objects/1b/ff80c9c64676d4a7ee79196f7d83fcaa4063fa": "6c673a76e78824ac5fa6361a2b49e40c",
".git/objects/21/9cd144befd95f46b1be0d7e4f93b548796a152": "b284022f4a9c30a35fe731558a9b0582",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/27/09eb63dbe3473dc6e20ec28b0424595d85860a": "363972365ce27c50c5850db0db4d6f2b",
".git/objects/2a/0aa22d9b78cb51cec3ab6df0b9080f619dc4f6": "70604e510b80b32f06efb8efc74cd211",
".git/objects/2c/4b103a7bc20213cb03582be77ba685114d5434": "f1faea51618cc8e7e9d487444a0b35e1",
".git/objects/2d/49635c89b1450e1be82b32fda4040642a79571": "58504139570e4f6f98a54b9b163ddc12",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/31/4ef8305b831854c767acc4d705f95d34e89808": "78f39e627f2581e68be5bd873d131e56",
".git/objects/32/f8bccc99ef0b2a3fccae198c4ee0345dc8b5fc": "8635faad6c687a8ca9fd63cb599c787c",
".git/objects/34/67bcd0f48a2f6b67ba0c3cf316f27731c64273": "55e9617cadf138f54f8466aa0c946ac4",
".git/objects/38/6cc6524f2bf2b63156adc0d2c9e7d524127de5": "b6640ed0bc108f4c58aee1cd45c5cbfc",
".git/objects/3a/3da0bb05b679f0a09dd3da375f54187191db76": "440f79087fb2f1828799d865a459dcc9",
".git/objects/3b/95c8514b4915bd391174b42ccf21f5894e240d": "8c3577864b94702da8e8238fbea210b9",
".git/objects/3e/e7d41a18a97f1a60e97035fdd59f005c4dfb55": "edfa62c1c36d83cb55466278eb4401f9",
".git/objects/45/7d24c6cd1632c26294d66f2708e318ed9fcf13": "b9f6590d586d7c750d8f5cb64685490f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/5476af901bc18d2d57bb423e6acea9965f083f": "40e422efdc932a84615f4859ebb26dc2",
".git/objects/47/9452e581547abf825e7826ab806a06a85cbb35": "a7a929957338f72944d7b30251cefd07",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/58/bd91aae188875e9eed1ed894d2e538567589b9": "bb3918c12b240652a586ff835a577603",
".git/objects/63/82c12638e62b3b1a6cd5a4f16f54beccee61d2": "7e7dd26b94b36824752d276f340f3776",
".git/objects/63/970ce0f8e8085726a9645a848d8452a274dae0": "6f7fbbd7b499412e37d9b51fc72c1702",
".git/objects/63/bfdac45fed9c4a0bed0d1a403dfd43dd153682": "84da456017ffec88e82191dcf9595529",
".git/objects/63/c8b9686f33a1c3c6d40ab692048455fedd57ba": "262c4d80e653ed9c373d4777414c54e3",
".git/objects/6a/23d0a4c1c58afe29911566eb7772d5aab0f4ce": "643ec234006c138d519f0223eee3b782",
".git/objects/6c/4d6b49334ce78343ee3b17d2632c9280a63b87": "fbf678d4c1fbe51c6bf44277cb80247d",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/76/cadd1506bb26b8e64f0fc5d647b2b025291600": "2fd5626f95a8e2ee842b05895168e3c8",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/80/a1b4e469281021a0ed14eb8196a2b4736c7ec4": "8f6d16f2a54811fd3b2f0326e0f94088",
".git/objects/81/00d1656b9a4c7184a2d1b58d0b4203c421a037": "2c0db69749ebc1ebf355615ce78d7b9d",
".git/objects/83/dea2532094673b8e2a06157f78dc4d1e4c5a99": "79f7ebd78d817da1a18e709a3ceeb54c",
".git/objects/84/ce6d62bedad57ba1f1da5d0e517beba8623801": "15f9cce017a412ffc5272f166f4d08aa",
".git/objects/85/436fedde924900f851842d08eaf701cefb9acd": "c48dcf74a65ab33e9bd6b9c0c7073eba",
".git/objects/85/4ee6e81057be631beea01352bf071f770140ed": "0a370f373b57250a08ca1f5b2eafd37a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/5f2ac6029bb787b0e37aa87410baca0306c88b": "26876ee52e56c4270a1aaf825d7e08cf",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/78a64decabdcba35b94c5a94bc8c5d25f4f8d5": "9aa61ca31d7f97eaa41329f1d87d0990",
".git/objects/99/dbbf9bfa73fc454e253dce94b14d3c78b7c025": "eebeb042ee3ecf22ace879b99774e8cd",
".git/objects/9b/1f0ddf7124a1f61d470740ab7a268bc1ec078a": "d71efe2d5f3bbc35059753f839b41212",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/eb4627894b7461d006b03b8c07f693aade85df": "5ac7f1e9e444b4eb1cbc8e38023e385f",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/eb43b957131a8315b6646fc9431cff6fa84617": "5a07ec4144d85b862ea3969aef8430a3",
".git/objects/b5/cf5979fa23c27339f8a0a2dc9cd703c7995f27": "19376e35cdfe2624abe6d734094767ae",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/88a99d2847004dab6d9454653438350a7e69e0": "b601ded94df7529692e7a3b690e5b30c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/e22609a41e38ef4620d0a45dc49e777ab27af8": "133f610ff10d4ef2a792e33e70aa0521",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/cb/d8adc36938b52c8acb18928b5c6180b47789d6": "0cae62df632b8786a944e17fddeba460",
".git/objects/d5/32fb66d89bc527752288118a54d8ef7819ef6f": "ad06e1c7b957cc66a67c4807751df9f6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/a237cd7343774b11d01507a3ff247971b678db": "0ffdcd85f15e637e4580830981d184c8",
".git/objects/d6/dc251e98557cf5fee666236471083ae7c6674c": "ff1a7de50cde54a6377c0361085535ce",
".git/objects/db/70b30a0e552ee2bde5f40e2e02832e66884d4b": "6d893495d0884fdffe8dc50bfa125772",
".git/objects/db/ad31480408ca6981c2d0d3d7546cbd0140da9b": "d7cf4c25da02a0afd54f0eae8e95cdff",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/5f031f7ec156c480818c5385069c423a66fab1": "6242d7e328217fd18424afd60cf20cda",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/ea/27e53442107ba3b8f5282577c74523fe349586": "41aea4ed753d91f6cf521bac1694218f",
".git/objects/ea/5313e52a9020764a52dfe1af3c240603b9eac1": "febe0a4ec392527460acb1241b18a6dc",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f5/dbc9908d0d8715113db0a50e51f2da5476d8d1": "860013a5069b61fc6463c01f6c27fe0b",
".git/objects/ff/c494fd797524e22043676fabc987df749ca4a4": "f0cec6ced1af817f90d3c7082a768069",
".git/refs/heads/main": "9528f298e24aab21b47180c381b1ab0e",
".git/refs/remotes/origin/main": "9528f298e24aab21b47180c381b1ab0e",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "654548a2fed4c106c00bd21de6db19ff",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7dcee65fa7b38b245b8252738f937843",
"/": "7dcee65fa7b38b245b8252738f937843",
"main.dart.js": "c9553386b13263a2d5facaf974fcf789",
"manifest.json": "e9daccaee1b5a793ecc2da455edcbeb4",
"version.json": "0a9d3d3db51d46bb10b6be7ca38635c5"
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
