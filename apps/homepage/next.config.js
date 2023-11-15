const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

const nextConfig = withPWA({
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
    esmExternals: "loose",
  },
});

module.exports = nextConfig;
