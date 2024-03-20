import SigninPageForm from "@shared-components/forms/auth/signin";
import { useLocale, useTranslations } from "next-intl";
import { ThemeModeSelector } from "@shared-components/components/theme-switcher";
import { getTranslations } from "next-intl/server";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "signin" });

  return {
    title: t("title"),
  };
}

export default function Page() {
  const curLocale = useLocale();
  const t = useTranslations("signin");
  const u = useTranslations("LocaleSwitcher");
  const v = useTranslations("mode-theme");

  return (
    <div>
      <SigninPageForm
        title={t("title")}
        description={t("description")}
        signup_link={t("signup-link")}
        or_continue_with={t("or-continue-with")}
        email={t("email")}
        password={t("password")}
        signin_button={t("signin")}
        previous_step={t("previous-step")}
        reset_password={t("reset-password")}
      />
    </div>
  );
}
