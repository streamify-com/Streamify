if (!self.define) {
  let e,
    s = {};
  const t = (t, i) => (
    (t = new URL(t + ".js", i).href),
    s[t] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = t), (e.onload = s), document.head.appendChild(e);
        } else (e = t), importScripts(t), s();
      }).then(() => {
        let e = s[t];
        if (!e) throw new Error(`Module ${t} didn’t register its module`);
        return e;
      })
  );
  self.define = (i, a) => {
    const n =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[n]) return;
    let c = {};
    const r = (e) => t(e, n),
      o = { module: { uri: n }, exports: c, require: r };
    s[n] = Promise.all(i.map((e) => o[e] || r(e))).then((e) => (a(...e), c));
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
          url: "/_next/static/chunks/157-05b6838cd2901e97.js",
          revision: "hybjjRsiyvZOrVovlZutd",
        },
        {
          url: "/_next/static/chunks/169-3173db4701d69d7f.js",
          revision: "hybjjRsiyvZOrVovlZutd",
        },
        {
          url: "/_next/static/chunks/193-9edd6ddcf2cd5214.js",
          revision: "hybjjRsiyvZOrVovlZutd",
        },
        {
          url: "/_next/static/chunks/218-a64bfc7ba7c1b594.js",
          revision: "hybjjRsiyvZOrVovlZutd",
        },
        {
          url: "/_next/static/chunks/320-a56eea7d84d2b805.js",
          revision: "hybjjRsiyvZOrVovlZutd",
        },
        {
          url: "/_next/static/chunks/363-e23b3db2e5802062.js",
          revision: "hybjjRsiyvZOrVovlZutd",
        },
        {
          url: "/_next/static/chunks/482-f7b202caf5c9daa2.js",
          revision: "hybjjRsiyvZOrVovlZutd",
        },
        {
          url: "/_next/static/chunks/483-e79ac216b2bdd674.js",
          revision: "hybjjRsiyvZOrVovlZutd",
        },
        {
          url: "/_next/static/chunks/484-8cbb4a76396eb1fb.js",
          revision: "hybjjRsiyvZOrVovlZutd",
        },
        {
          url: "/_next/static/chunks/647-bb3234ec0f0001af.js",
          revision: "hybjjRsiyvZOrVovlZutd",
        },
        {
          url: "/_next/static/chunks/651-22d915a99bd7b791.js",
          revision: "hybjjRsiyvZOrVovlZutd",
        },
        {
          url: "/_next/static/chunks/675-7143251eae23e32f.js",
          revision: "hybjjRsiyvZOrVovlZutd",
        },
        {
          url: "/_next/static/chunks/7165ce4d-29037dc9c5c581ee.js",
          revision: "hybjjRsiyvZOrVovlZutd",
        },
        {
          url: "/_next/static/chunks/838-107345369174ee3e.js",
          revision: "hybjjRsiyvZOrVovlZutd",
        },
        {
          url: "/_next/static/chunks/877-a569a50afae6ff4a.js",
          revision: "hybjjRsiyvZOrVovlZutd",
        },
        {
          url: "/_next/static/chunks/880-c9ab7ce470a5d0e1.js",
          revision: "hybjjRsiyvZOrVovlZutd",
        },
        {
          url: "/_next/static/chunks/91-3fa2f6b3772b7a12.js",
          revision: "hybjjRsiyvZOrVovlZutd",
        },
        {
          url: "/_next/static/chunks/952-3ad25a22a0f38a2d.js",
          revision: "hybjjRsiyvZOrVovlZutd",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/layout-0a1d17fe48b7079b.js",
          revision: "hybjjRsiyvZOrVovlZutd",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/page-1420103d8572404b.js",
          revision: "hybjjRsiyvZOrVovlZutd",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/reset-password/page-19f90de7381e6320.js",
          revision: "hybjjRsiyvZOrVovlZutd",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/reset-password/step-2/page-47f04c3a05a8e381.js",
          revision: "hybjjRsiyvZOrVovlZutd",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signout/page-c62372a256535bd3.js",
          revision: "hybjjRsiyvZOrVovlZutd",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signup/page-0e5c587a63ff1d14.js",
          revision: "hybjjRsiyvZOrVovlZutd",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signup/verify/page-9e9da52c8dc6d535.js",
          revision: "hybjjRsiyvZOrVovlZutd",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/sso-callback/page-d4c364f137b48c45.js",
          revision: "hybjjRsiyvZOrVovlZutd",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/home/page-c43fe508be775a15.js",
          revision: "hybjjRsiyvZOrVovlZutd",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/layout-af8c4831a9b071a5.js",
          revision: "hybjjRsiyvZOrVovlZutd",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/live/page-f6e8d9842a1bd326.js",
          revision: "hybjjRsiyvZOrVovlZutd",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/matches/page-a2195915f5a655e2.js",
          revision: "hybjjRsiyvZOrVovlZutd",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/page-ac9dbc7e02608f61.js",
          revision: "hybjjRsiyvZOrVovlZutd",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/players/page-e793bf4a79fdd678.js",
          revision: "hybjjRsiyvZOrVovlZutd",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/subscribe/page-fc9addf91c9fb1c6.js",
          revision: "hybjjRsiyvZOrVovlZutd",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(restricted-lobby)/layout-5b56d88f353f3858.js",
          revision: "hybjjRsiyvZOrVovlZutd",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(restricted-lobby)/plus/page-67e849f54ab7f03f.js",
          revision: "hybjjRsiyvZOrVovlZutd",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/layout-ceccab22b8e13949.js",
          revision: "hybjjRsiyvZOrVovlZutd",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/loading-fc02b5ed414af070.js",
          revision: "hybjjRsiyvZOrVovlZutd",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/not-found-78f3ddf47fb836bb.js",
          revision: "hybjjRsiyvZOrVovlZutd",
        },
        {
          url: "/_next/static/chunks/app/layout-614d9ebdf8d55509.js",
          revision: "hybjjRsiyvZOrVovlZutd",
        },
        {
          url: "/_next/static/chunks/app/not-found-6cef52c748b84ab1.js",
          revision: "hybjjRsiyvZOrVovlZutd",
        },
        {
          url: "/_next/static/chunks/app/page-32974f3bd66c5639.js",
          revision: "hybjjRsiyvZOrVovlZutd",
        },
        {
          url: "/_next/static/chunks/framework-eb124dc7acb3bb04.js",
          revision: "hybjjRsiyvZOrVovlZutd",
        },
        {
          url: "/_next/static/chunks/main-app-85a5635d4f178ef4.js",
          revision: "hybjjRsiyvZOrVovlZutd",
        },
        {
          url: "/_next/static/chunks/main-ed821f054b10a4d5.js",
          revision: "hybjjRsiyvZOrVovlZutd",
        },
        {
          url: "/_next/static/chunks/pages/_app-833083005ca84465.js",
          revision: "hybjjRsiyvZOrVovlZutd",
        },
        {
          url: "/_next/static/chunks/pages/_error-7f351391d89f3c81.js",
          revision: "hybjjRsiyvZOrVovlZutd",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-29d2179d99f441e2.js",
          revision: "hybjjRsiyvZOrVovlZutd",
        },
        {
          url: "/_next/static/css/005e763021ca850a.css",
          revision: "005e763021ca850a",
        },
        {
          url: "/_next/static/css/23df03b5723e0b47.css",
          revision: "23df03b5723e0b47",
        },
        {
          url: "/_next/static/hybjjRsiyvZOrVovlZutd/_buildManifest.js",
          revision: "12945c04e8c627e99c0fa16bfb3c8ea8",
        },
        {
          url: "/_next/static/hybjjRsiyvZOrVovlZutd/_ssgManifest.js",
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
      ({ request: e, url: { pathname: s }, sameOrigin: t }) =>
        "1" === e.headers.get("RSC") &&
        "1" === e.headers.get("Next-Router-Prefetch") &&
        t &&
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
      ({ request: e, url: { pathname: s }, sameOrigin: t }) =>
        "1" === e.headers.get("RSC") && t && !s.startsWith("/api/"),
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
