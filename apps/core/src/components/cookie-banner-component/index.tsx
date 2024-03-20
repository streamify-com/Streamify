import CookieBanner from "@shared-components/components/cookie-banner";
import { useTranslations } from "next-intl";

export default function CookieBannerComponent() {
  const t = useTranslations("cookie");
  return (
    <CookieBanner
      description={t("description")}
      cookie_policy={t("cookie-policy")}
      accept_all={t("accept-all")}
      only_necessary={t("only-necessary")}
    />
  );
}
