const withNextIntl = require("next-intl/plugin")();

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
    // Used to guard against accidentally leaking SANITY_API_READ_TOKEN to the browser
    taint: true,
  },
  logging: {
    fetches: { fullUrl: false },
  },
};

/** @type {import('next').NextConfig} */
module.exports = withNextIntl(nextConfig);
