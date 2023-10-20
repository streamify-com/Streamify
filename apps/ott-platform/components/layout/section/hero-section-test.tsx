"use client";

import Link from "next-intl/link";
import { cn } from "@shared-components/lib/utils";
import { buttonVariants } from "@shared-components/ui/button";
import { PlatformContainer } from "@shared-components/ui/container";
import LocaleSwitcher from "@/components/feature/locale-switcher";
import { ModeToggle } from "@shared-components/components/mode-theme";
import InstallPWA from "@shared-components/components/install-pwa";
import { useTranslations } from "next-intl";

export default function HeroSectionTest() {
  const t = useTranslations("signin");
  return (
    <>
      <PlatformContainer>
        <div className="grid grid-cols-1 gap-2 gap-y-4">
          <LocaleSwitcher />
          <Link
            href="/signup"
            className={cn(
              buttonVariants({
                variant: "actionButton",
                size: "defaultSize",
              }),
            )}
          >
            {t("alternative")}
          </Link>
          <Link
            href="/signin"
            className={cn(
              buttonVariants({
                variant: "primaryButton",
                size: "defaultSize",
              }),
            )}
          >
            {t("card-title")}
          </Link>
        </div>
      </PlatformContainer>
    </>
  );
}
