'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "4191be86803767c26186dd0305bd69e5",
".git/config": "25756ca1ec98a546370d3e294ab1cd7f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a528336f159dab7065c8c6d0e3dbf550",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ad33962afaeb182e15adc7bf29f406df",
".git/logs/refs/heads/main": "a9ee8db9fa8535d09748b0df4c27e025",
".git/logs/refs/remotes/origin/main": "f8ca0c9720589d2a144578b6aa5531a2",
".git/objects/00/9695a2c9bdfdd9449cdf98b57b8c70eb849ef3": "76e8534adcb770bf01d69aea317f9c6e",
".git/objects/01/fd9a5124a40eb924b14640140eaaa0d8dbcd94": "fd3cea7850821a1b53734c4d6199df6f",
".git/objects/02/4d085281e4392a11931694abe42383a78d501c": "86fe5555b69d2a4bb2fc888573c323bc",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/03/6b8a69ba682d1558ee1a1df9f23d4d2ad6876a": "9bf6e4b11b288082ff98d5b62d85c6af",
".git/objects/05/7a7217927b53cbea34afe6aa91368c6692e9f5": "f4c5cf21a662164a871f5aeb217cf417",
".git/objects/0a/2305548baa5a069ade7a4fea57ae3d1d5ca51d": "304579acca57ea5e4016e154fe400a4b",
".git/objects/0f/e36c5149d110479ff322f0b2312c32963ece2f": "26ca0e5bc7c439fd1e9d049007bf118e",
".git/objects/14/e6761d3954673bc4ac53ee057385a84ca72d91": "e9bccc757ae5a7886d6911c6c2fd127a",
".git/objects/17/3dc6b4bc5706349c6b3685ffce1fb0631ffcda": "c0e8fb7f7b2abb2598a6d3df96ad1b3e",
".git/objects/18/827a3f6f723b0b1c6acaa36eff3d564f77f8c3": "90853a42f19f31029d64c852e186bff7",
".git/objects/1b/de171979a2854d4110ba4d828345f917e48635": "01cc98fdda22b4bc3f9534a7e6106b38",
".git/objects/1c/275e5e8231caca4c843b5d9b061492d4839394": "f5e8ccce6f8d3abc11a22b7ad49d12c5",
".git/objects/22/cda30ff4d6fedeb6a7796abdd9c05da1f0b99b": "34b3eb2f8c73bd1c91b67ff4973dd841",
".git/objects/23/afb7eb035b085e7e1e6c13c7b514f617549f00": "03aff1838f5a3a8e641b75a427673201",
".git/objects/26/705a607436f8b9284c53e706dfa44194150d7a": "80068024059f9fb9e0036f9f67f76e62",
".git/objects/27/34901cc01d6decd328b3b5ee85edab135f129a": "dd0ce5aaf41d41df6df61ac11b630b3f",
".git/objects/2b/770332e2496c6b596ae3732619728de06b58fd": "31372babe784dccd901871908872ebef",
".git/objects/30/8f1e015c6fefe822fbb5f391272e776d4c6cee": "ad133ec64ca68de1299543fd31896b58",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/33/7699baffb855dee2ccb23ca411e978fe97680e": "85270e0be1fb2726a73a2737131de204",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/39/44f7f7e045ce048b8c8e7c672079e06a086a1a": "16b5ffd47034c3e9f8f22de6f485e6a5",
".git/objects/3b/9d127dbec14211faf4d4966cbc662c4663ba48": "06aa975427c78b13c56c0d2f7c8028e2",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/41/22d901302f0a11dd7cdfd503254fa9ca189c5c": "bbb92af7e4b55913056efa6b146b4e16",
".git/objects/46/29099ba95d767b1d16a8c93d476b24c8b3af04": "86eb6634d38cc9092c56c63cf734c963",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/021f2fdca21f67282a654c2c6f838349fc2d0f": "08e770eba901be08b12a22e788151138",
".git/objects/4d/107072c93ba2bdf0ed08797d5a92dff7389639": "1d0f10fd7466588a954800ab5d7a946b",
".git/objects/4e/3c5cc5f08d588aa7b574bd837db8387114cafa": "767500cacc62eef1fe464f29d447b588",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/50/8e8c6d38290d8b296164b74805a1da4dc71410": "beeab9143bdaa0c82ed6e2856b997024",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5a/13bd5a18e506d22647433b1980295ce67bcebe": "50b077c2b68b737800ac0d99a322b746",
".git/objects/5b/aa7e6c3af51b17d5a51d671b6887e9f5983fe5": "ee7f8899013bd54b1dbfe1b066258aa3",
".git/objects/5f/0377fa4b200ddf5e0cad5e27464c25fae9fe6d": "1a613d2807c9e1dc5c3df8a3d97af3df",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/72/aecabba3c9a6f69049010133bbceda1f336a62": "a241db5d7b0af96ae501acb5c4d1fed7",
".git/objects/74/5ba3eb057a957015ff5e23a1fe7eb28574a9b7": "3739a58cdd74e35bb6e1944d7975848d",
".git/objects/77/45acd5a4f5e8a96b51c3a7f6f7d5938c2f8825": "a66b5e1fa1f3e9bec7a98fba659404d1",
".git/objects/78/802be9eb1283465b8b7a955106408847672477": "9f07e059108c7e07b9a61e1674dcec08",
".git/objects/81/87f20120704b8804eefd8dd4b64fd92eb14665": "a68dc942f17713825e03f12080c36fb6",
".git/objects/87/1ab574bd7bab53c303b8df1e6e9976a1e113ee": "1e2dc56447fba4d6e2973389a6df1c32",
".git/objects/87/70b4ee2efd7a0c695aacd0e475c0833329e1f4": "cf3404261cf04b6818b06fd1d29e83ff",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/3a998aad667e46f5dc863d5477068f9b255fbc": "43d05a41f953365f77d88d8493c6e305",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/f9a422d5a51b72cd4baf1d895605a5859e0b61": "2fa0e9d4d34d8d6fba2d1f593d5460c4",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/92/5235b7859c4638a9f526036aa0bf13b76b8351": "ed4d61612befaf9be51199dfecd4f0da",
".git/objects/93/341060abb2d7625927dabe7b5fd13bf869b589": "c19c3b37f0963e1eb42134fb81f02eb9",
".git/objects/94/90ffc6d2e158b266f719d58365905c1c5060cb": "98801650050f9fa10870b4e56c89676a",
".git/objects/9e/5c339eb30c0608f96ce7a5ecc429be48d63e21": "b466c40615d5059959f1b9733713087a",
".git/objects/a4/7904b95f229a1471cba34538abead7ef3c26ee": "fc9de7d3b4df341d8a14134d82b168ca",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/ae/f0e1fcdb385161bb2c27e58a8c43d9d340a3a0": "5cdc5f0f5eba1d5d88cf6b22e70479e6",
".git/objects/b1/ce70387f15d7265d3a38131a7e6bcaa6c70c9b": "f2e19145fb8f6e38427bb8760b2025c2",
".git/objects/b5/deb68fe984c48ffd4af2a3b7f611200f6fa91e": "335e3b4f4d665ececa1b8040304680c9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/cbb13f2c30849bce689c779861c7be63d1ddf5": "289e36be9df6a836fb0503cc0fea742e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/ceb6d6f4b62f4d6a9737f6e92f7ed37a2989ab": "d381b851949f64360b3f768d9d5e6f43",
".git/objects/bc/4cb37ec959a719f6f08588ae08c293018a4cfe": "ed0b8a21a49ac9a2df4308a6232930d1",
".git/objects/bc/f3745434cc510c9a6673b4bbb69fcbe9754d63": "44060c9cd0dcf1474e17247c6637b522",
".git/objects/c3/477f5807b5d71dbf81454777ffdc1f4a91977a": "9deab5b7954ee0063c8bbe54976d0860",
".git/objects/d1/fc739bb76047b06a02c411d7ae2ca6a8e80b6c": "589a4e4df7882a325df642069dec9a4a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/2b475afdd9af56b01f69f900de2ea5ceddb059": "edd5fcffef2785bee6bb18ba0109281e",
".git/objects/d6/75c055187c361a972c933e54203d46481474bc": "b2bd6c7372da06cc23e22a6100f7243f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/dd/f3551306cd308b6e6a9367d68a1d402375227e": "9ac261949fd9371315b379d25bfd9ee0",
".git/objects/df/9e740c46c007afa3694d70e2b195695605c5ab": "9024f69d56c766fb019cda96c44618c6",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f3/9e9ac7da63439a14b0d9b54a5e327d2e3d507c": "488dca2d0227efacc60e179c74464080",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/8fe87228df5bd7aa33459db49242e082bb6fcf": "f3b00b55be3339753226c8ac0eedef17",
".git/objects/f9/86c36cab2fc480630b65cc34344417fcbe1062": "eaf98eab7304c5589e5b1b13ffd4c0e4",
".git/objects/fa/5b6ff1c6c938cb08e85f4c75bc9a49b2fc6747": "0cc6b34ed643669ad19ac0e441440171",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/refs/heads/main": "853ee2b70a20a32573758fc7aa2e9cd5",
".git/refs/remotes/origin/main": "853ee2b70a20a32573758fc7aa2e9cd5",
"assets/AssetManifest.bin": "550695f2a8be831e172be33d315f1285",
"assets/AssetManifest.bin.json": "0b9e1664ba66775b5b344b5737ea1c69",
"assets/AssetManifest.json": "bae8f1fcb9587486222583657d3fb485",
"assets/assets/co2.png": "a2bee255a8593dea352475e6955205a0",
"assets/assets/cz.png": "bb2cef3c5acfca2f39e49f1f321e2515",
"assets/assets/en.webp": "1b62c91d29eb7dabccf77a732ee109c1",
"assets/assets/fotkaNoBackground.png": "c179137123f6509bba4aca8504926e8b",
"assets/assets/gena.png": "1a3b0b1de603f590d5ab3e7bed047878",
"assets/assets/genaPng.png": "a30cbf608b663976969ed4eacf764739",
"assets/assets/gifs/checklistGif.gif": "f97f917d43804b975c5ef4e65dbe072f",
"assets/assets/gifs/chessGif.gif": "4035e9884779ece4030213628d0e1546",
"assets/assets/gifs/co2gif.gif": "a7d3e7522b9223fd95875e4db03a3796",
"assets/assets/gifs/dndGif.gif": "fea9775878105a4039eb4d60bfc564ae",
"assets/assets/gifs/o2gif.gif": "1f1eebf83c8894a0bd2d93f68765f3c7",
"assets/assets/gifs/speedreadGif.gif": "ca2b685222c99f10f26fe1e9eb851d96",
"assets/assets/gifs/vlackyGif.gif": "cd3934c807f836b72448642ed2c40aa8",
"assets/assets/gitIcon.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/assets/klinika.jpg": "a71a62f28d03ddecf1e590d8d832d327",
"assets/assets/linkedIcon.png": "c36ecdfdd41f0cd0e61ef8014cbca8df",
"assets/assets/mousePng.webp": "f946bfb4bd1cc25df4c0bfb14a24b587",
"assets/assets/nahled/checklistNahled.webp": "7658e7e9f948012ff003e9df2884f902",
"assets/assets/nahled/chessNahled.png": "72cbe2ee9b67b70a90a6a5e040e84752",
"assets/assets/nahled/d20nahled.png": "5d702d8b53ae13f5c93ab14e79612ad4",
"assets/assets/nahled/o2nahled.png": "c18233f3fdb3acd905c30fc421e56f5f",
"assets/assets/nahled/speedreadNahled.jpg": "4b0e7873ab12e8639c6ac9b05cd9e50b",
"assets/assets/nahled/trainNahled.png": "775c930cff962aeedbc12ceafcd72ab4",
"assets/assets/playIcon.png": "44725de1d590386de2b3a03b017aed98",
"assets/assets/psychtoolikonka.png": "9dbad43fd6fc24e88eeadf0fcd59f174",
"assets/assets/slider/p1.png": "5fdabaafd833bcfbdbc84ed557e4e359",
"assets/assets/slider/p2.png": "58b87754fd58cd83a22a520aa0001fb0",
"assets/assets/slider/p3.png": "d99f68add34410a7f0ea410dd66c6c1c",
"assets/assets/slider/p4.png": "c14737f8b0481debf44d524e9391be5d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "722a0ac4f29e3c28c440b3f0e21b0917",
"assets/NOTICES": "923d7b9c9d620418a33a00570816df6d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "af29721b7e3f318940f42298f0326fc2",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b3a089ab9fe29e08ea852386308c661d",
"/": "b3a089ab9fe29e08ea852386308c661d",
"main.dart.js": "4a734b0377499e3a214e2654ff9e58e6",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
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
