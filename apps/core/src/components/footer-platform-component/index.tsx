import { FooterPlatformLayout } from "@shared-components/components/footer";
import { useTranslations } from "next-intl";

export default function FooterPlatformComponent() {
  const t = useTranslations("footer-platform");
  return (
    <FooterPlatformLayout
      terms_of_services={t("terms-of-services")}
      privacy_policy={t("privacy-policy")}
      cookie_policy={t("cookie-policy")}
      imprint={t("imprint")}
      cancel_subscription={t("cancel-subscription")}
      sitemap={t("sitemap")}
      support={t("support")}
    />
  );
}
