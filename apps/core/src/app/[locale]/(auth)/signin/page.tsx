import SigninPageForm from "@shared-components/forms/auth/signin";
import { useTranslations } from "next-intl";
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
  const t = useTranslations("signin");

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
