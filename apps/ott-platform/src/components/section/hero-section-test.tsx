"use client";

import Link from "next-intl/link";
import { cn } from "@shared-components/lib/utils";
import { buttonVariants } from "@shared-components/ui/button";
import { PlatformContainer } from "@shared-components/ui/container";
import {
  LocaleChoose,
  LocaleChooseIcon,
  LocaleSwitcher,
} from "@/components/locale-switcher";
import InstallPWA from "@shared-components/components/install-pwa";
import { useTranslations } from "next-intl";
import { ThemeModeIcon } from "@/components/mode-theme";
import { VotanIcon } from "@shared-components/graphics/icons";

export default function HeroSectionTest() {
  const t = useTranslations("signin");
  return (
    <>
      <PlatformContainer>
        <div className="grid grid-cols-1 gap-2 gap-y-4">
          <InstallPWA />
          <div className="md:w-48 w-full">
            <ThemeModeIcon />
          </div>
          <LocaleChooseIcon />
          <LocaleChoose />
          <LocaleSwitcher />
          <Link
            href={t("alternative.href")}
            className={cn(
              buttonVariants({
                variant: "actionButton",
                size: "defaultSize",
              }),
            )}
          >
            {t("alternative.name")}
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
          <VotanIcon className="text-active" />
        </div>
      </PlatformContainer>
    </>
  );
}
