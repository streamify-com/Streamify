import { type Metadata } from "next";
import ResetPasswordStep2PageForm from "@shared-components/forms/auth/reset-password-step-2";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Reset Password",
  description: "Choose a new password and paste the code",
};

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
