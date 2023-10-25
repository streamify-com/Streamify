if (!self.define) {
  let e,
    s = {};
  const c = (c, n) => (
    (c = new URL(c + ".js", n).href),
    s[c] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = c), (e.onload = s), document.head.appendChild(e);
        } else (e = c), importScripts(c), s();
      }).then(() => {
        let e = s[c];
        if (!e) throw new Error(`Module ${c} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, a) => {
    const i =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[i]) return;
    let t = {};
    const r = (e) => c(e, i),
      o = { module: { uri: i }, exports: t, require: r };
    s[i] = Promise.all(n.map((e) => o[e] || r(e))).then((e) => (a(...e), t));
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
          revision: "7100c2b9b3730a2012c17d2cb52b34a3",
        },
        {
          url: "/_next/static/chunks/127-fa24cee7c2361b20.js",
          revision: "pE5QEMNeU8sOcLHe72pNw",
        },
        {
          url: "/_next/static/chunks/169-d4ff66ef8399fcb6.js",
          revision: "pE5QEMNeU8sOcLHe72pNw",
        },
        {
          url: "/_next/static/chunks/171-3ec3140aa4ea7466.js",
          revision: "pE5QEMNeU8sOcLHe72pNw",
        },
        {
          url: "/_next/static/chunks/393-9b62c6d92d1f0ae4.js",
          revision: "pE5QEMNeU8sOcLHe72pNw",
        },
        {
          url: "/_next/static/chunks/482-64a75726276d8898.js",
          revision: "pE5QEMNeU8sOcLHe72pNw",
        },
        {
          url: "/_next/static/chunks/496-9329413c07553cae.js",
          revision: "pE5QEMNeU8sOcLHe72pNw",
        },
        {
          url: "/_next/static/chunks/518-2bd7c847278d1878.js",
          revision: "pE5QEMNeU8sOcLHe72pNw",
        },
        {
          url: "/_next/static/chunks/524-f41d1d77b4db5261.js",
          revision: "pE5QEMNeU8sOcLHe72pNw",
        },
        {
          url: "/_next/static/chunks/576-0fdcf85b00c3cf03.js",
          revision: "pE5QEMNeU8sOcLHe72pNw",
        },
        {
          url: "/_next/static/chunks/58-5771bd07685c907f.js",
          revision: "pE5QEMNeU8sOcLHe72pNw",
        },
        {
          url: "/_next/static/chunks/7165ce4d-4f8e3ff0f00a5315.js",
          revision: "pE5QEMNeU8sOcLHe72pNw",
        },
        {
          url: "/_next/static/chunks/759-a2933fb8704d153b.js",
          revision: "pE5QEMNeU8sOcLHe72pNw",
        },
        {
          url: "/_next/static/chunks/823-d0ba8abad80f4125.js",
          revision: "pE5QEMNeU8sOcLHe72pNw",
        },
        {
          url: "/_next/static/chunks/83-2b793977929716cb.js",
          revision: "pE5QEMNeU8sOcLHe72pNw",
        },
        {
          url: "/_next/static/chunks/869-54b7bc32d5ad3310.js",
          revision: "pE5QEMNeU8sOcLHe72pNw",
        },
        {
          url: "/_next/static/chunks/873-59a60450cf5a902d.js",
          revision: "pE5QEMNeU8sOcLHe72pNw",
        },
        {
          url: "/_next/static/chunks/895-e8223713e3ef5977.js",
          revision: "pE5QEMNeU8sOcLHe72pNw",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/layout-746e1364b8196373.js",
          revision: "pE5QEMNeU8sOcLHe72pNw",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/page-d94c2c7d45dc3c54.js",
          revision: "pE5QEMNeU8sOcLHe72pNw",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/reset-password/page-b3bfd5820e0c5bc9.js",
          revision: "pE5QEMNeU8sOcLHe72pNw",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/reset-password/step-2/page-ebbb35116e63f75c.js",
          revision: "pE5QEMNeU8sOcLHe72pNw",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signout/page-cd8491dd8a0ee48a.js",
          revision: "pE5QEMNeU8sOcLHe72pNw",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signup/page-66cd002cea3bdfe8.js",
          revision: "pE5QEMNeU8sOcLHe72pNw",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signup/verify/page-69f19b9e3d10b9aa.js",
          revision: "pE5QEMNeU8sOcLHe72pNw",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/sso-callback/page-83f4142b9f384a26.js",
          revision: "pE5QEMNeU8sOcLHe72pNw",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(internal)/team/%5Bslug%5D/page-7168d737ea2a93b2.js",
          revision: "pE5QEMNeU8sOcLHe72pNw",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/blog/%5Bslug%5D/page-9d789f8b783f651c.js",
          revision: "pE5QEMNeU8sOcLHe72pNw",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/layout-22bf4b45d396f077.js",
          revision: "pE5QEMNeU8sOcLHe72pNw",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/not-found-e0b38a91adb5ffcb.js",
          revision: "pE5QEMNeU8sOcLHe72pNw",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/page-46bb8f1f39a6e2b5.js",
          revision: "pE5QEMNeU8sOcLHe72pNw",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/pricing/layout-e2128f15d3600fe3.js",
          revision: "pE5QEMNeU8sOcLHe72pNw",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/pricing/page-acba3724afae14c8.js",
          revision: "pE5QEMNeU8sOcLHe72pNw",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(restricted-lobby)/dashboard/page-bcabe3ff6f884050.js",
          revision: "pE5QEMNeU8sOcLHe72pNw",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(restricted-lobby)/layout-176a23b1b30b9123.js",
          revision: "pE5QEMNeU8sOcLHe72pNw",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(restricted-lobby)/not-found-3acc3aef1b3ab8fc.js",
          revision: "pE5QEMNeU8sOcLHe72pNw",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/layout-783ca2bf3f07e538.js",
          revision: "pE5QEMNeU8sOcLHe72pNw",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/loading-7843471d9425f07b.js",
          revision: "pE5QEMNeU8sOcLHe72pNw",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/not-found-aa17fbb8c1221b95.js",
          revision: "pE5QEMNeU8sOcLHe72pNw",
        },
        {
          url: "/_next/static/chunks/app/_not-found-71a10583c4b919c4.js",
          revision: "pE5QEMNeU8sOcLHe72pNw",
        },
        {
          url: "/_next/static/chunks/app/layout-245959f8e6fcec92.js",
          revision: "pE5QEMNeU8sOcLHe72pNw",
        },
        {
          url: "/_next/static/chunks/app/page-96deb833a1006484.js",
          revision: "pE5QEMNeU8sOcLHe72pNw",
        },
        {
          url: "/_next/static/chunks/framework-5914f800e5c1bf38.js",
          revision: "pE5QEMNeU8sOcLHe72pNw",
        },
        {
          url: "/_next/static/chunks/main-73a26ee9ad6473fc.js",
          revision: "pE5QEMNeU8sOcLHe72pNw",
        },
        {
          url: "/_next/static/chunks/main-app-6016973cf5e329c9.js",
          revision: "pE5QEMNeU8sOcLHe72pNw",
        },
        {
          url: "/_next/static/chunks/pages/_app-69efd930ac4cd735.js",
          revision: "pE5QEMNeU8sOcLHe72pNw",
        },
        {
          url: "/_next/static/chunks/pages/_error-c6a1ce7af0651385.js",
          revision: "pE5QEMNeU8sOcLHe72pNw",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-ca55356464d13853.js",
          revision: "pE5QEMNeU8sOcLHe72pNw",
        },
        {
          url: "/_next/static/css/23df03b5723e0b47.css",
          revision: "23df03b5723e0b47",
        },
        {
          url: "/_next/static/css/75b658f58c8bbf86.css",
          revision: "75b658f58c8bbf86",
        },
        {
          url: "/_next/static/css/d5777b5681df4113.css",
          revision: "d5777b5681df4113",
        },
        {
          url: "/_next/static/pE5QEMNeU8sOcLHe72pNw/_buildManifest.js",
          revision: "8e2095878e50a3d6f58a49ebcb61b7f2",
        },
        {
          url: "/_next/static/pE5QEMNeU8sOcLHe72pNw/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        { url: "/favicon.ico", revision: "78b252ce50947954133e07dd46b5ff9e" },
        {
          url: "/favicon/android-chrome-192x192.png",
          revision: "560d18324556cadfcc2086cc046ec712",
        },
        {
          url: "/favicon/android-chrome-512x512.png",
          revision: "bad3fa352eb0318c018cb984ef908288",
        },
        {
          url: "/favicon/apple-touch-icon.png",
          revision: "ba75e6956859b8fe23ce6e9d8b121eb0",
        },
        {
          url: "/favicon/browserconfig.xml",
          revision: "e4e40b0c82d228add33b5bcfe276a859",
        },
        {
          url: "/favicon/favicon-16x16.png",
          revision: "9d88813298a4caf0a7554ceee4e56945",
        },
        {
          url: "/favicon/favicon-32x32.png",
          revision: "c22b13899b0b07c9b5fd331288344155",
        },
        {
          url: "/favicon/mstile-150x150.png",
          revision: "bf3d7ad8816696affd99c2de339fa7f0",
        },
        {
          url: "/favicon/safari-pinned-tab.svg",
          revision: "2908df4d46385f3bf448a81be2758939",
        },
        {
          url: "/icon-192x192.png",
          revision: "458d20e1d2580482e53921386810fb11",
        },
        {
          url: "/icon-256x256.png",
          revision: "c522ba21b41e6ae7ef6d80f995aefcbc",
        },
        {
          url: "/icon-384x384.png",
          revision: "d03ce92e7de94296af5b92f2d62b8b0f",
        },
        {
          url: "/icon-512x512.png",
          revision: "c520e0ade99a1dd2ac3740688436a89b",
        },
        { url: "/manifest.json", revision: "45a9fcac5088271daa38e01291294494" },
        {
          url: "/registerServiceWorker.ts",
          revision: "8765915b36d922d470a3e0473e2ea46e",
        },
        {
          url: "/scripts/pixel.js",
          revision: "5108fa87c35985f2192a73aebcbd21be",
        },
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
              event: c,
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
