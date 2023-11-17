if (!self.define) {
  let e,
    a = {};
  const n = (n, s) => (
    (n = new URL(n + ".js", s).href),
    a[n] ||
      new Promise((a) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = n), (e.onload = a), document.head.appendChild(e);
        } else (e = n), importScripts(n), a();
      }).then(() => {
        let e = a[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (s, i) => {
    const c =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (a[c]) return;
    let t = {};
    const r = (e) => n(e, c),
      o = { module: { uri: c }, exports: t, require: r };
    a[c] = Promise.all(s.map((e) => o[e] || r(e))).then((e) => (i(...e), t));
  };
}
define(["./workbox-8c8aeaed"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/app-build-manifest.json",
          revision: "15abe813254d9d865c09ddc569f6ee48",
        },
        {
          url: "/_next/static/aGorZSZnePruVJ5gB0Ngb/_buildManifest.js",
          revision: "5376c8370e945f87fc76bb9b3c386704",
        },
        {
          url: "/_next/static/aGorZSZnePruVJ5gB0Ngb/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/1037-932dd54a4c505126.js",
          revision: "aGorZSZnePruVJ5gB0Ngb",
        },
        {
          url: "/_next/static/chunks/1681-b0551bdbe7845217.js",
          revision: "aGorZSZnePruVJ5gB0Ngb",
        },
        {
          url: "/_next/static/chunks/1972-d409822a254b7a42.js",
          revision: "aGorZSZnePruVJ5gB0Ngb",
        },
        {
          url: "/_next/static/chunks/3556-0065f054d0b73bc5.js",
          revision: "aGorZSZnePruVJ5gB0Ngb",
        },
        {
          url: "/_next/static/chunks/4053-56d5857ad6f2f6fb.js",
          revision: "aGorZSZnePruVJ5gB0Ngb",
        },
        {
          url: "/_next/static/chunks/4393-84a6b2f456a0a428.js",
          revision: "aGorZSZnePruVJ5gB0Ngb",
        },
        {
          url: "/_next/static/chunks/4695-c90ea52847571848.js",
          revision: "aGorZSZnePruVJ5gB0Ngb",
        },
        {
          url: "/_next/static/chunks/6313-86e1aba916e6bfe0.js",
          revision: "aGorZSZnePruVJ5gB0Ngb",
        },
        {
          url: "/_next/static/chunks/6780-26f74f926423d8df.js",
          revision: "aGorZSZnePruVJ5gB0Ngb",
        },
        {
          url: "/_next/static/chunks/6938-d640c44a9e99e7e9.js",
          revision: "aGorZSZnePruVJ5gB0Ngb",
        },
        {
          url: "/_next/static/chunks/6964-2a059464c20bf389.js",
          revision: "aGorZSZnePruVJ5gB0Ngb",
        },
        {
          url: "/_next/static/chunks/7657-e99945f437f2e1fd.js",
          revision: "aGorZSZnePruVJ5gB0Ngb",
        },
        {
          url: "/_next/static/chunks/7869-deae1607306ba001.js",
          revision: "aGorZSZnePruVJ5gB0Ngb",
        },
        {
          url: "/_next/static/chunks/8041-db6d92d96a83668e.js",
          revision: "aGorZSZnePruVJ5gB0Ngb",
        },
        {
          url: "/_next/static/chunks/9499-956cd09b597e018c.js",
          revision: "aGorZSZnePruVJ5gB0Ngb",
        },
        {
          url: "/_next/static/chunks/9626-d95e1ca723611f4f.js",
          revision: "aGorZSZnePruVJ5gB0Ngb",
        },
        {
          url: "/_next/static/chunks/9793-08b533a1049f2691.js",
          revision: "aGorZSZnePruVJ5gB0Ngb",
        },
        {
          url: "/_next/static/chunks/9960-b1e6c0054011c4fc.js",
          revision: "aGorZSZnePruVJ5gB0Ngb",
        },
        {
          url: "/_next/static/chunks/9990-230fc893fcba2516.js",
          revision: "aGorZSZnePruVJ5gB0Ngb",
        },
        {
          url: "/_next/static/chunks/ac44245a-450a825498b00525.js",
          revision: "aGorZSZnePruVJ5gB0Ngb",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/layout-5e1ea3a719fdbc9d.js",
          revision: "aGorZSZnePruVJ5gB0Ngb",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/layout-d7d3ec2a8bedc375.js",
          revision: "aGorZSZnePruVJ5gB0Ngb",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/page-01c3fdf02a59feb4.js",
          revision: "aGorZSZnePruVJ5gB0Ngb",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/reset-password/page-4b1e84e3fccbfd66.js",
          revision: "aGorZSZnePruVJ5gB0Ngb",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/reset-password/step-2/page-c585246efaf41725.js",
          revision: "aGorZSZnePruVJ5gB0Ngb",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signout/layout-e5b6594ee64adb9b.js",
          revision: "aGorZSZnePruVJ5gB0Ngb",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signout/page-475a83dc9a25c501.js",
          revision: "aGorZSZnePruVJ5gB0Ngb",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signup/layout-f1c0fad1e34bc5e1.js",
          revision: "aGorZSZnePruVJ5gB0Ngb",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signup/page-f825178cabd0e895.js",
          revision: "aGorZSZnePruVJ5gB0Ngb",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signup/verify/page-b5b2f0f1319c268f.js",
          revision: "aGorZSZnePruVJ5gB0Ngb",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/sso-callback/page-e418d2afb456b94e.js",
          revision: "aGorZSZnePruVJ5gB0Ngb",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/home/page-5f2ef04255e21062.js",
          revision: "aGorZSZnePruVJ5gB0Ngb",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/layout-263d067e0e133a08.js",
          revision: "aGorZSZnePruVJ5gB0Ngb",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/live/page-27eb84aa97beb0aa.js",
          revision: "aGorZSZnePruVJ5gB0Ngb",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/matches/page-3dd4152a74510284.js",
          revision: "aGorZSZnePruVJ5gB0Ngb",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/page-c24422ec37fa1818.js",
          revision: "aGorZSZnePruVJ5gB0Ngb",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/players/page-4b6d10891e4769d2.js",
          revision: "aGorZSZnePruVJ5gB0Ngb",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/subscribe/page-f80d8973d8f2929c.js",
          revision: "aGorZSZnePruVJ5gB0Ngb",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(restricted-lobby)/layout-ef922e58ec46061b.js",
          revision: "aGorZSZnePruVJ5gB0Ngb",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(restricted-lobby)/plus/page-44a4c90aede6b16c.js",
          revision: "aGorZSZnePruVJ5gB0Ngb",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(test)/layout-fe38ca9536441b16.js",
          revision: "aGorZSZnePruVJ5gB0Ngb",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(test)/test/page-703f35907944afb7.js",
          revision: "aGorZSZnePruVJ5gB0Ngb",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/layout-4be8c368e253c253.js",
          revision: "aGorZSZnePruVJ5gB0Ngb",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/loading-ad7dd415e6177f8b.js",
          revision: "aGorZSZnePruVJ5gB0Ngb",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/not-found-88ad80054729e40c.js",
          revision: "aGorZSZnePruVJ5gB0Ngb",
        },
        {
          url: "/_next/static/chunks/app/layout-41792e39b49cd2da.js",
          revision: "aGorZSZnePruVJ5gB0Ngb",
        },
        {
          url: "/_next/static/chunks/app/loading-f5e7c5e9cd291cde.js",
          revision: "aGorZSZnePruVJ5gB0Ngb",
        },
        {
          url: "/_next/static/chunks/app/not-found-25f4d8658f31eaaa.js",
          revision: "aGorZSZnePruVJ5gB0Ngb",
        },
        {
          url: "/_next/static/chunks/app/page-1dd3cba476a2481e.js",
          revision: "aGorZSZnePruVJ5gB0Ngb",
        },
        {
          url: "/_next/static/chunks/framework-0b20e5459de8ca7b.js",
          revision: "aGorZSZnePruVJ5gB0Ngb",
        },
        {
          url: "/_next/static/chunks/main-0280bc98deace88e.js",
          revision: "aGorZSZnePruVJ5gB0Ngb",
        },
        {
          url: "/_next/static/chunks/main-app-87720367c22a5a26.js",
          revision: "aGorZSZnePruVJ5gB0Ngb",
        },
        {
          url: "/_next/static/chunks/pages/_app-f90658aa53dedf96.js",
          revision: "aGorZSZnePruVJ5gB0Ngb",
        },
        {
          url: "/_next/static/chunks/pages/_error-ee53d8ed8f2fd9cf.js",
          revision: "aGorZSZnePruVJ5gB0Ngb",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-e70e54bfefdeaa72.js",
          revision: "aGorZSZnePruVJ5gB0Ngb",
        },
        {
          url: "/_next/static/css/d940d256d2be928b.css",
          revision: "d940d256d2be928b",
        },
        {
          url: "/_next/static/css/e55350b8c9f474dc.css",
          revision: "e55350b8c9f474dc",
        },
        {
          url: "/_next/static/media/2a2f0a2acb227a56-s.p.ttf",
          revision: "1753a05196abeef95c32f10246bd6473",
        },
        {
          url: "/_next/static/media/8d213a541b09f168-s.p.ttf",
          revision: "cad1054327a25f42f2447d1829596bfe",
        },
        {
          url: "/_next/static/media/a32dfa2b07c3c134-s.p.ttf",
          revision: "805f19a5237533c893b6a6f00dd3ef35",
        },
        {
          url: "/_next/static/media/c146dcab14729d84-s.p.ttf",
          revision: "ba74cc325d5f67d0efbeda51616352db",
        },
        {
          url: "/favicon/android-chrome-192x192.png",
          revision: "87012cd05001408e02b1fbca59f46342",
        },
        {
          url: "/favicon/android-chrome-512x512.png",
          revision: "94508b12c21636a181b2a4dce889440d",
        },
        {
          url: "/favicon/apple-touch-icon.png",
          revision: "29c346c8be59005f7fbb7f01aeb91bfb",
        },
        {
          url: "/favicon/browserconfig.xml",
          revision: "c9f4763fc036a58115006c8d1a6aea0d",
        },
        {
          url: "/favicon/favicon-16x16.png",
          revision: "c20c298cea5f506216e2e699429b9385",
        },
        {
          url: "/favicon/favicon-32x32.png",
          revision: "b71ce1c05654701f24a8f1e55e63cf3c",
        },
        {
          url: "/favicon/favicon.ico",
          revision: "8939d1503e9629ef0e701f839e812ae1",
        },
        {
          url: "/favicon/mstile-144x144.png",
          revision: "87d752b90dc4f0c710cd0a720f45d4b0",
        },
        {
          url: "/favicon/mstile-150x150.png",
          revision: "0110512980dba6d689ce61fa7b6a5cdf",
        },
        {
          url: "/favicon/mstile-310x150.png",
          revision: "63815e71a86793062895fdb2f00144af",
        },
        {
          url: "/favicon/mstile-310x310.png",
          revision: "95a9dd69a15e69d4ab7b08720d34515c",
        },
        {
          url: "/favicon/mstile-70x70.png",
          revision: "0b717268c917fc023eebc601f566e5d1",
        },
        {
          url: "/favicon/safari-pinned-tab.svg",
          revision: "f1ce1c46cc4c7c45ec2bef63431f4cff",
        },
        {
          url: "/favicon/site.webmanifest",
          revision: "8093cf8e95b087e9277b6e62753e9425",
        },
        {
          url: "/icon/icon-192x192.png",
          revision: "458d20e1d2580482e53921386810fb11",
        },
        {
          url: "/icon/icon-256x256.png",
          revision: "c522ba21b41e6ae7ef6d80f995aefcbc",
        },
        {
          url: "/icon/icon-384x384.png",
          revision: "d03ce92e7de94296af5b92f2d62b8b0f",
        },
        {
          url: "/icon/icon-512x512.png",
          revision: "c520e0ade99a1dd2ac3740688436a89b",
        },
        { url: "/manifest.json", revision: "f23c4c5c2c9b64f87030df480737c621" },
      ],
      { ignoreURLParametersMatching: [] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: a,
              event: n,
              state: s,
            }) =>
              a && "opaqueredirect" === a.type
                ? new Response(a.body, {
                    status: 200,
                    statusText: "OK",
                    headers: a.headers,
                  })
                : a,
          },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const a = e.pathname;
        return !a.startsWith("/api/auth/") && !!a.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET",
    );
});
