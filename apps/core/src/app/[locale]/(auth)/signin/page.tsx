import { Metadata } from "next";
import SigninPageForm from "@shared-components/forms/auth/signin";
import { useLocale, useTranslations } from "next-intl";
import { LanguagePicker } from "@/components/test-component";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your account",
};

export default function Page() {
  const curLocale = useLocale();
  const t = useTranslations("signin");
  const u = useTranslations("LocaleSwitcher");

  return (
    <div>
      <SigninPageForm
        title={t("title")}
        description={t("description")}
        signup_link={t("signup-link")}
        or_continue_with={t("or-continue-with")}
        email={t("email")}
        password={t("password")}
        signin_button={t("sign-in")}
        previous_step={t("previous-step")}
        reset_password={t("reset-password")}
      />
      <LanguagePicker
        buttonContent={u("locale", { locale: curLocale })}
        href="/signin"
      />
    </div>
  );
}
