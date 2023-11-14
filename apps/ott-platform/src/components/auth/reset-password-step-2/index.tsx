"use client";

import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@shared-components/ui/card";
import { ResetPasswordStep2Form } from "@/components/auth/components/reset-password-form-step-2";
import { useTranslations } from "next-intl";
import { LocaleChoose } from "@/components/locale-switcher";

export default function ResetPasswordStep2PageForm() {
  const t = useTranslations("step-2");
  return (
    <>
      <CardHeader className="space-y-1">
        <CardTitle className="sm:hidden block ">{t("card-title")}</CardTitle>
        <div className="justify-between hidden sm:flex">
          <CardTitle>{t("card-title")}</CardTitle>
          <LocaleChoose />
        </div>
        <CardDescription>{t("card-description")}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <ResetPasswordStep2Form
          passwordformlabel={t("password-form-label")}
          confirmationformlabel={t("confirmation-form-label")}
          codeformlabel={t("code-form-label")}
          verifycodeformlabel={t("verify-code-form-label")}
          formbutton={t("form-button")}
          previousstep={t("previous-step")}
        />
      </CardContent>
    </>
  );
}
