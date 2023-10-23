"use client";

import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@shared-components/ui/card";
import { VerifyEmailForm } from "@/components/layout/auth/verify-email-form";
import { useTranslations } from "next-intl";

export default function VerifyEmailPageForm() {
  const t = useTranslations("verify");
  return (
    <>
      <CardHeader className="space-y-1">
        <CardTitle>{t("card-title")}</CardTitle>
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
