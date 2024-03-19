import { type Metadata } from "next";
import ResetPasswordPageForm from "@shared-components/forms/auth/reset-password";
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
  const t = await getTranslations({ locale, namespace: "reset-password" });

  return {
    title: t("title"),
  };
}

export default function ResetPasswordPage() {
  const t = useTranslations("reset-password");
  return (
    <ResetPasswordPageForm
      title={t("title")}
      description={t("description")}
      formbutton={t("form-button")}
      formbuttondescription={t("form-button-description")}
      previous_step={t("previous-step")}
      inputplaceholder={t("input-placeholder")}
    />
  );
}
