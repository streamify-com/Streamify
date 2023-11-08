if (!self.define) {
  let e,
    s = {};
  const n = (n, a) => (
    (n = new URL(n + ".js", a).href),
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
  self.define = (a, i) => {
    const c =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[c]) return;
    let t = {};
    const r = (e) => n(e, c),
      u = { module: { uri: c }, exports: t, require: r };
    s[c] = Promise.all(a.map((e) => u[e] || r(e))).then((e) => (i(...e), t));
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
          revision: "0201e37448e7705bdcfb81b0f23111e5",
        },
        {
          url: "/_next/static/chunks/169-e9bfb807528b9286.js",
          revision: "xsxZ5rzuvh15M3-gvF9Xb",
        },
        {
          url: "/_next/static/chunks/393-b00bec079b759d85.js",
          revision: "xsxZ5rzuvh15M3-gvF9Xb",
        },
        {
          url: "/_next/static/chunks/482-b71b76e84b810c32.js",
          revision: "xsxZ5rzuvh15M3-gvF9Xb",
        },
        {
          url: "/_next/static/chunks/496-5e9ac6c6b5a07fd2.js",
          revision: "xsxZ5rzuvh15M3-gvF9Xb",
        },
        {
          url: "/_next/static/chunks/518-409f29d48c01208e.js",
          revision: "xsxZ5rzuvh15M3-gvF9Xb",
        },
        {
          url: "/_next/static/chunks/524-f4b48c8db6d7c8f5.js",
          revision: "xsxZ5rzuvh15M3-gvF9Xb",
        },
        {
          url: "/_next/static/chunks/543-f41e6506ee701aec.js",
          revision: "xsxZ5rzuvh15M3-gvF9Xb",
        },
        {
          url: "/_next/static/chunks/58-13aa9e4a4402f73a.js",
          revision: "xsxZ5rzuvh15M3-gvF9Xb",
        },
        {
          url: "/_next/static/chunks/7165ce4d-14fafad0b73add87.js",
          revision: "xsxZ5rzuvh15M3-gvF9Xb",
        },
        {
          url: "/_next/static/chunks/802-75b495efaa61d773.js",
          revision: "xsxZ5rzuvh15M3-gvF9Xb",
        },
        {
          url: "/_next/static/chunks/823-cd69c9a4e7a5c6b4.js",
          revision: "xsxZ5rzuvh15M3-gvF9Xb",
        },
        {
          url: "/_next/static/chunks/83-9223bb28befbd42f.js",
          revision: "xsxZ5rzuvh15M3-gvF9Xb",
        },
        {
          url: "/_next/static/chunks/869-c42f21e12b5ed85f.js",
          revision: "xsxZ5rzuvh15M3-gvF9Xb",
        },
        {
          url: "/_next/static/chunks/873-281b602bc3e920be.js",
          revision: "xsxZ5rzuvh15M3-gvF9Xb",
        },
        {
          url: "/_next/static/chunks/895-0d44bd78f57e5a3a.js",
          revision: "xsxZ5rzuvh15M3-gvF9Xb",
        },
        {
          url: "/_next/static/chunks/913-080152df9c4e24f4.js",
          revision: "xsxZ5rzuvh15M3-gvF9Xb",
        },
        {
          url: "/_next/static/chunks/956-2b4415e1e1bf63cf.js",
          revision: "xsxZ5rzuvh15M3-gvF9Xb",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/layout-5af5b5ff6015fee4.js",
          revision: "xsxZ5rzuvh15M3-gvF9Xb",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/page-883d1defe50b6092.js",
          revision: "xsxZ5rzuvh15M3-gvF9Xb",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/reset-password/page-14ecc720396c591f.js",
          revision: "xsxZ5rzuvh15M3-gvF9Xb",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/reset-password/step-2/page-a02715349b35f434.js",
          revision: "xsxZ5rzuvh15M3-gvF9Xb",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signout/page-7097198e8c1e9f11.js",
          revision: "xsxZ5rzuvh15M3-gvF9Xb",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signup/page-0bc7845e26620c4b.js",
          revision: "xsxZ5rzuvh15M3-gvF9Xb",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signup/verify/page-6d62dcc4595d37f3.js",
          revision: "xsxZ5rzuvh15M3-gvF9Xb",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/sso-callback/page-515dc13aa5e338d0.js",
          revision: "xsxZ5rzuvh15M3-gvF9Xb",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(internal)/team/%5Bslug%5D/page-7168d737ea2a93b2.js",
          revision: "xsxZ5rzuvh15M3-gvF9Xb",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/blog/%5Bslug%5D/page-390db0d99c1e952b.js",
          revision: "xsxZ5rzuvh15M3-gvF9Xb",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/layout-faeebc6de94c934f.js",
          revision: "xsxZ5rzuvh15M3-gvF9Xb",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/not-found-2d7f761d2bd06eff.js",
          revision: "xsxZ5rzuvh15M3-gvF9Xb",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/page-49e158f9e75025d2.js",
          revision: "xsxZ5rzuvh15M3-gvF9Xb",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/pricing/layout-a8ff8e17e71b7c2c.js",
          revision: "xsxZ5rzuvh15M3-gvF9Xb",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/pricing/page-3803edf82949a68d.js",
          revision: "xsxZ5rzuvh15M3-gvF9Xb",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(restricted-lobby)/dashboard/page-d711bb30d88c9e95.js",
          revision: "xsxZ5rzuvh15M3-gvF9Xb",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(restricted-lobby)/layout-0dabe38990243e23.js",
          revision: "xsxZ5rzuvh15M3-gvF9Xb",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(restricted-lobby)/not-found-b6a405eb38cfa3ad.js",
          revision: "xsxZ5rzuvh15M3-gvF9Xb",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/layout-a9fe8802531aca85.js",
          revision: "xsxZ5rzuvh15M3-gvF9Xb",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/loading-7843471d9425f07b.js",
          revision: "xsxZ5rzuvh15M3-gvF9Xb",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/not-found-b1c37c8a12c9c742.js",
          revision: "xsxZ5rzuvh15M3-gvF9Xb",
        },
        {
          url: "/_next/static/chunks/app/_not-found-73ccdf256c7b1c87.js",
          revision: "xsxZ5rzuvh15M3-gvF9Xb",
        },
        {
          url: "/_next/static/chunks/app/layout-9fe23894a7290341.js",
          revision: "xsxZ5rzuvh15M3-gvF9Xb",
        },
        {
          url: "/_next/static/chunks/app/page-74a9d598c47d544d.js",
          revision: "xsxZ5rzuvh15M3-gvF9Xb",
        },
        {
          url: "/_next/static/chunks/framework-eb124dc7acb3bb04.js",
          revision: "xsxZ5rzuvh15M3-gvF9Xb",
        },
        {
          url: "/_next/static/chunks/main-1f7af8ab07c0f478.js",
          revision: "xsxZ5rzuvh15M3-gvF9Xb",
        },
        {
          url: "/_next/static/chunks/main-app-fff0f2c501d20be7.js",
          revision: "xsxZ5rzuvh15M3-gvF9Xb",
        },
        {
          url: "/_next/static/chunks/pages/_app-dc052e3d709fbcfb.js",
          revision: "xsxZ5rzuvh15M3-gvF9Xb",
        },
        {
          url: "/_next/static/chunks/pages/_error-7f351391d89f3c81.js",
          revision: "xsxZ5rzuvh15M3-gvF9Xb",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-ffe44a61593c4849.js",
          revision: "xsxZ5rzuvh15M3-gvF9Xb",
        },
        {
          url: "/_next/static/css/23df03b5723e0b47.css",
          revision: "23df03b5723e0b47",
        },
        {
          url: "/_next/static/css/a905983080eb05b5.css",
          revision: "a905983080eb05b5",
        },
        {
          url: "/_next/static/xsxZ5rzuvh15M3-gvF9Xb/_buildManifest.js",
          revision: "12945c04e8c627e99c0fa16bfb3c8ea8",
        },
        {
          url: "/_next/static/xsxZ5rzuvh15M3-gvF9Xb/_ssgManifest.js",
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
              event: n,
              state: a,
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
