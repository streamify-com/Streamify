import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en", "de"] as const;

// Use the default: `always`
export const localePrefix = undefined;

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });
