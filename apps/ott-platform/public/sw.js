if (!self.define) {
  let e,
    s = {};
  const a = (a, n) => (
    (a = new URL(a + ".js", n).href),
    s[a] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, i) => {
    const c =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[c]) return;
    let t = {};
    const r = (e) => a(e, c),
      u = { module: { uri: c }, exports: t, require: r };
    s[c] = Promise.all(n.map((e) => u[e] || r(e))).then((e) => (i(...e), t));
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
          revision: "e9c97f66649f88ca9ec5c325ef6c107f",
        },
        {
          url: "/_next/static/chunks/1037-8ffdb846109350e7.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/1042-af247ae0bfd7d664.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/1681-b0551bdbe7845217.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/1730-3af454e6afc98b62.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/1972-d409822a254b7a42.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/2089-2f81745f154bd0b8.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/267-d555cbd706b3039b.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/3302-4d6dfb13f4ad6a53.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/3556-0065f054d0b73bc5.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/4393-84a6b2f456a0a428.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/4447-3dd7ef059d9e3823.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/4695-c90ea52847571848.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/5011-5fc9db7c0425226b.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/6780-26f74f926423d8df.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/6938-d640c44a9e99e7e9.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/7657-e99945f437f2e1fd.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/7869-deae1607306ba001.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/8041-db6d92d96a83668e.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/814-676228fbbedc880e.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/8726-a9a74c680fb4945f.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/9960-1987c52a70b0a4d3.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/9990-230fc893fcba2516.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/ac44245a-450a825498b00525.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/layout-2788651e4e40830b.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/layout-d7d3ec2a8bedc375.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/page-9a3b595aa233ab37.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/reset-password/page-6512a5c98c35096e.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/reset-password/step-2/page-bcc61a5903fa77c9.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signout/layout-e5b6594ee64adb9b.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signout/page-57fa9ea844ca3e6a.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signup/layout-f1c0fad1e34bc5e1.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signup/page-f358031b188e4ae9.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signup/verify/page-3d8b3c031541b5d2.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/sso-callback/page-a5be42b14397cec7.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(legal)/cancel-subscription/page-63265b8e676d5717.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(legal)/cookie-policy/page-e5410e13f4806370.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(legal)/imprint/page-79ea267f058dd680.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(legal)/privacy-policy/page-305429dc4d1eb3a2.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(legal)/terms-of-services/page-82ce1164ac0b3410.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/home/page-eff7dcedac5b529b.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/layout-1883afa01704c39d.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/live/page-d390ba1fcd042251.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/matches/page-dd4b20fd638a9b4c.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/page-c24422ec37fa1818.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/players/page-94e0de27abc37d81.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/subscribe/page-283836758ab59ab9.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(restricted-lobby)/layout-874196ca47191b95.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(restricted-lobby)/plus/page-6bdf78205f24ebfa.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(test)/test-1/layout-32650ae4216775e6.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(test)/test-1/page-ef11585d2638d602.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(test)/test/layout-3f043ef342511be0.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(test)/test/page-32c46e2cdb632959.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/layout-d7b9c5b70364dab8.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/loading-ad7dd415e6177f8b.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/not-found-88ad80054729e40c.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/app/layout-de302ed9bd2dcc3e.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/app/loading-f5e7c5e9cd291cde.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/app/not-found-25f4d8658f31eaaa.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/app/page-1dd3cba476a2481e.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/framework-0b20e5459de8ca7b.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/main-0280bc98deace88e.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/main-app-87720367c22a5a26.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/pages/_app-f90658aa53dedf96.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/pages/_error-ee53d8ed8f2fd9cf.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-dd9eb2846a748db0.js",
          revision: "kQAm9usO8E4jTrNgG94G3",
        },
        {
          url: "/_next/static/css/078eaa59d15cd22b.css",
          revision: "078eaa59d15cd22b",
        },
        {
          url: "/_next/static/css/470bfb3bffa80bee.css",
          revision: "470bfb3bffa80bee",
        },
        {
          url: "/_next/static/kQAm9usO8E4jTrNgG94G3/_buildManifest.js",
          revision: "5376c8370e945f87fc76bb9b3c386704",
        },
        {
          url: "/_next/static/kQAm9usO8E4jTrNgG94G3/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
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
        { url: "/manifest.json", revision: "037ea7fe7b07fb4c74b0d663a29a72b0" },
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
              event: a,
              state: n,
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
