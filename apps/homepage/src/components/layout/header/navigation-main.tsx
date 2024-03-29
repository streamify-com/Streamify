"use client";

import * as React from "react";
import Link from "next-intl/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { MainNavItem } from "@shared-components/types";
import { cn } from "@shared-components/lib/utils";
import { Icons } from "@shared-components/graphics/icons";
import { HomepageContainer } from "@shared-components/ui/container";

import { Separator } from "@shared-components/ui/separator";
import type { User } from "@clerk/nextjs/dist/types/server";
import { buttonVariants } from "@shared-components/ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@shared-components/ui/avatar";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "@/components/feature/locale-switcher";
import { ModeSelection } from "@/components/mode-theme";

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
  user: User | null;
  isComponentOpen: boolean;
}

export default function NavigationMain({
  items,
  children,
  user,
  isComponentOpen,
}: MainNavProps) {
  const t = useTranslations("header-homepage");
  const mobileMenuClassName = cn(
    "animate-in slide-in-from-right-80 bg-background fixed inset-x-0 bottom-0 z-50 mt-px grid h-[calc(100vh-3rem)] grid-flow-row auto-rows-max no-scrollbar overflow-y-auto pb-32 md:static md:block",
    isComponentOpen ? "top-14" : "top-14",
  );
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
  const closeMobileMenu = () => setShowMobileMenu(false);
  const initials = `${user?.firstName?.charAt(0) ?? ""} ${
    user?.lastName?.charAt(0) ?? ""
  }`;
  const email =
    user?.emailAddresses?.find((e) => e.id === user.primaryEmailAddressId)
      ?.emailAddress ?? "";

  return (
    <div className="flex sm:gap-4">
      {items?.length ? (
        <nav className="hidden gap-8 sm:flex">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "font-medium text-md sm:hover:text-primary flex items-center px-2 py-5 transition-colors",
                item.href.startsWith(`/${segment}`)
                  ? "text-action sm:border-action sm:border-b-2"
                  : "text-primary sm:border-b-2 sm:border-transparent",
                item.disabled && "cursor-not-allowed opacity-80",
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
      <div className="flex items-center">
        <button
          className="active:bg-background-hover text-primary-muted flex h-10 w-10 items-center justify-center rounded-md sm:hidden"
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
        <div className={mobileMenuClassName}>
          <HomepageContainer>
            <div className="relative z-20 grid gap-4">
              <nav className="no-scrollbar font-medium mt-3 grid grid-flow-row auto-rows-max items-center overflow-y-auto">
                <Link
                  onClick={closeMobileMenu}
                  href={t("solutions.href")}
                  className={cn(
                    buttonVariants({
                      variant: "ghostButton",
                      size: "navigationSize",
                    }),
                    "my-2 flex w-full items-center justify-between",
                  )}
                >
                  <p>{t("solutions.name")}</p>
                  <Icons.chevronRight />
                </Link>
                <Link
                  onClick={closeMobileMenu}
                  href={t("templates.href")}
                  className={cn(
                    buttonVariants({
                      variant: "ghostButton",
                      size: "navigationSize",
                    }),
                    "my-2 flex w-full items-center justify-between",
                  )}
                >
                  <p>{t("templates.name")}</p>
                  <Icons.chevronRight />
                </Link>
                <Link
                  onClick={closeMobileMenu}
                  href={t("showcases.href")}
                  className={cn(
                    buttonVariants({
                      variant: "ghostButton",
                      size: "navigationSize",
                    }),
                    "my-2 flex w-full items-center justify-between",
                  )}
                >
                  <p>{t("showcases.name")}</p>
                  <Icons.chevronRight />
                </Link>
                <Link
                  onClick={closeMobileMenu}
                  href={t("pricing.href")}
                  className={cn(
                    buttonVariants({
                      variant: "ghostButton",
                      size: "navigationSize",
                    }),
                    "my-2 flex w-full items-center justify-between",
                  )}
                >
                  <p>{t("pricing.name")}</p>
                  <Icons.chevronRight />
                </Link>
              </nav>
              <Separator className="my-2" />
              <div>
                <ul className="bottom-12 flex flex-col gap-4">
                  {user ? (
                    <Link
                      className={cn(
                        buttonVariants({
                          variant: "ghostButton",
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
                          variant: "insentiveButton",
                          size: "defaultSize",
                        }),
                      )}
                    >
                      Sign in
                    </Link>
                  )}
                  <Separator className="my-2" />
                  {user ? (
                    <Link
                      href="/signout"
                      className={cn(
                        buttonVariants({
                          variant: "insentiveButton",
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
                      Upgrade to Plus
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
                      Subscribe to Plus
                    </Link>
                  )}
                </ul>
              </div>
              <Separator className="my-2" />
              <LocaleSwitcher />
              <ModeSelection />
              {children}
            </div>
          </HomepageContainer>
        </div>
      )}
    </div>
  );
}
