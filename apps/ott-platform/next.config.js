const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
});

module.exports = withPWA({
  reactStrictMode: true,
  transpilePackages: ["shared-components"],
  images: {
    domains: [
      "assets.streamify.dev",
      "tailwindui.com",
      "stream.mux.com",
      "source.unsplash.com",
      "cdn.sanity.io",
      "api.sanity.io",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.sanity.io",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "stream.mux.com",
      },
      {
        protocol: "https",
        hostname: "stripe.com",
      },
    ],
  },
  experimental: {
    serverActions: true,
    esmExternals: "loose",
  },
});
