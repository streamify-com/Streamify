import { Metadata } from "next";
import SigninPageForm from "@shared-components/forms/auth/signin";
import { unstable_setRequestLocale } from "next-intl/server";
import { useLocale, useTranslations } from "next-intl";
import { DrawerDialogDemo } from "@/components/test-component";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your account",
};

// type Props = {
//   params: { locale: string };
// };

export default function Page() {
  const curLocale = useLocale();
  // Enable static rendering
  // unstable_setRequestLocale(locale);
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
        previousstep={t("previous-step")}
        reset_password={t("reset-password")}
      />
      <DrawerDialogDemo
        buttonContent={u("locale", { locale: curLocale })}
        href="/signin"
      />
    </div>
  );
}
