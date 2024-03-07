// import { paraglide } from "@inlang/paraglide-js-adapter-next/plugin"

const { paraglide } = require("@inlang/paraglide-js-adapter-next/plugin");

// await import("./src/env.mjs")

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
};

// /** @type {import('next').NextConfig} */
// module.exports = withPWA(nextConfig);

/** @type {import('next').NextConfig} */
module.exports = paraglide({
  paraglide: {
    project: "./project.inlang",
    outdir: "./src/paraglide",
  },
});
