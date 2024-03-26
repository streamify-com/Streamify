import { FooterDeclarationLayout } from "@shared-components/components/footer";
import { useTranslations } from "next-intl";

export default function FooterDeclarationComponent() {
  const t = useTranslations("footer-declaration");
  return (
    <FooterDeclarationLayout
      company={t("company")}
      all_rights_reserved={t("all-rights-reserved")}
      light={t("light")}
      dark={t("dark")}
      system={t("system")}
    />
  );
}
