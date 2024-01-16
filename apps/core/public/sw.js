if (!self.define) {
  let e,
    s = {};
  const i = (i, t) => (
    (i = new URL(i + ".js", t).href),
    s[i] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = i), (e.onload = s), document.head.appendChild(e);
        } else (e = i), importScripts(i), s();
      }).then(() => {
        let e = s[i];
        if (!e) throw new Error(`Module ${i} didn’t register its module`);
        return e;
      })
  );
  self.define = (t, a) => {
    const c =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[c]) return;
    let n = {};
    const o = (e) => i(e, c),
      r = { module: { uri: c }, exports: n, require: o };
    s[c] = Promise.all(t.map((e) => r[e] || o(e))).then((e) => (a(...e), n));
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
          revision: "2c4e99cdae6417ee6c2c9621adc0bf43",
        },
        {
          url: "/_next/static/XIKhgqtiTRts-kwQb0HiB/_buildManifest.js",
          revision: "5376c8370e945f87fc76bb9b3c386704",
        },
        {
          url: "/_next/static/XIKhgqtiTRts-kwQb0HiB/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/1037-a6ad9554af36ab2b.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/1413-3328b38376636969.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/1972-1ee0b9fdda9a1ff0.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/267-87bf99495f088d93.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/3076-23e97d7601bcf9b6.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/3178-a87cedbe23368e33.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/3470-b4984c5d009ba927.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/3556-2588745a662a0a42.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/4053-cb6bcac72bda36af.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/4695-0a06e25da92ed094.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/4840-fbe5a3c4f0718e22.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/5145-2644ce68e844c335.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/5834-276d3933e02e648b.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/6766-8046328d91a482ff.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/6780-eae9620c2bdc399b.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/7616-87c1fb4eb04be671.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/7657-ea26de60ea44850d.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/7869-356d8393a0a4e60c.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/8041-9c1cba7b31f60565.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/814-feb3edff21d8a60e.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/ac44245a-a3e2be3401e04266.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/layout-dd5ef8d121ccd9bd.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/layout-164ab4b8f125cc66.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/page-8ceae13c7b65790a.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/reset-password/page-2853dd2cfc1ee13b.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/reset-password/step-2/page-2abc1ad16c526061.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signout/layout-cdf59e6472653516.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signout/page-8944ea6c9e2f93cf.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signup/layout-b803d22a8a305436.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signup/page-70a534d1c462661e.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signup/verify/page-6938b076c50c10a1.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/sso-callback/page-ba240e88b4b2772c.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(legal)/cancel-subscription/page-14c1a8a042c3377b.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(legal)/cookie-policy/page-2affdb4dbe2218e7.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(legal)/imprint/page-5b4ec413e39a36a7.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(legal)/privacy-policy/page-1ed44f68adde7bf5.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(legal)/terms-of-services/page-b70c78a1f4cdd946.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/layout-9bfc6c0167615988.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/page-af9d01b67bb7c5a5.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(restricted-lobby)/layout-fce6e6afdf495dd0.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(restricted-lobby)/plus/page-e530b99cc016d329.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(test)/test-1/layout-20b12688cade678f.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(test)/test-1/page-c3021b628033224a.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(test)/test-2/layout-8aa966f4385d00c1.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(test)/test-2/page-af7dc41515e191ab.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(test)/test-3/layout-998dd63ac9035887.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(test)/test-3/page-d844636390d1516f.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(test)/test/layout-da07c962e5d1b723.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(test)/test/page-0672cc87e25bba8e.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/layout-3c313ce8951b99bc.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/loading-2d6b52e0c3fb2727.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/not-found-88ad80054729e40c.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/app/layout-3392bd675a49eb58.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/app/loading-7c636dfb51c05e29.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/app/not-found-25f4d8658f31eaaa.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/app/page-1ddd7eb2188a6e1a.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/framework-0b20e5459de8ca7b.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/main-0280bc98deace88e.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/main-app-87720367c22a5a26.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/pages/_app-f90658aa53dedf96.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/pages/_error-ee53d8ed8f2fd9cf.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-a3d8f9c7b687966c.js",
          revision: "XIKhgqtiTRts-kwQb0HiB",
        },
        {
          url: "/_next/static/css/08f6c26bd801b9af.css",
          revision: "08f6c26bd801b9af",
        },
        {
          url: "/_next/static/css/a70f4e4635d210a8.css",
          revision: "a70f4e4635d210a8",
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
              event: i,
              state: t,
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
