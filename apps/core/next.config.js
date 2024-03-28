const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

const withNextIntl = require("next-intl/plugin")();

// You can nest plugin calls to apply multiple enhancements/plugins
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["shared-components"],
  images: {
    domains: [
      "d2fplzddl6myl4.cloudfront.net",
      "tailwindui.com",
      "stream.mux.com",
      "images.pexels.com", // Make sure your domains are correctly listed here
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
    // Depending on your requirement, adjust experimental features
    taint: true, // For next-intl settings
  },
  logging: {
    fetches: { fullUrl: false },
  },
};

module.exports = withPWA(withNextIntl(nextConfig));
