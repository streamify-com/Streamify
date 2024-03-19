import { type Metadata } from "next";
import VerifyEmailPageForm from "@shared-components/forms/auth/verify";
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
  const t = await getTranslations({ locale, namespace: "verify" });

  return {
    title: t("title"),
  };
}

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
