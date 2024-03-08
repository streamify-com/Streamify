const { paraglide } = require("@inlang/paraglide-js-adapter-next/plugin");

// const nextConfig = {
//   reactStrictMode: true,
//   transpilePackages: ["shared-components"],
//   images: {
//     domains: [
//       "d2fplzddl6myl4.cloudfront.net",
//       "tailwindui.com",
//       "stream.mux.com",
//     ],
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "stream.mux.com",
//       },
//       {
//         protocol: "https",
//         hostname: "stripe.com",
//       },
//     ],
//   },
// };

/** @type {import('next').NextConfig} */
module.exports = paraglide({
  paraglide: {
    project: "./project.inlang",
    outdir: "./src/paraglide",
  },
});
