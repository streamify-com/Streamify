import { type Metadata } from "next";
import ResetPasswordPageForm from "@shared-components/forms/auth/reset-password";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Reset Password",
  description: "Enter your email to reset your password",
};

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
