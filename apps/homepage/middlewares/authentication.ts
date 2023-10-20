import { authMiddleware } from "@clerk/nextjs";

const Authentication = () => {
  return authMiddleware({
    publicRoutes: ["/(.*)", "/signin(.*)", "/signup(.*)", "/sso-callback(.*)"],
  });
};

export default Authentication;
