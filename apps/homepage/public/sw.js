if (!self.define) {
  let e,
    n = {};
  const s = (s, t) => (
    (s = new URL(s + ".js", t).href),
    n[s] ||
      new Promise((n) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = s), (e.onload = n), document.head.appendChild(e);
        } else (e = s), importScripts(s), n();
      }).then(() => {
        let e = n[s];
        if (!e) throw new Error(`Module ${s} didn’t register its module`);
        return e;
      })
  );
  self.define = (t, a) => {
    const i =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (n[i]) return;
    let c = {};
    const r = (e) => s(e, i),
      o = { module: { uri: i }, exports: c, require: r };
    n[i] = Promise.all(t.map((e) => o[e] || r(e))).then((e) => (a(...e), c));
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
          revision: "ea911e79809570afaa9e4978001228d3",
        },
        {
          url: "/_next/static/Qe46fU6nt5bGQC69EB1RC/_buildManifest.js",
          revision: "9be4aa5f4b2d0f1b783a3038737f33aa",
        },
        {
          url: "/_next/static/Qe46fU6nt5bGQC69EB1RC/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/127-cd6187bdadb8c0b7.js",
          revision: "Qe46fU6nt5bGQC69EB1RC",
        },
        {
          url: "/_next/static/chunks/259-7837e66fc9664a60.js",
          revision: "Qe46fU6nt5bGQC69EB1RC",
        },
        {
          url: "/_next/static/chunks/302-d9e576a01a0f3cbc.js",
          revision: "Qe46fU6nt5bGQC69EB1RC",
        },
        {
          url: "/_next/static/chunks/314-e820bb3231e1dd0c.js",
          revision: "Qe46fU6nt5bGQC69EB1RC",
        },
        {
          url: "/_next/static/chunks/34-b8fdc66fbe632adc.js",
          revision: "Qe46fU6nt5bGQC69EB1RC",
        },
        {
          url: "/_next/static/chunks/39-6984cf6ac79c9400.js",
          revision: "Qe46fU6nt5bGQC69EB1RC",
        },
        {
          url: "/_next/static/chunks/470-3af9ed72132d3419.js",
          revision: "Qe46fU6nt5bGQC69EB1RC",
        },
        {
          url: "/_next/static/chunks/482-b5ab6eb32d8b6662.js",
          revision: "Qe46fU6nt5bGQC69EB1RC",
        },
        {
          url: "/_next/static/chunks/531-c8ce8b03fd6550b2.js",
          revision: "Qe46fU6nt5bGQC69EB1RC",
        },
        {
          url: "/_next/static/chunks/535-5b3ce5817b98248c.js",
          revision: "Qe46fU6nt5bGQC69EB1RC",
        },
        {
          url: "/_next/static/chunks/566-5b869dc865a751eb.js",
          revision: "Qe46fU6nt5bGQC69EB1RC",
        },
        {
          url: "/_next/static/chunks/567-83c82b6a2853a218.js",
          revision: "Qe46fU6nt5bGQC69EB1RC",
        },
        {
          url: "/_next/static/chunks/6cd42ff4-f30af2604f3ca336.js",
          revision: "Qe46fU6nt5bGQC69EB1RC",
        },
        {
          url: "/_next/static/chunks/759-4e55a6c1f3637c93.js",
          revision: "Qe46fU6nt5bGQC69EB1RC",
        },
        {
          url: "/_next/static/chunks/823-f4af44abdb8a1854.js",
          revision: "Qe46fU6nt5bGQC69EB1RC",
        },
        {
          url: "/_next/static/chunks/869-ae99c04d69f52a4a.js",
          revision: "Qe46fU6nt5bGQC69EB1RC",
        },
        {
          url: "/_next/static/chunks/884-5235098cf034bfb1.js",
          revision: "Qe46fU6nt5bGQC69EB1RC",
        },
        {
          url: "/_next/static/chunks/895-a9a4355b601a7553.js",
          revision: "Qe46fU6nt5bGQC69EB1RC",
        },
        {
          url: "/_next/static/chunks/922-dd3a050eb058bfc8.js",
          revision: "Qe46fU6nt5bGQC69EB1RC",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/layout-afc4323972b8b057.js",
          revision: "Qe46fU6nt5bGQC69EB1RC",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/page-e80920e2374a6d1d.js",
          revision: "Qe46fU6nt5bGQC69EB1RC",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/reset-password/page-26a4897242e664ee.js",
          revision: "Qe46fU6nt5bGQC69EB1RC",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/reset-password/step-2/page-b4f7a9f393c7d6ab.js",
          revision: "Qe46fU6nt5bGQC69EB1RC",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signout/page-cdfda5784efc0bd6.js",
          revision: "Qe46fU6nt5bGQC69EB1RC",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signup/page-26b462d967cc0109.js",
          revision: "Qe46fU6nt5bGQC69EB1RC",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signup/verify/page-9644ea12f5099d44.js",
          revision: "Qe46fU6nt5bGQC69EB1RC",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/sso-callback/page-11d127f95793e3a9.js",
          revision: "Qe46fU6nt5bGQC69EB1RC",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(internal)/team/%5Bslug%5D/page-b29ebdf4994fec2e.js",
          revision: "Qe46fU6nt5bGQC69EB1RC",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/blog/%5Bslug%5D/page-0007d239efe25040.js",
          revision: "Qe46fU6nt5bGQC69EB1RC",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/layout-f5d9be668487a2db.js",
          revision: "Qe46fU6nt5bGQC69EB1RC",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/not-found-073dd983de2ce6be.js",
          revision: "Qe46fU6nt5bGQC69EB1RC",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/page-5d6cd341bb210575.js",
          revision: "Qe46fU6nt5bGQC69EB1RC",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/pricing/layout-dc2df2f34ac6ce54.js",
          revision: "Qe46fU6nt5bGQC69EB1RC",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/pricing/page-79d084b4c2c43ec2.js",
          revision: "Qe46fU6nt5bGQC69EB1RC",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(restricted-lobby)/dashboard/page-ddac9b1b36506596.js",
          revision: "Qe46fU6nt5bGQC69EB1RC",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(restricted-lobby)/layout-898a914414b4a80d.js",
          revision: "Qe46fU6nt5bGQC69EB1RC",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(restricted-lobby)/not-found-afe99b3894ad4c61.js",
          revision: "Qe46fU6nt5bGQC69EB1RC",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/layout-b7b84dd4358cdcaf.js",
          revision: "Qe46fU6nt5bGQC69EB1RC",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/loading-92bd0b9f2f916c3d.js",
          revision: "Qe46fU6nt5bGQC69EB1RC",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/not-found-bf5e74ea5e413283.js",
          revision: "Qe46fU6nt5bGQC69EB1RC",
        },
        {
          url: "/_next/static/chunks/app/_not-found-8a72e8b50bd71899.js",
          revision: "Qe46fU6nt5bGQC69EB1RC",
        },
        {
          url: "/_next/static/chunks/app/layout-4648461c6cbe5c35.js",
          revision: "Qe46fU6nt5bGQC69EB1RC",
        },
        {
          url: "/_next/static/chunks/app/page-b13277905b4bdd9b.js",
          revision: "Qe46fU6nt5bGQC69EB1RC",
        },
        {
          url: "/_next/static/chunks/framework-5914f800e5c1bf38.js",
          revision: "Qe46fU6nt5bGQC69EB1RC",
        },
        {
          url: "/_next/static/chunks/main-8d7ccff41b51dfd6.js",
          revision: "Qe46fU6nt5bGQC69EB1RC",
        },
        {
          url: "/_next/static/chunks/main-app-dc1b94b7b4521756.js",
          revision: "Qe46fU6nt5bGQC69EB1RC",
        },
        {
          url: "/_next/static/chunks/pages/_app-81b3a9c9dfa9dac4.js",
          revision: "Qe46fU6nt5bGQC69EB1RC",
        },
        {
          url: "/_next/static/chunks/pages/_error-5158257cea1ad6bf.js",
          revision: "Qe46fU6nt5bGQC69EB1RC",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-2b62cee56b82ba23.js",
          revision: "Qe46fU6nt5bGQC69EB1RC",
        },
        {
          url: "/_next/static/css/23df03b5723e0b47.css",
          revision: "23df03b5723e0b47",
        },
        {
          url: "/_next/static/css/4658fbcbdf529225.css",
          revision: "4658fbcbdf529225",
        },
        {
          url: "/_next/static/css/75b658f58c8bbf86.css",
          revision: "75b658f58c8bbf86",
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
              response: n,
              event: s,
              state: t,
            }) =>
              n && "opaqueredirect" === n.type
                ? new Response(n.body, {
                    status: 200,
                    statusText: "OK",
                    headers: n.headers,
                  })
                : n,
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
        const n = e.pathname;
        return !n.startsWith("/api/auth/") && !!n.startsWith("/api/");
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
