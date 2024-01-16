const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["shared-components"],
  images: {
    domains: [
      "d2fplzddl6myl4.cloudfront.net",
      "tailwindui.com",
      "stream.mux.com",
    ],
    remotePatterns: [
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
};

module.exports = withPWA(nextConfig);
