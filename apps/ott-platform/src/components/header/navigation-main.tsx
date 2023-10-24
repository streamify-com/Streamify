"use client";

import * as React from "react";
import Link from "next-intl/link";
import { useTranslations } from "next-intl";
import { useSelectedLayoutSegment } from "next/navigation";
import { MainNavItem } from "@shared-components/types";
import { cn } from "@shared-components/lib/utils";
import { Icons } from "@shared-components/graphics/icons";
import { SecondaryLogo } from "@shared-components/graphics/logo";
import { PlatformContainer } from "@shared-components/ui/container";
import { Separator } from "@shared-components/ui/separator";
import { ModeSelection } from "@/components/mode-theme";
import type { User } from "@clerk/nextjs/dist/types/server";
import { buttonVariants } from "@shared-components/ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@shared-components/ui/avatar";
import LocaleSwitcher from "@/components/locale-switcher";

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
  user: User | null;
  href?: string;
}

export default function NavigationMain({
  items,
  href,
  children,
  user,
}: MainNavProps) {
  const t = useTranslations("header-platform");
  const selectedSegment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
  const closeMobileMenu = () => setShowMobileMenu(false);
  const initials = `${user?.firstName?.charAt(0) ?? ""} ${
    user?.lastName?.charAt(0) ?? ""
  }`;
  const email =
    user?.emailAddresses?.find((e) => e.id === user.primaryEmailAddressId)
      ?.emailAddress ?? "";

  return (
    <div className="flex sm:gap-2 md:gap-4">
      {items?.length ? (
        <nav className="hidden gap-8 md:flex">
          <Link
            href={t("home.href")}
            className={cn(
              "font-regular text-md md:hover:text-standard flex items-center px-2 py-4 transition-colors text-standard md:border-b-2 md:border-transparent",
              selectedSegment === "home"
                ? "text-primary md:border-primary md:border-b-2"
                : "text-highlight md:border-b-2 md:border-transparent",
            )}
          >
            {t("home.name")}
          </Link>
          <Link
            href={t("matches.href")}
            className={cn(
              "font-regular text-md md:hover:text-standard flex items-center px-2 py-4 transition-colors text-standard md:border-b-2 md:border-transparent",
              selectedSegment === "matches"
                ? "text-primary md:border-primary md:border-b-2"
                : "text-highlight md:border-b-2 md:border-transparent",
            )}
          >
            {t("matches.name")}
          </Link>
          <Link
            href={t("players.href")}
            className={cn(
              "font-regular text-md md:hover:text-standard flex items-center px-2 py-4 transition-colors text-standard md:border-b-2 md:border-transparent",
              selectedSegment === "players"
                ? "text-primary md:border-primary md:border-b-2"
                : "text-highlight md:border-b-2 md:border-transparent",
            )}
          >
            {t("players.name")}
          </Link>
          <Link
            href={t("plus.href")}
            className={cn(
              "font-regular text-md md:hover:text-standard flex items-center px-2 py-4 transition-colors text-standard md:border-b-2 md:border-transparent",
              selectedSegment === "plus"
                ? "text-primary md:border-primary md:border-b-2"
                : "text-highlight md:border-b-2 md:border-transparent",
            )}
          >
            {t("plus.name")}
          </Link>
          <Link
            href={t("live.href")}
            className={cn(
              "font-regular text-md md:hover:text-standard flex items-center px-2 py-4 transition-colors text-standard md:border-b-2 md:border-transparent",
              selectedSegment === "live"
                ? "text-primary md:border-primary md:border-b-2"
                : "text-highlight md:border-b-2 md:border-transparent",
            )}
          >
            {t("live.name")}
          </Link>
        </nav>
      ) : null}
      <div className="flex items-center space-x-2">
        <button
          className="active:bg-hoverground flex h-7 w-7 items-center justify-center rounded-md md:hidden"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? (
            <Icons.close className="h-5 w-auto" />
          ) : (
            <Icons.open className="h-5 w-auto" />
          )}
        </button>
      </div>
      {showMobileMenu && items && (
        <div
          className={cn(
            "animate-in slide-in-from-right-80 bg-background fixed inset-x-0 bottom-0 top-14 z-50 mt-px grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-y-auto pb-32 lg:static lg:block",
          )}
        >
          <PlatformContainer>
            <div className="relative z-20 grid gap-4">
              <nav className="no-scrollbar font-regular mt-3 grid grid-flow-row auto-rows-max items-center overflow-y-auto">
                {/* {items.map((item, index) => (
                  <>
                    <Link
                      onClick={closeMobileMenu}
                      key={index}
                      href={item.disabled ? "#" : item.href}
                      className={cn(
                        buttonVariants({
                          variant: "navigationButton",
                          size: "navigationSize",
                        }),
                        "my-2 flex w-full items-center justify-between",
                        item.disabled && "cursor-not-allowed opacity-60",
                      )}
                    >
                      <p>{item.title}</p>
                      <Icons.chevronRight />
                    </Link>
                  </>
                ))} */}
                <Link
                  onClick={closeMobileMenu}
                  href={t("matches.href")}
                  className={cn(
                    buttonVariants({
                      variant: "navigationButton",
                      size: "navigationSize",
                    }),
                    "my-2 flex w-full items-center justify-between",
                  )}
                >
                  <p>{t("matches.name")}</p>
                  <Icons.chevronRight />
                </Link>
                <Link
                  onClick={closeMobileMenu}
                  href={t("players.href")}
                  className={cn(
                    buttonVariants({
                      variant: "navigationButton",
                      size: "navigationSize",
                    }),
                    "my-2 flex w-full items-center justify-between",
                  )}
                >
                  <p>{t("players.name")}</p>
                  <Icons.chevronRight />
                </Link>
                <Link
                  onClick={closeMobileMenu}
                  href={t("plus.href")}
                  className={cn(
                    buttonVariants({
                      variant: "navigationButton",
                      size: "navigationSize",
                    }),
                    "my-2 flex w-full items-center justify-between",
                  )}
                >
                  <p>{t("plus.name")}</p>
                  <Icons.chevronRight />
                </Link>
                <Link
                  onClick={closeMobileMenu}
                  href={t("live.href")}
                  className={cn(
                    buttonVariants({
                      variant: "navigationButton",
                      size: "navigationSize",
                    }),
                    "my-2 flex w-full items-center justify-between",
                  )}
                >
                  <p>{t("live.name")}</p>
                  <Icons.chevronRight />
                </Link>
              </nav>
              <Separator className="border-separator my-2 border-t" />
              <div>
                <ul className="bottom-20 flex flex-col gap-4">
                  {user ? (
                    <Link
                      className={cn(
                        buttonVariants({
                          variant: "avatarButton",
                          size: "avatarSize",
                        }),
                        "justify-between",
                      )}
                      onClick={closeMobileMenu}
                      href="/account"
                    >
                      <Avatar>
                        <AvatarImage
                          src={user.imageUrl}
                          alt={user.username ?? ""}
                        />
                        <AvatarFallback>{initials}</AvatarFallback>
                      </Avatar>
                      {email}
                    </Link>
                  ) : (
                    <Link
                      href="/signin"
                      className={cn(
                        buttonVariants({
                          variant: "secondaryButton",
                          size: "defaultSize",
                        }),
                      )}
                    >
                      Sign in
                    </Link>
                  )}
                  <Separator className="border-separator my-2 border-t" />
                  {user ? (
                    <Link
                      href="/signout"
                      className={cn(
                        buttonVariants({
                          variant: "secondaryButton",
                          size: "defaultSize",
                        }),
                      )}
                    >
                      <Icons.LogOutIcon
                        className="mr-2 h-4 w-4"
                        aria-hidden="true"
                      />
                      Sign out
                    </Link>
                  ) : (
                    <Link
                      href="/signup"
                      className={cn(
                        buttonVariants({
                          variant: "secondaryButton",
                          size: "defaultSize",
                        }),
                      )}
                    >
                      Create account
                    </Link>
                  )}
                  {user ? (
                    <Link
                      href="/subscribe"
                      className={cn(
                        buttonVariants({
                          variant: "actionButton",
                          size: "defaultSize",
                        }),
                      )}
                    >
                      <SecondaryLogo className="text-background hover:text-primary h-10 w-auto" />
                    </Link>
                  ) : (
                    <Link
                      href="/subscribe"
                      className={cn(
                        buttonVariants({
                          variant: "actionButton",
                          size: "defaultSize",
                        }),
                      )}
                    >
                      {t("call-to-action.name")}
                    </Link>
                  )}
                </ul>
              </div>
              <Separator className="border-separator my-2 border-t" />
              <LocaleSwitcher />
              <ModeSelection />
              {children}
            </div>
          </PlatformContainer>
        </div>
      )}
    </div>
  );
}
