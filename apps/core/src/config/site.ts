import { SiteConfig } from "@shared-components/types";

export const siteConfig: SiteConfig = {
  name: process.env.PROJECT_NAME,
  description: "The all-in-one streaming solution for your business.",
  url: process.env.NEXT_PUBLIC_APP_URL,
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
