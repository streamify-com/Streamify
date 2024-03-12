if (!self.define) {
  let e,
    s = {};
  const n = (n, i) => (
    (n = new URL(n + ".js", i).href),
    s[n] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = n), (e.onload = s), document.head.appendChild(e);
        } else (e = n), importScripts(n), s();
      }).then(() => {
        let e = s[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (i, c) => {
    const a =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[a]) return;
    let t = {};
    const o = (e) => n(e, a),
      r = { module: { uri: a }, exports: t, require: o };
    s[a] = Promise.all(i.map((e) => r[e] || o(e))).then((e) => (c(...e), t));
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
          revision: "91577d2835595eca6ba8f994709e4024",
        },
        {
          url: "/_next/static/VJ4Ls6yGCRRNTH1qEG6Zz/_buildManifest.js",
          revision: "aa8a3612364804a671b0d9e5309c638a",
        },
        {
          url: "/_next/static/VJ4Ls6yGCRRNTH1qEG6Zz/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/127-81142f5f62a37581.js",
          revision: "VJ4Ls6yGCRRNTH1qEG6Zz",
        },
        {
          url: "/_next/static/chunks/190-9ef027d9e3a4937b.js",
          revision: "VJ4Ls6yGCRRNTH1qEG6Zz",
        },
        {
          url: "/_next/static/chunks/408-e266908d016b4c60.js",
          revision: "VJ4Ls6yGCRRNTH1qEG6Zz",
        },
        {
          url: "/_next/static/chunks/429-e389f75b42d63bbc.js",
          revision: "VJ4Ls6yGCRRNTH1qEG6Zz",
        },
        {
          url: "/_next/static/chunks/522-bd74a5d2120bf194.js",
          revision: "VJ4Ls6yGCRRNTH1qEG6Zz",
        },
        {
          url: "/_next/static/chunks/796-0c9326a7324757da.js",
          revision: "VJ4Ls6yGCRRNTH1qEG6Zz",
        },
        {
          url: "/_next/static/chunks/867-8649ed3b5a7264a4.js",
          revision: "VJ4Ls6yGCRRNTH1qEG6Zz",
        },
        {
          url: "/_next/static/chunks/870-9c565a749b9f5e54.js",
          revision: "VJ4Ls6yGCRRNTH1qEG6Zz",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/layout-6d30317df77a9706.js",
          revision: "VJ4Ls6yGCRRNTH1qEG6Zz",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/layout-e1a119f33507a254.js",
          revision: "VJ4Ls6yGCRRNTH1qEG6Zz",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/page-b24675629106ff5d.js",
          revision: "VJ4Ls6yGCRRNTH1qEG6Zz",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/sso-callback/page-eff209989bc0e844.js",
          revision: "VJ4Ls6yGCRRNTH1qEG6Zz",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(test)/test/layout-2d708d054e8fc02d.js",
          revision: "VJ4Ls6yGCRRNTH1qEG6Zz",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(test)/test/page-638455482f92f862.js",
          revision: "VJ4Ls6yGCRRNTH1qEG6Zz",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/page-58cf10151e7abc3e.js",
          revision: "VJ4Ls6yGCRRNTH1qEG6Zz",
        },
        {
          url: "/_next/static/chunks/app/layout-60fe4bdbd72eb524.js",
          revision: "VJ4Ls6yGCRRNTH1qEG6Zz",
        },
        {
          url: "/_next/static/chunks/app/loading-ffdfec588e019e99.js",
          revision: "VJ4Ls6yGCRRNTH1qEG6Zz",
        },
        {
          url: "/_next/static/chunks/app/not-found-058bb48f59728d5c.js",
          revision: "VJ4Ls6yGCRRNTH1qEG6Zz",
        },
        {
          url: "/_next/static/chunks/d454ebec-e35326d7c32d3e30.js",
          revision: "VJ4Ls6yGCRRNTH1qEG6Zz",
        },
        {
          url: "/_next/static/chunks/framework-e905d71c214c6f2b.js",
          revision: "VJ4Ls6yGCRRNTH1qEG6Zz",
        },
        {
          url: "/_next/static/chunks/main-6754df25605f282c.js",
          revision: "VJ4Ls6yGCRRNTH1qEG6Zz",
        },
        {
          url: "/_next/static/chunks/main-app-fd7c0eec1a1d0191.js",
          revision: "VJ4Ls6yGCRRNTH1qEG6Zz",
        },
        {
          url: "/_next/static/chunks/pages/_app-e44daf43b49d0832.js",
          revision: "VJ4Ls6yGCRRNTH1qEG6Zz",
        },
        {
          url: "/_next/static/chunks/pages/_error-65f6f1f9ddfc7a53.js",
          revision: "VJ4Ls6yGCRRNTH1qEG6Zz",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-f2862f4a2342f49e.js",
          revision: "VJ4Ls6yGCRRNTH1qEG6Zz",
        },
        {
          url: "/_next/static/css/bed8c79f5b4c1645.css",
          revision: "bed8c79f5b4c1645",
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
          url: "/_next/static/media/apple-touch-icon.fd75fc34.png",
          revision: "29c346c8be59005f7fbb7f01aeb91bfb",
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
          url: "/icon/icon-128x128.png",
          revision: "7206a3c9f6363f503f3d8cd79d8f6f98",
        },
        {
          url: "/icon/icon-144x144.png",
          revision: "c912d579e970e6efbb323821a343025d",
        },
        {
          url: "/icon/icon-152x152.png",
          revision: "46df7442fafa9a0b910803c9274bd27e",
        },
        {
          url: "/icon/icon-192x192.png",
          revision: "97f137e686f952ec5f6411c7e4aed975",
        },
        {
          url: "/icon/icon-256x256.png",
          revision: "437612f48ecd1236f0c56c1060ce682b",
        },
        {
          url: "/icon/icon-384x384.png",
          revision: "9d464a8bb7704f68f99a6314cc1ca2ed",
        },
        {
          url: "/icon/icon-512x512.png",
          revision: "d14db847e659cae0fa9c2addb9fff054",
        },
        {
          url: "/icon/icon-72x72.png",
          revision: "2ec23d3cc1bd3496c183a2fcbe0e6b95",
        },
        {
          url: "/icon/icon-96x96.png",
          revision: "67cdea935ae7bf94113b242307cf20c4",
        },
        { url: "/manifest.json", revision: "0db43871d38dab36c97717abe4d8b78b" },
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
              response: s,
              event: n,
              state: i,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
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
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
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
