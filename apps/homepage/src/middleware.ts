import { chain } from "@/middlewares/chain";
import Internationalization from "@/middlewares/internationalization";
import Authentication from "@/middlewares/authentication";

export default chain([Authentication, Internationalization]);

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
