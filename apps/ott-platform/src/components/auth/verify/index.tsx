"use client";

import {
  CardContent,
  CardDescription,
  CardHeader,
  CardSubtitle,
  CardTitle,
} from "@shared-components/ui/card";
import { VerifyEmailForm } from "@/components/auth/components/verify-email-form";
import { useTranslations } from "next-intl";
import { LocaleChoose } from "@/components/locale-switcher";

export default function VerifyEmailPageForm() {
  const t = useTranslations("verify");
  return (
    <>
      <CardHeader>
        <CardSubtitle>{t("step")}</CardSubtitle>
        <CardTitle className="sm:hidden block ">{t("card-title")}</CardTitle>
        <div className="justify-between hidden sm:flex">
          <CardTitle>{t("card-title")}</CardTitle>
          <LocaleChoose />
        </div>
        <CardDescription>{t("card-description")}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <VerifyEmailForm
          formlabel={t("form-label")}
          verifycodeformlabel={t("verify-code-form-label")}
          formbutton={t("form-button")}
          previousstep={t("previous-step")}
        />
      </CardContent>
    </>
  );
}
