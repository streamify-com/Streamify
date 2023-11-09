import { authMiddleware } from "@clerk/nextjs";
import createMiddleware from "next-intl/middleware";

const intlMiddleware = createMiddleware({
  locales: ["en", "de"],
  defaultLocale: "en",
});

export default authMiddleware({
  beforeAuth: (req) => {
    return intlMiddleware(req);
  },
  publicRoutes: [
    "/",
    "/:locale",
    "/:locale/test",
    "/:locale/subscribe",
    "/:locale/home",
    "/:locale/matches",
    "/:locale/players",
    "/:locale/plus",
    "/:locale/live",
    "/:locale/signin",
    "/:locale/signin/reset-password",
    "/:locale/signin/reset-password/step-2",
    "/:locale/signup",
    "/:locale/signup/verify",
    "/:locale/sso-callback",
    "/:locale/privacy-policy",
    "/:locale/terms-of-services",
  ],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
