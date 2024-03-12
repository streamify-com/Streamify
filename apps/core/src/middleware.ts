import { authMiddleware } from "@clerk/nextjs";
import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale, localePrefix } from "@/navigation";

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: "de",
  localePrefix,
});

export default authMiddleware({
  beforeAuth: (req) => {
    return intlMiddleware(req);
  },
  publicRoutes: [
    "/(.*)",
    "/:locale(.*)",
    "/:locale/test(.*)",
    "/:locale/signin(.*)",
  ],
});

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)",
    "/",
    "/(api|trpc)(.*)",
    "/(de|en)/:path*",
  ],
};
