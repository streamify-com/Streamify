if (!self.define) {
  let e,
    s = {};
  const t = (t, n) => (
    (t = new URL(t + ".js", n).href),
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
  self.define = (n, a) => {
    const i =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[i]) return;
    let c = {};
    const r = (e) => t(e, i),
      o = { module: { uri: i }, exports: c, require: r };
    s[i] = Promise.all(n.map((e) => o[e] || r(e))).then((e) => (a(...e), c));
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
          revision: "b44633a99f31f2dc835ac542c7eaed80",
        },
        {
          url: "/_next/static/chunks/1034-2d25b906f3504d27.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/1037-40441b72927d9bb3.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/1198-1f74d09c5cb1b29b.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/161-14a920b950dd5ade.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/2712-b7be2a536799af67.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/2837-61f8d8e26dc9a96c.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/3455-1d5af30838c8014d.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/3556-6227e673cc585acc.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/5000-3689fe44ba57da5a.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/5018-baafbd7c61e7c171.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/5562-53f771be77e7e7df.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/610-dc41ffc4140e5cd0.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/6741-d3c8d9574175a880.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/6780-f8710ee0d751eed0.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/6938-4cb3f366bed759a6.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/7264-062430c6d6cd4410.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/814-716500dd93bab31a.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/8628-3e0a172cf6353ee8.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/8922-b28a2afae9048b68.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/9538-eed626f948d81539.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/9710-15699322b25aa6ca.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/9865-1d549bae86babc63.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/ac44245a-e988e0aa25dc8f6e.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/layout-4a010a4f68806b34.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/page-5970ccc7706f65ca.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/reset-password/page-811745c2d0cf54eb.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/reset-password/step-2/page-c16c0818f36a26f2.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signout/page-35e4915df970c952.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signup/page-8d36fc2b5c27dda1.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signup/verify/page-f364746fc7c517cb.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/sso-callback/page-575930dfd38de4ba.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(internal)/team/%5Bslug%5D/page-52852b848666e3c0.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/(test)/test/layout-6e46c183c847e4d5.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/(test)/test/page-c31b886b06bd48d8.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/(test)/tin-votan/layout-1251006a1f85d5ad.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/(test)/tin-votan/page-a27cc42ba69a02c4.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/blog/%5Bslug%5D/page-bf1770b2d45fecde.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/layout-a0dedb133d77ea6a.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/not-found-76b0f0d5c455f7e8.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/page-f6767813682a53df.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/pricing/layout-c83f6fa40078ac7b.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/pricing/page-3282b3a4db65965b.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(restricted-lobby)/dashboard/page-462bfe9aecfdfd9e.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(restricted-lobby)/layout-b4858c0389a3b940.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(restricted-lobby)/not-found-7ff738d86e383d41.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/layout-cb39bab306b7925d.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/loading-d43d25945a304f76.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/not-found-690fd1e1653db174.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/app/_not-found-8b9d3f8e7f199a32.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/app/layout-7eda5fdbe0375003.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/app/page-048a3854b35be56b.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/framework-0b20e5459de8ca7b.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/main-app-87720367c22a5a26.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/main-c9986bc05312e953.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/pages/_app-f90658aa53dedf96.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/pages/_error-ee53d8ed8f2fd9cf.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-60d3f8ee1c73d173.js",
          revision: "d7K1f-VNgPIjEJtT7H8rj",
        },
        {
          url: "/_next/static/css/331fd5e0aa9afd5a.css",
          revision: "331fd5e0aa9afd5a",
        },
        {
          url: "/_next/static/css/d940d256d2be928b.css",
          revision: "d940d256d2be928b",
        },
        {
          url: "/_next/static/d7K1f-VNgPIjEJtT7H8rj/_buildManifest.js",
          revision: "5376c8370e945f87fc76bb9b3c386704",
        },
        {
          url: "/_next/static/d7K1f-VNgPIjEJtT7H8rj/_ssgManifest.js",
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
              event: t,
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
