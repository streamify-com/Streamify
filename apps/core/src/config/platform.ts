import { HeaderConfig } from "@shared-components/types";

export const platformConfig: HeaderConfig = {
  mainNav: [
    {
      title: "Matches",
      href: "/matches",
      restricted: false,
    },
    {
      title: "Players",
      href: "/players",
      restricted: false,
    },
    {
      title: "Plus",
      href: "/plus",
      restricted: true,
    },
    {
      title: "Live",
      href: "/live",
      restricted: false,
    },
  ],
};
