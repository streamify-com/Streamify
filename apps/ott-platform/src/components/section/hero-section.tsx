"use client";

import Link from "next-intl/link";
import { cn } from "@shared-components/lib/utils";
import { buttonVariants } from "@shared-components/ui/button";
import { PlatformContainer } from "@shared-components/ui/container";
import LocaleSwitcher from "@/components/locale-switcher";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("signup");
  return (
    <>
      <PlatformContainer>
        <h1 className="font-customFont">{t("card-title")}</h1>
        <Link
          href="/plus"
          className={cn(
            buttonVariants({
              variant: "primaryButton",
              size: "defaultSize",
            }),
          )}
        >
          {t("card-title")}
        </Link>
        <LocaleSwitcher />
      </PlatformContainer>
    </>
  );
}
