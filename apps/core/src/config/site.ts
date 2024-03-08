import { SiteConfig } from "@shared-components/types";
import { env } from "@/env.mjs";

export const siteConfig: SiteConfig = {
  name: env.PROJECT_NAME,
  description: "The all-in-one streaming solution for your business.",
  url: env.NEXT_PUBLIC_APP_URL,
  links: {
    facebook: "",
    instagram: "",
    twitter: "",
    github: "https://github.com/streamify-com",
    youtube: "",
    linkedin: "",
    discord: "",
    twitch: "",
    tiktok: "",
  },
};
