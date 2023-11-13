"use client";

import { getCookie } from "cookies-next";
import * as React from "react";
import Link from "next-intl/link";
import { cn } from "@shared-components/lib/utils";
import { PrimaryLogo } from "@shared-components/graphics/logo";
import { HomepageContainer } from "@shared-components/ui/container";
import type { User } from "@clerk/nextjs/dist/types/server";
import { buttonVariants } from "@shared-components/ui/button";
import NavigationBar from "@/components/layout/header/navigation-bar";
import { homepageConfig } from "@/config/homepage";
import NavigationMain from "@/components/layout/header/navigation-main";
import { useScroll } from "@shared-components/lib/use-scroll";
import { useTranslations } from "next-intl";
import MenuBar from "@/components/layout/header/menu-bar";
import { LocaleChooseIcon } from "@/components/locale-switcher";

interface HeaderProps {
  user: User | null;
}

export function Header({ user }: HeaderProps) {
  const t = useTranslations("header-homepage");
  const scrolled = useScroll(50);
  const initialIsComponentOpen = getCookie("navComponentOpen");
  const [isComponentOpen, setIsComponentOpen] = React.useState<boolean>(
    initialIsComponentOpen === "true" || !initialIsComponentOpen,
  );

  return (
    <header
      className={`sticky top-0 z-40 ${
        scrolled
          ? "border-separator border-b bg-background/60 backdrop-blur-xl"
          : "sm:bg-transparent bg-background border-separator border-b sm:border-transparent"
      } `}
    >
      <nav>
        <HomepageContainer>
          <div className="relative flex h-14 items-center justify-between sm:h-16">
            <Link href="/" className="items-center w-72">
              <PrimaryLogo className="text-action sm:hover:text-action-muted h-8 w-auto sm:w-auto" />
            </Link>
            <div className="hidden sm:flex">
              <NavigationBar />
            </div>
            <div className="hidden sm:block">
              <ul className="bottom-14 flex flex-row items-right justify-end gap-4">
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
        </HomepageContainer>
      </nav>
    </header>
  );
}
