import { FooterWebsiteLayout } from "@shared-components/components/footer";
import { useTranslations } from "next-intl";

export default function FooterWebsiteComponent() {
  const t = useTranslations("footer-website");
  return (
    <FooterWebsiteLayout
      company={t("company")}
      light={t("light")}
      dark={t("dark")}
      system={t("system")}
      terms_of_services={t("terms-of-services")}
      privacy_policy={t("privacy-policy")}
      cookie_policy={t("cookie-policy")}
      imprint={t("imprint")}
      cancel_subscription={t("cancel-subscription")}
      sitemap={t("sitemap")}
    />
  );
}
