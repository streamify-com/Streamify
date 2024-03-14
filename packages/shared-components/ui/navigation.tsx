import { createSharedPathnamesNavigation } from "next-intl/navigation";

const locales = ["en", "de"] as const;

// Use the default: `always`
const localePrefix = undefined;

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });
