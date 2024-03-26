import { FooterHomepageLayout } from "@shared-components/components/footer";
import { useTranslations } from "next-intl";

export default function FooterHomeComponent() {
  const t = useTranslations("footer-homepage");
  return (
    <FooterHomepageLayout
      solutions={t("solutions")}
      solution_1={t("solution-1")}
      solution_2={t("solution-2")}
      solution_3={t("solution-3")}
      solution_4={t("solution-4")}
      support={t("support")}
      pricing={t("pricing")}
      documentation={t("documentation")}
      guides={t("guides")}
      programs={t("programs")}
      company={t("company")}
      about_us={t("about-us")}
      blog={t("blog")}
      jobs={t("jobs")}
      partners={t("partners")}
      legal={t("legal")}
      terms_of_services={t("terms-of-services")}
      privacy_policy={t("privacy-policy")}
      cookie_policy={t("cookie-policy")}
      imprint={t("imprint")}
      title={t("title")}
      description={t("description")}
      notification={t("notification")}
      placeholder={t("placeholder")}
      newsletterbutton={t("newsletterbutton")}
    />
  );
}
