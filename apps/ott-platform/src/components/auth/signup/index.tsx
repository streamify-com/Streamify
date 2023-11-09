"use client";

import Link from "next-intl/link";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardSubtitle,
} from "@shared-components/ui/card";
import { SignUpForm } from "@/components/auth/components/signup-form";
import { OAuthSignIn } from "@/components/auth/components/oauth-signin";
import { useTranslations } from "next-intl";
import { cn } from "@shared-components/lib/utils";
import { buttonVariants } from "@shared-components/ui/button";
import { Separator } from "@shared-components/ui/separator";

export default function SignUpPageForm() {
  const t = useTranslations("signup");
  return (
    <>
      <CardHeader>
        <CardSubtitle>{t("step")}</CardSubtitle>
        <CardTitle>{t("card-title")}</CardTitle>
        <CardDescription>
          {t("card-description")}&nbsp;
          <Link
            aria-label={t("alternative.name")}
            href={t("alternative.href")}
            className={cn(
              buttonVariants({ variant: "linkButton", size: "linkSize" }),
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
            <span className="bg-background text-primary-muted px-2">
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
          termsandconditionsheader={t("terms-and-conditions-header")}
          termsandconditionsdescriptionpart1={t(
            "terms-and-conditions-description-part-1",
          )}
          termsandconditionsdescriptionpart2={t(
            "terms-and-conditions-description-part-2",
          )}
          privacypolicy={t("privacy-policy")}
          and={t("and")}
          formbutton={t("form-button")}
          previousstep={t("previous-step")}
        />
      </CardContent>
    </>
  );
}
