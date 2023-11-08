if (!self.define) {
  let e,
    s = {};
  const n = (n, t) => (
    (n = new URL(n + ".js", t).href),
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
  self.define = (t, i) => {
    const a =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[a]) return;
    let c = {};
    const r = (e) => n(e, a),
      o = { module: { uri: a }, exports: c, require: r };
    s[a] = Promise.all(t.map((e) => o[e] || r(e))).then((e) => (i(...e), c));
  };
}
define(["./workbox-14389475"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/chunks/14-b476db2f4504d764.js",
          revision: "tPx8e9gz9rinVd3W6S2zC",
        },
        {
          url: "/_next/static/chunks/157-05b6838cd2901e97.js",
          revision: "tPx8e9gz9rinVd3W6S2zC",
        },
        {
          url: "/_next/static/chunks/169-dc5fc93d530e8d93.js",
          revision: "tPx8e9gz9rinVd3W6S2zC",
        },
        {
          url: "/_next/static/chunks/193-9edd6ddcf2cd5214.js",
          revision: "tPx8e9gz9rinVd3W6S2zC",
        },
        {
          url: "/_next/static/chunks/218-a64bfc7ba7c1b594.js",
          revision: "tPx8e9gz9rinVd3W6S2zC",
        },
        {
          url: "/_next/static/chunks/320-c0aa3c8cb1a598fe.js",
          revision: "tPx8e9gz9rinVd3W6S2zC",
        },
        {
          url: "/_next/static/chunks/482-f7b202caf5c9daa2.js",
          revision: "tPx8e9gz9rinVd3W6S2zC",
        },
        {
          url: "/_next/static/chunks/483-e79ac216b2bdd674.js",
          revision: "tPx8e9gz9rinVd3W6S2zC",
        },
        {
          url: "/_next/static/chunks/581-3b0ee1d528ea9e5c.js",
          revision: "tPx8e9gz9rinVd3W6S2zC",
        },
        {
          url: "/_next/static/chunks/606-6e7805a33417ad29.js",
          revision: "tPx8e9gz9rinVd3W6S2zC",
        },
        {
          url: "/_next/static/chunks/647-e86a3fa43662852d.js",
          revision: "tPx8e9gz9rinVd3W6S2zC",
        },
        {
          url: "/_next/static/chunks/651-22d915a99bd7b791.js",
          revision: "tPx8e9gz9rinVd3W6S2zC",
        },
        {
          url: "/_next/static/chunks/675-7143251eae23e32f.js",
          revision: "tPx8e9gz9rinVd3W6S2zC",
        },
        {
          url: "/_next/static/chunks/7165ce4d-29037dc9c5c581ee.js",
          revision: "tPx8e9gz9rinVd3W6S2zC",
        },
        {
          url: "/_next/static/chunks/838-107345369174ee3e.js",
          revision: "tPx8e9gz9rinVd3W6S2zC",
        },
        {
          url: "/_next/static/chunks/907-3e072da4d7b3a64d.js",
          revision: "tPx8e9gz9rinVd3W6S2zC",
        },
        {
          url: "/_next/static/chunks/91-3fa2f6b3772b7a12.js",
          revision: "tPx8e9gz9rinVd3W6S2zC",
        },
        {
          url: "/_next/static/chunks/952-3ad25a22a0f38a2d.js",
          revision: "tPx8e9gz9rinVd3W6S2zC",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/layout-e263740d85d473d8.js",
          revision: "tPx8e9gz9rinVd3W6S2zC",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/page-b7956e8b313fc8f3.js",
          revision: "tPx8e9gz9rinVd3W6S2zC",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/reset-password/page-b660bf5d66b3c8f4.js",
          revision: "tPx8e9gz9rinVd3W6S2zC",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/reset-password/step-2/page-606bed5c53e7f143.js",
          revision: "tPx8e9gz9rinVd3W6S2zC",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signout/page-b119d42aed7ab2f6.js",
          revision: "tPx8e9gz9rinVd3W6S2zC",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signup/page-4761363ebc982ee8.js",
          revision: "tPx8e9gz9rinVd3W6S2zC",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signup/verify/page-c1200222fc7effcc.js",
          revision: "tPx8e9gz9rinVd3W6S2zC",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/sso-callback/page-dba5a24ca9d07394.js",
          revision: "tPx8e9gz9rinVd3W6S2zC",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/home/page-bfa61ee075ea94d5.js",
          revision: "tPx8e9gz9rinVd3W6S2zC",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/layout-091a7af4ebf5f708.js",
          revision: "tPx8e9gz9rinVd3W6S2zC",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/live/page-5ec329979939f0b8.js",
          revision: "tPx8e9gz9rinVd3W6S2zC",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/matches/page-39bc4d2e72370532.js",
          revision: "tPx8e9gz9rinVd3W6S2zC",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/page-ac9dbc7e02608f61.js",
          revision: "tPx8e9gz9rinVd3W6S2zC",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/players/page-00a090e8970b7bf8.js",
          revision: "tPx8e9gz9rinVd3W6S2zC",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/subscribe/page-9b0789d18a9846c7.js",
          revision: "tPx8e9gz9rinVd3W6S2zC",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(restricted-lobby)/layout-c558b7f8a5c9f1e3.js",
          revision: "tPx8e9gz9rinVd3W6S2zC",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(restricted-lobby)/plus/page-37fc96094c27ef65.js",
          revision: "tPx8e9gz9rinVd3W6S2zC",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(test)/test/page-6b996f4c92d109f5.js",
          revision: "tPx8e9gz9rinVd3W6S2zC",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/layout-d07bf37abc93da27.js",
          revision: "tPx8e9gz9rinVd3W6S2zC",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/loading-3817f0c8fe990087.js",
          revision: "tPx8e9gz9rinVd3W6S2zC",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/not-found-78f3ddf47fb836bb.js",
          revision: "tPx8e9gz9rinVd3W6S2zC",
        },
        {
          url: "/_next/static/chunks/app/layout-4ce87513ca8b28e0.js",
          revision: "tPx8e9gz9rinVd3W6S2zC",
        },
        {
          url: "/_next/static/chunks/app/not-found-6cef52c748b84ab1.js",
          revision: "tPx8e9gz9rinVd3W6S2zC",
        },
        {
          url: "/_next/static/chunks/app/page-32974f3bd66c5639.js",
          revision: "tPx8e9gz9rinVd3W6S2zC",
        },
        {
          url: "/_next/static/chunks/framework-eb124dc7acb3bb04.js",
          revision: "tPx8e9gz9rinVd3W6S2zC",
        },
        {
          url: "/_next/static/chunks/main-app-85a5635d4f178ef4.js",
          revision: "tPx8e9gz9rinVd3W6S2zC",
        },
        {
          url: "/_next/static/chunks/main-ed821f054b10a4d5.js",
          revision: "tPx8e9gz9rinVd3W6S2zC",
        },
        {
          url: "/_next/static/chunks/pages/_app-833083005ca84465.js",
          revision: "tPx8e9gz9rinVd3W6S2zC",
        },
        {
          url: "/_next/static/chunks/pages/_error-7f351391d89f3c81.js",
          revision: "tPx8e9gz9rinVd3W6S2zC",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-886379fd44aac161.js",
          revision: "tPx8e9gz9rinVd3W6S2zC",
        },
        {
          url: "/_next/static/css/20b37e58c9c50e6e.css",
          revision: "20b37e58c9c50e6e",
        },
        {
          url: "/_next/static/css/23df03b5723e0b47.css",
          revision: "23df03b5723e0b47",
        },
        {
          url: "/_next/static/tPx8e9gz9rinVd3W6S2zC/_buildManifest.js",
          revision: "12945c04e8c627e99c0fa16bfb3c8ea8",
        },
        {
          url: "/_next/static/tPx8e9gz9rinVd3W6S2zC/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
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
            cacheWillUpdate: async ({ response: e }) =>
              e && "opaqueredirect" === e.type
                ? new Response(e.body, {
                    status: 200,
                    statusText: "OK",
                    headers: e.headers,
                  })
                : e,
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
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 2592e3 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/static.+\.js$/i,
      new e.CacheFirst({
        cacheName: "next-static-js-assets",
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
      /\.(?:mp4|webm)$/i,
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
          new e.ExpirationPlugin({ maxEntries: 48, maxAgeSeconds: 86400 }),
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
      ({ sameOrigin: e, url: { pathname: s } }) =>
        !(!e || s.startsWith("/api/auth/") || !s.startsWith("/api/")),
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
      ({ request: e, url: { pathname: s }, sameOrigin: n }) =>
        "1" === e.headers.get("RSC") &&
        "1" === e.headers.get("Next-Router-Prefetch") &&
        n &&
        !s.startsWith("/api/"),
      new e.NetworkFirst({
        cacheName: "pages-rsc-prefetch",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ request: e, url: { pathname: s }, sameOrigin: n }) =>
        "1" === e.headers.get("RSC") && n && !s.startsWith("/api/"),
      new e.NetworkFirst({
        cacheName: "pages-rsc",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ url: { pathname: e }, sameOrigin: s }) => s && !e.startsWith("/api/"),
      new e.NetworkFirst({
        cacheName: "pages",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ sameOrigin: e }) => !e,
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
