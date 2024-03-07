import { authMiddleware } from "@clerk/nextjs";

export { middleware } from "@/lib/i18n";

export default authMiddleware({
  publicRoutes: [
    "/(.*)",
    "/test(.*)",
    "/subscribe(.*)",
    "/home(.*)",
    "/matches(.*)",
    "/players(.*)",
    "/plus(.*)",
    "/live(.*)",
    "/signin(.*)",
    "/signin/reset-password(.*)",
    "/signin/reset-password/step-2(.*)",
    "/signup(.*)",
    "/signup/verify(.*)",
    "/signout(.*)",
    "/sso-callback(.*)",
    "/privacy-policy(.*)",
    "/terms-of-services(.*)",
  ],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)", `/:path*`],
};
