"use client";

import { LogOutButtons } from "@/components/layout/auth/logout-buttons";
import { SignOutForm } from "@/components/layout/auth/signout-form";
import { CardContent, CardHeader } from "@shared-components/ui/card";
import { useTranslations } from "next-intl";

export default function SignOutPageForm() {
  const t = useTranslations("signout");
  return (
    <>
      <CardHeader className="space-y-1">
        <SignOutForm
          title={t("card-title")}
          description={t("card-description")}
          size="sm"
          className="text-center md:text-left"
        />
      </CardHeader>
      <CardContent className="grid gap-4">
        <LogOutButtons
          formbutton={t("card-title")}
          cancelbutton={t("cancel-button")}
        />
      </CardContent>
    </>
  );
}
