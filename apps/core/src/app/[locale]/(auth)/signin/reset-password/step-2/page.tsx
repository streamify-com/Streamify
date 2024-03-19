import { type Metadata } from "next";
import ResetPasswordStep2PageForm from "@shared-components/forms/auth/reset-password-step-2";
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
  const t = await getTranslations({ locale, namespace: "step-2" });

  return {
    title: t("title"),
  };
}

export default function ResetPasswordStep2Page() {
  const t = useTranslations("step-2");
  return (
    <ResetPasswordStep2PageForm
      title={t("title")}
      description={t("description")}
      password_form_label={t("password-form-label")}
      confirmation_form_label={t("confirmation-form-label")}
      code_form_label={t("code-form-label")}
      verify_code_form_label={t("verify-code-form-label")}
      form_button={t("form-button")}
      previous_step={t("previous-step")}
    />
  );
}
