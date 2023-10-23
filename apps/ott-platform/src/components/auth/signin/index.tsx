"use client";

import Link from "next-intl/link";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@shared-components/ui/card";
import { SignInForm } from "@/components/auth/components/signin-form";
import { OAuthSignIn } from "@/components/auth/components/oauth-signin";
import { useTranslations } from "next-intl";

export default function SigninPageForm() {
  const t = useTranslations("signin");
  return (
    <>
      <CardHeader className="space-y-1">
        <CardTitle>{t("card-title")}</CardTitle>
        <CardDescription>
          {t("card-description")}&nbsp;
          <Link
            aria-label="Sign up"
            href="/signup"
            className="text-highlight underline-offset-4 transition-colors hover:underline"
          >
            {t("alternative")}
          </Link>
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <OAuthSignIn />
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="border-separator w-full border" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background text-standard px-2">
              {t("or-continue-with")}
            </span>
          </div>
        </div>
        <SignInForm
          email={t("email")}
          password={t("password")}
          signin={t("sign-in")}
          previousstep={t("previous-step")}
        />
        <CardFooter>
          <Link
            aria-label="Reset password"
            href="/signin/reset-password"
            className="hover:text-highlight underline underline-offset-4 transition-colors"
          >
            {t("reset-password")}
          </Link>
        </CardFooter>
      </CardContent>
    </>
  );
}
