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
    const l = (e) => c(e, i),
      o = { module: { uri: i }, exports: t, require: l };
    s[i] = Promise.all(n.map((e) => o[e] || l(e))).then((e) => (a(...e), t));
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
          revision: "a06d8d7f89dba979f20c68d83e73a18b",
        },
        {
          url: "/_next/static/OQ89GFcjjj2IKbb3fLlkB/_buildManifest.js",
          revision: "5deabdc4d0c9c015118e2b36df205aef",
        },
        {
          url: "/_next/static/OQ89GFcjjj2IKbb3fLlkB/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/164-2b893dba0443e11f.js",
          revision: "OQ89GFcjjj2IKbb3fLlkB",
        },
        {
          url: "/_next/static/chunks/262-f41702d9089c992f.js",
          revision: "OQ89GFcjjj2IKbb3fLlkB",
        },
        {
          url: "/_next/static/chunks/270-ff5ef430b0835818.js",
          revision: "OQ89GFcjjj2IKbb3fLlkB",
        },
        {
          url: "/_next/static/chunks/34-f4f9660aedf12d29.js",
          revision: "OQ89GFcjjj2IKbb3fLlkB",
        },
        {
          url: "/_next/static/chunks/397-c549ef6a076a9a0d.js",
          revision: "OQ89GFcjjj2IKbb3fLlkB",
        },
        {
          url: "/_next/static/chunks/470-427ccfedb53be86c.js",
          revision: "OQ89GFcjjj2IKbb3fLlkB",
        },
        {
          url: "/_next/static/chunks/482-b167a96e1c7efc6e.js",
          revision: "OQ89GFcjjj2IKbb3fLlkB",
        },
        {
          url: "/_next/static/chunks/531-3548e65986166e4f.js",
          revision: "OQ89GFcjjj2IKbb3fLlkB",
        },
        {
          url: "/_next/static/chunks/563-f8fbcc1dd03bb0d3.js",
          revision: "OQ89GFcjjj2IKbb3fLlkB",
        },
        {
          url: "/_next/static/chunks/6cd42ff4-831fc8744cc0ef77.js",
          revision: "OQ89GFcjjj2IKbb3fLlkB",
        },
        {
          url: "/_next/static/chunks/780-9e5f7e71ee535361.js",
          revision: "OQ89GFcjjj2IKbb3fLlkB",
        },
        {
          url: "/_next/static/chunks/798-dfcab41ac891b0ec.js",
          revision: "OQ89GFcjjj2IKbb3fLlkB",
        },
        {
          url: "/_next/static/chunks/823-4c60d35a21116d70.js",
          revision: "OQ89GFcjjj2IKbb3fLlkB",
        },
        {
          url: "/_next/static/chunks/828-bc3b442fe5417552.js",
          revision: "OQ89GFcjjj2IKbb3fLlkB",
        },
        {
          url: "/_next/static/chunks/92-5867b6f2e938736a.js",
          revision: "OQ89GFcjjj2IKbb3fLlkB",
        },
        {
          url: "/_next/static/chunks/981-f68939ad5f92ebef.js",
          revision: "OQ89GFcjjj2IKbb3fLlkB",
        },
        {
          url: "/_next/static/chunks/995-dd52dc71e88d1c22.js",
          revision: "OQ89GFcjjj2IKbb3fLlkB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/layout-ac0aa8a27cfc0ee5.js",
          revision: "OQ89GFcjjj2IKbb3fLlkB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/page-9b722a082ea02d6c.js",
          revision: "OQ89GFcjjj2IKbb3fLlkB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/reset-password/page-bd7ca775113427f3.js",
          revision: "OQ89GFcjjj2IKbb3fLlkB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/reset-password/step-2/page-198598bcc5b88181.js",
          revision: "OQ89GFcjjj2IKbb3fLlkB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signout/page-6d3e39cf5eb93c3d.js",
          revision: "OQ89GFcjjj2IKbb3fLlkB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signup/page-2560ffb24b37f686.js",
          revision: "OQ89GFcjjj2IKbb3fLlkB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signup/verify/page-3c190b1736786005.js",
          revision: "OQ89GFcjjj2IKbb3fLlkB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/sso-callback/page-64586beef60c5e21.js",
          revision: "OQ89GFcjjj2IKbb3fLlkB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/home/page-ed9becd90728c060.js",
          revision: "OQ89GFcjjj2IKbb3fLlkB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/layout-5ecd767ade94df7a.js",
          revision: "OQ89GFcjjj2IKbb3fLlkB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/live/page-08123abb22aa091b.js",
          revision: "OQ89GFcjjj2IKbb3fLlkB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/matches/page-c999f2a5468ef3f5.js",
          revision: "OQ89GFcjjj2IKbb3fLlkB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/page-4f2f5b91ad6ff3d8.js",
          revision: "OQ89GFcjjj2IKbb3fLlkB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/players/page-51f23aa8808b46a9.js",
          revision: "OQ89GFcjjj2IKbb3fLlkB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/subscribe/page-8acc47275ebdba77.js",
          revision: "OQ89GFcjjj2IKbb3fLlkB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(restricted-lobby)/layout-f552502c868e4c5b.js",
          revision: "OQ89GFcjjj2IKbb3fLlkB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(restricted-lobby)/plus/page-de4ea7fddf1ed8aa.js",
          revision: "OQ89GFcjjj2IKbb3fLlkB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/layout-8d7d0cc6a94484cb.js",
          revision: "OQ89GFcjjj2IKbb3fLlkB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/loading-740b9b7618eb02ce.js",
          revision: "OQ89GFcjjj2IKbb3fLlkB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/not-found-60c1a1588ceea307.js",
          revision: "OQ89GFcjjj2IKbb3fLlkB",
        },
        {
          url: "/_next/static/chunks/app/layout-c75dc312b79cc793.js",
          revision: "OQ89GFcjjj2IKbb3fLlkB",
        },
        {
          url: "/_next/static/chunks/app/not-found-e79c2a38c57025d9.js",
          revision: "OQ89GFcjjj2IKbb3fLlkB",
        },
        {
          url: "/_next/static/chunks/app/page-76e389cac6ca96d0.js",
          revision: "OQ89GFcjjj2IKbb3fLlkB",
        },
        {
          url: "/_next/static/chunks/framework-eb124dc7acb3bb04.js",
          revision: "OQ89GFcjjj2IKbb3fLlkB",
        },
        {
          url: "/_next/static/chunks/main-8091b9a215bfea14.js",
          revision: "OQ89GFcjjj2IKbb3fLlkB",
        },
        {
          url: "/_next/static/chunks/main-app-0b627b38a934795f.js",
          revision: "OQ89GFcjjj2IKbb3fLlkB",
        },
        {
          url: "/_next/static/chunks/pages/_app-f8eb5b70d2cb58f5.js",
          revision: "OQ89GFcjjj2IKbb3fLlkB",
        },
        {
          url: "/_next/static/chunks/pages/_error-3d919e742507c7cb.js",
          revision: "OQ89GFcjjj2IKbb3fLlkB",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-1556db7e4ee4c830.js",
          revision: "OQ89GFcjjj2IKbb3fLlkB",
        },
        {
          url: "/_next/static/css/23df03b5723e0b47.css",
          revision: "23df03b5723e0b47",
        },
        {
          url: "/_next/static/css/dd7260b681ec3baa.css",
          revision: "dd7260b681ec3baa",
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
