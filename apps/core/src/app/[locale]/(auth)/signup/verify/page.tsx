import { type Metadata } from "next";
import VerifyEmailPageForm from "@shared-components/forms/auth/verify";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Verify Email",
  description: "Verify your email address to continue with your sign up",
};

export default function VerifyEmailPage() {
  const t = useTranslations("verify");

  return (
    <VerifyEmailPageForm
      step={t("step")}
      title={t("title")}
      description={t("description")}
      formlabel={t("form-label")}
      verify_code_form_label={t("verify-code-form-label")}
      formbutton={t("form-button")}
      previous_step={t("previous-step")}
    />
  );
}
