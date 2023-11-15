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
  self.define = (a, c) => {
    const i =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[i]) return;
    let t = {};
    const d = (e) => n(e, i),
      r = { module: { uri: i }, exports: t, require: d };
    s[i] = Promise.all(a.map((e) => r[e] || d(e))).then((e) => (c(...e), t));
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
          revision: "df94734a047bba28462563d0602c4670",
        },
        {
          url: "/_next/static/XXxPqIaTwnD9gdgmd0SAw/_buildManifest.js",
          revision: "28161253f64ea2628e4be901e0f9c3f1",
        },
        {
          url: "/_next/static/XXxPqIaTwnD9gdgmd0SAw/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/05890246.07bf3c74b5034496.js",
          revision: "07bf3c74b5034496",
        },
        {
          url: "/_next/static/chunks/132696a4-107ce1ab6e42b32c.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/1568.f6745cfc74545ffd.js",
          revision: "f6745cfc74545ffd",
        },
        {
          url: "/_next/static/chunks/1681-d5cefde95dfe6397.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/1876-765cf6638164bac4.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/1971-38244743b7809965.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/1da792ae-04bc1b4009f70aaa.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/2016-b4103afcbe91ffd4.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/2542-f75f9b16e69c7bb1.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/2661-e48d3ddbed781367.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/2699-8516a24b42575b5c.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/2905.9a9a70c223e6bc22.js",
          revision: "9a9a70c223e6bc22",
        },
        {
          url: "/_next/static/chunks/2908-026909015eb2d199.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/3235-07ea1f3a4204be44.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/3556-3a5b1c413c9ef103.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/3606-929d846c8d0046af.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/36621557-24e75bb4b445b12f.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/3721-be639f623a46f90c.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/3c5aa50f-7c9edcf799ec87f0.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/4505-f6704fa57f35aaaf.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/4652-779be17dc4519c17.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/47f12279-79b5a0a80bb4172e.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/50a4494c-91e13312808801a6.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/5295-9ec83eeb441edf62.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/52ae91e2-acc8a8030af089e0.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/5641-13f87bffe2627765.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/5f7a776b-d8ebd36b4f51a393.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/6184-cead9198c097aec8.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/654ad773-4214261a0c9e9e0a.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/6852.77afee6149808286.js",
          revision: "77afee6149808286",
        },
        {
          url: "/_next/static/chunks/6938-d831cd6620782424.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/7359-2362b29b56960f76.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/7618.1a23a55e675b4a43.js",
          revision: "1a23a55e675b4a43",
        },
        {
          url: "/_next/static/chunks/8038.cb55eed42d9364ee.js",
          revision: "cb55eed42d9364ee",
        },
        {
          url: "/_next/static/chunks/8041-07391290493545b1.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/8193-ce88b282aed9254a.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/8216.b781955428f5c6c1.js",
          revision: "b781955428f5c6c1",
        },
        {
          url: "/_next/static/chunks/8700-3a1f1d677c9d5abd.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/9225.d4bd5fce69450c04.js",
          revision: "d4bd5fce69450c04",
        },
        {
          url: "/_next/static/chunks/94e55e86-de7cf5b9e8dab1de.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/9ffa21ba-c0b74f3d8da333b2.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/layout-5c958b131986ae51.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/layout-e31888fca854dce8.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/page-2039bcba44af3860.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/reset-password/page-3ef543aeee21f8a3.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/reset-password/step-2/page-fcd23602c302fe60.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signout/layout-2d15623240fe0d71.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signout/page-cdbf43d16eb04ef2.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signup/layout-f72c8d90ac12448e.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signup/page-6bb47b7ae4b541cf.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signup/verify/page-e634b71bb421f79f.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/sso-callback/page-6546d30d19a557fa.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/home/page-879cf143092edb20.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/layout-2a19e23b4c0e67a6.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/live/page-375839fd4a815769.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/matches/page-953c1e79b6ba51a0.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/page-252f707cf897a21c.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/players/page-69ff76abbea15c61.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/subscribe/page-fb63ff48349ee3c8.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(restricted-lobby)/layout-66343d32840bf2dd.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(restricted-lobby)/plus/page-14872d5966aa0ddf.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(studio)/studio/%5B%5B...index%5D%5D/page-e9bfb2882d33b2c0.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(test)/layout-db3c98fb916f6fd6.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(test)/test/page-e948864224a19414.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/layout-7f7d0b03635bdfd2.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/loading-3aa2a3c3d1286abe.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/not-found-ad0858c11d72eff1.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/app/layout-79b0a321a5ba9c56.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/app/loading-2c42ce757627d254.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/app/not-found-a14f1744595e9938.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/app/page-50cd5fa6ffa0945f.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/b462889c-111b7c380d713e62.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/c7b913d5-ee0241c7ac6444ee.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/cbee9757-8d565b7d48746fe8.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/dfddbb69-3d74f7a9ce438d4f.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/framework-d01b68062ece2457.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/main-app-d7764b704aaf8831.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/main-d0e93bbdcbbf73f6.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/pages/_app-8ee08ac3094a888f.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/pages/_error-0b24c4da9ee8118a.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-c9f723ce8f5fd6aa.js",
          revision: "XXxPqIaTwnD9gdgmd0SAw",
        },
        {
          url: "/_next/static/css/23df03b5723e0b47.css",
          revision: "23df03b5723e0b47",
        },
        {
          url: "/_next/static/css/b9d398adc0dfe649.css",
          revision: "b9d398adc0dfe649",
        },
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
          url: "/favicon/favicon.ico",
          revision: "78b252ce50947954133e07dd46b5ff9e",
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
        { url: "/manifest.json", revision: "9d0e4bb037c7c5600730eadfcfb3b93e" },
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
