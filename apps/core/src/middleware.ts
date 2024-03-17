import { authMiddleware } from "@clerk/nextjs";
import createMiddleware from "next-intl/middleware";
import { locales, localePrefix } from "@/config/navigation";

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
    "/:locale/signin/reset-password(.*)",
    "/:locale/signin/reset-password/step-2(.*)",
    "/:locale/signup(.*)",
    "/:locale/signup/verify(.*)",
    "/:locale/signout(.*)",
    "/:locale/sso-callback(.*)",
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
