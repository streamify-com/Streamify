import { authMiddleware } from "@clerk/nextjs";
import createMiddleware from "next-intl/middleware";
import { locales, localePrefix } from "@/config/navigation";
import { NextResponse } from "next/server";

const intlMiddleware = createMiddleware({
  locales: locales,
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
  async afterAuth(auth, req) {
    if (auth.isPublicRoute) {
      //  For public routes, we don't need to do anything
      return NextResponse.next();
    }

    const url = new URL(req.nextUrl.origin);

    if (!auth.userId) {
      //  If user tries to access a private route without being authenticated,
      //  redirect them to the sign in page
      url.pathname = "/signin";
      return NextResponse.redirect(url);
    }
  },
});

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)",
    "/((?!.*\\..*|_next).*)",
    "/",
    "/(api|trpc)(.*)",
    "/(de|en)/:path*",
  ],
};
