"use client";

import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@shared-components/ui/card";
import { ResetPasswordStep2Form } from "@shared-components/forms/auth/_components/reset-password-form-step-2";
import { useTranslations } from "next-intl";

export default function ResetPasswordStep2PageForm() {
  const t = useTranslations("step-2");
  return (
    <>
      <CardHeader className="space-y-1">
        <CardTitle>{t("card-title")}</CardTitle>
        <CardDescription>{t("card-description")}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <ResetPasswordStep2Form
          passwordformlabel={t("password-form-label")}
          confirmationformlabel={t("confirmation-form-label")}
          codeformlabel={t("code-form-label")}
          verifycodeformlabel={t("verify-code-form-label")}
          formbutton={t("form-button")}
          previous_step={t("previous-step")}
        />
      </CardContent>
    </>
  );
}
