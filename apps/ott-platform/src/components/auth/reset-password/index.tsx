"use client";

import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@shared-components/ui/card";
import { ResetPasswordForm } from "@/components/auth/components/reset-password-form";
import { useTranslations } from "next-intl";
import { LocaleChoose } from "@/components/locale-switcher";

export default function ResetPasswordPageForm() {
  const t = useTranslations("reset-password");
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
      <CardContent className="grid gap-2">
        <ResetPasswordForm
          formlabel={t("card-title")}
          formbutton={t("form-button")}
          formbuttondescription={t("form-button-description")}
          previousstep={t("previous-step")}
          inputplaceholder={t("input-placeholder")}
        />
      </CardContent>
    </>
  );
}
