import { defaultConfig } from "sanity-plugin-mux-input";

const muxConfig = {
  ...defaultConfig,
  token: process.env.MUX_ACCESS_TOKEN_ID || "YOUR_DEFAULT_ACCESS_TOKEN",
  secretKey: process.env.MUX_SECRET_KEY || "YOUR_DEFAULT_SECRET_KEY",
};

export default muxConfig;
