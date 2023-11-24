"use client";

import { getCookie } from "cookies-next";
import * as React from "react";
import Link from "next-intl/link";
import { cn } from "@shared-components/lib/utils";
import { PrimaryLogo } from "@shared-components/graphics/logo";
import { HomepageContainer } from "@shared-components/ui/container";
import type { User } from "@clerk/nextjs/dist/types/server";
import { Button, buttonVariants } from "@shared-components/ui/button";
import NavigationBar from "./navigation-bar";
import { homepageConfig } from "@/config/homepage";
import NavigationMain from "./navigation-main";
import { useScroll } from "@shared-components/lib/use-scroll";
import { useTranslations } from "next-intl";
import MenuBar from "./menu-bar";
import {
  LocaleChooseIcon,
  LocaleChooseIconHeader,
} from "@/components/locale-switcher";
import { Icons } from "@shared-components/graphics/icons";

interface HeaderHomeProps {
  user: User | null;
}

export function HeaderHome({ user }: HeaderHomeProps) {
  const t = useTranslations("header-homepage");
  const scrolled = useScroll(20);
  const initialIsComponentOpen = getCookie("navComponentOpen");
  const [isComponentOpen, setIsComponentOpen] = React.useState<boolean>(
    initialIsComponentOpen === "true" || !initialIsComponentOpen,
  );

  return (
    <header
      className={`sticky z-40 mx-0 sm:mx-16 top-0 sm:top-6 sm:rounded-md rounded-none ${
        scrolled
          ? "sm:bg-background/60 backdrop-blur-xl bg-background border-separator border-b sm:border"
          : "sm:bg-background/60 backdrop-blur-xl bg-background border-transparent border sm:border-separator"
      } `}
    >
      <nav className="px-8 sm:px-8">
        <div className="relative flex h-14 items-center justify-between">
          <div className="sm:hidden flex items-center">
            <LocaleChooseIconHeader />
          </div>
          <div className="sm:flex items-center gap-12">
            <Link href="/" className="items-center">
              <PrimaryLogo className="text-action sm:hover:text-action-muted h-7 w-auto sm:w-auto" />
            </Link>
            <NavigationBar />
          </div>
          <div className="hidden sm:block">
            <ul className="bottom-14 flex flex-row items-right justify-between gap-4">
              <LocaleChooseIcon />
              <Link
                href={t("call-to-action.open-studio.href")}
                className={cn(
                  buttonVariants({
                    variant: "actionButton",
                    size: "headerSize",
                  }),
                )}
              >
                {t("call-to-action.open-studio.name")}
              </Link>
              <MenuBar />
            </ul>
          </div>
          <div className="flex items-center gap-6 sm:hidden">
            <NavigationMain
              items={homepageConfig.mainNav}
              user={user}
              isComponentOpen={isComponentOpen}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
