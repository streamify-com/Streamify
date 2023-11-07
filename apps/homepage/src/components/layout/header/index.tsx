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
          ? "border-separator border-b bg-white/60 backdrop-blur-xl dark:bg-black/60"
          : "md:bg-transparent bg-background border-separator border-b md:border-transparent"
      } `}
    >
      <nav>
        <HomepageContainer>
          <div className="relative flex h-14 items-center justify-between md:h-16">
            <Link href="/" className="items-center w-72">
              <PrimaryLogo className="text-action h-8 w-auto md:w-auto" />
            </Link>
            <div className="hidden md:flex">
              <NavigationBar />
            </div>
            <div className="hidden md:block">
              <ul className="bottom-14 flex flex-row items-right justify-end gap-2">
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
            <div className="flex items-center gap-6 md:hidden">
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
