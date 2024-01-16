"use client";

import { LogOutButtons } from "@/components/auth/components/logout-buttons";
import { SignOutForm } from "@/components/auth/components/signout-form";
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
          className="text-center sm:text-left"
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
