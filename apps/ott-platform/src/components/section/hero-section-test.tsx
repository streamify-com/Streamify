"use client";

import Link from "next-intl/link";
import { cn } from "@shared-components/lib/utils";
import { buttonVariants } from "@shared-components/ui/button";
import { PlatformContainer } from "@shared-components/ui/container";
import LocaleSwitcher from "@/components/locale-switcher";
import { ModeToggle } from "@shared-components/components/mode-theme";
import InstallPWA from "@shared-components/components/install-pwa";
import { useTranslations } from "next-intl";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@shared-components/ui/select";
import {
  CircleFlagsDe,
  CircleFlagsUk,
} from "@shared-components/graphics/flags";

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
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {/* <SelectLabel>Language</SelectLabel> */}
                <SelectItem value="english">
                  <CircleFlagsUk /> English
                </SelectItem>
                <SelectItem value="german">
                  <CircleFlagsDe /> Deutsch
                </SelectItem>
                <SelectItem value="french">Français</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </PlatformContainer>
    </>
  );
}
