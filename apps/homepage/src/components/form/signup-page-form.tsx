"use client";

import Link from "next-intl/link";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@shared-components/ui/card";
import { SignUpForm } from "@/components/layout/auth/signup-form";
import { OAuthSignIn } from "@/components/layout/auth/oauth-signin";
import { useTranslations } from "next-intl";
import { Separator } from "@shared-components/ui/separator";

export default function SignUpPageForm() {
  const t = useTranslations("signup");
  return (
    <div className="">
      <CardHeader className="space-y-1">
        <CardTitle>{t("card-title")}</CardTitle>
        <CardDescription>
          {t("card-description")}&nbsp;
          <Link
            aria-label="Sign in"
            href="/signin"
            className="text-primary underline-offset-4 transition-colors md:hover:underline"
          >
            {t("alternative")}
          </Link>
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <OAuthSignIn />
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <Separator />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background text-primary px-2">
              {t("or-continue-with")}
            </span>
          </div>
        </div>
        <SignUpForm
          firstname={t("first-name")}
          lastname={t("last-name")}
          email={t("email")}
          password={t("password")}
          termsandconditions={t("terms-and-conditions")}
          termsandconditionsdescription={t("terms-and-conditions-description")}
          privacypolicy={t("privacy-policy")}
          and={t("and")}
          formbutton={t("form-button")}
          previousstep={t("previous-step")}
        />
      </CardContent>
    </div>
  );
}
