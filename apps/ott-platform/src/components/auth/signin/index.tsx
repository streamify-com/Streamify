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
import { cn } from "@shared-components/lib/utils";
import { buttonVariants } from "@shared-components/ui/button";
import { Separator } from "@shared-components/ui/separator";

export default function SigninPageForm() {
  const t = useTranslations("signin");
  return (
    <>
      <CardHeader>
        <CardTitle>{t("card-title")}</CardTitle>
        <CardDescription>
          {t("card-description")}&nbsp;
          <Link
            aria-label={t("alternative.name")}
            href={t("alternative.href")}
            className={cn(
              buttonVariants({ variant: "linkButton", size: "linkSize" }),
              "text-highlight md:hover:text-primary",
            )}
          >
            {t("alternative.name")}
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
            className={cn(
              buttonVariants({
                variant: "linkButton",
                size: "linkSize",
              }),
              "text-sm",
            )}
          >
            {t("reset-password")}
          </Link>
        </CardFooter>
      </CardContent>
    </>
  );
}
