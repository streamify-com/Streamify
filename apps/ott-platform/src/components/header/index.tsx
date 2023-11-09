"use client";

import * as React from "react";
import Link from "next-intl/link";
import { useTranslations } from "next-intl";
import { platformConfig } from "@/config/platform";
import { cn } from "@shared-components/lib/utils";
import NavigationMain from "./navigation-main";
import { PrimaryLogo, SecondaryLogo } from "@shared-components/graphics/logo";
import { PlatformContainer } from "@shared-components/ui/container";
import type { User } from "@clerk/nextjs/dist/types/server";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@shared-components/ui/dropdown-menu";
import { Button, buttonVariants } from "@shared-components/ui/button";
import { Icons } from "@shared-components/graphics/icons";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@shared-components/ui/avatar";

import { LocaleChooseIcon, LocaleSwitcher } from "@/components/locale-switcher";
import { ThemeModeSelector } from "@/components/mode-theme";

interface HeaderProps {
  user: User | null;
}

export default function Header({ user }: HeaderProps) {
  const t = useTranslations("header-platform");
  const initials = `${user?.firstName?.charAt(0) ?? ""} ${
    user?.lastName?.charAt(0) ?? ""
  }`;
  const email =
    user?.emailAddresses?.find((e) => e.id === user.primaryEmailAddressId)
      ?.emailAddress ?? "";

  return (
    <header className="border-separator sticky top-0 z-40 border-b bg-background/60 backdrop-blur-xl">
      <nav>
        <PlatformContainer>
          <div className="relative flex h-14 items-center justify-between gap-16">
            <div className="relative flex items-center gap-16">
              <Link href="/home" className="items-center">
                <PrimaryLogo className="text-action h-7 w-auto sm:w-auto" />
              </Link>
              <div className="hidden gap-10 overflow-y-auto sm:flex">
                <NavigationMain items={platformConfig.mainNav} user={user} />
              </div>
            </div>
            <div className="hidden sm:inline-block">
              <ul className="bottom-20 flex flex-row items-center gap-4">
                {user ? (
                  <></>
                ) : (
                  <>
                    <LocaleChooseIcon />
                    <Link
                      href={t("signin.href")}
                      className={cn(
                        buttonVariants({
                          variant: "insentiveButton",
                          size: "headerSize",
                        }),
                      )}
                    >
                      {t("signin.name")}
                    </Link>
                  </>
                )}
                {user ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghostButton" size="avatarSize">
                        <p className="font-regular text-primary text-sm leading-none">
                          {t("dropdown.greeting")}&nbsp;
                        </p>
                        <p className="text-primary text-sm font-bold leading-none">
                          {user.firstName}&nbsp;{user.lastName}
                        </p>
                        <Avatar className="ml-4">
                          <AvatarImage
                            src={user.imageUrl}
                            alt={user.username ?? ""}
                          />
                          <AvatarFallback>{initials}</AvatarFallback>
                        </Avatar>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="bg-background border-separator z-40 mt-3 w-full border p-4 sm:w-56"
                      align="end"
                      forceMount
                    >
                      <DropdownMenuLabel className="font-normal">
                        <div className="flex flex-col space-y-1">
                          <p className="text-md font-regular text-primary leading-none">
                            {user.firstName}&nbsp;{user.lastName}
                          </p>
                          <p className="text-primary-muted text-xs leading-none">
                            {email}
                          </p>
                        </div>
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator className="border-separator my-2 border-t" />
                      <DropdownMenuGroup>
                        <DropdownMenuItem asChild>
                          <Link
                            href="/dashboard/account"
                            className="sm:hover:bg-background-hover sm:hover:text-primary text-primary-muted my-2 rounded-md text-sm"
                          >
                            <Icons.AccountIcon
                              className="mr-4 h-4 w-4"
                              aria-hidden="true"
                            />
                            {t("dropdown.account")}
                            {/* <DropdownMenuShortcut>⌘A</DropdownMenuShortcut> */}
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link
                            href="/dashboard/subscription"
                            className="sm:hover:bg-background-hover sm:hover:text-primary text-primary-muted my-2 rounded-md text-sm"
                          >
                            <Icons.billing
                              className="mr-4 h-4 w-4"
                              aria-hidden="true"
                            />
                            {t("dropdown.subscription")}
                            {/* <DropdownMenuShortcut>⌘A</DropdownMenuShortcut> */}
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link
                            href="/dashboard/account"
                            className="sm:hover:bg-background-hover sm:hover:text-primary text-primary-muted my-2 rounded-md text-sm"
                          >
                            <Icons.SupportIcon
                              className="mr-4 h-4 w-4"
                              aria-hidden="true"
                            />
                            {t("dropdown.support")}
                            {/* <DropdownMenuShortcut>⌘A</DropdownMenuShortcut> */}
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                      <DropdownMenuSeparator className="border-separator my-2 border-t" />
                      <DropdownMenuItem asChild>
                        <LocaleSwitcher />
                      </DropdownMenuItem>
                      <DropdownMenuSeparator className="border-separator my-2 border-t" />
                      <DropdownMenuItem asChild>
                        <ThemeModeSelector />
                      </DropdownMenuItem>
                      <DropdownMenuSeparator className="border-separator my-2 border-t" />
                      <DropdownMenuItem
                        asChild
                        className="bg-transparent sm:hover:bg-action text-action sm:hover:text-background border border-action"
                      >
                        <Link
                          href="/signout"
                          className={cn(
                            buttonVariants({
                              variant: "insentiveButton",
                              size: "menuSize",
                            }),
                            "sm:text-sm",
                          )}
                        >
                          <Icons.LogOutIcon
                            className="mr-4 h-4 w-4"
                            aria-hidden="true"
                          />
                          {t("dropdown.signout")}
                          {/* <DropdownMenuShortcut>⌘A</DropdownMenuShortcut> */}
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href="/subscribe"
                    className={cn(
                      buttonVariants({
                        variant: "actionButton",
                        size: "headerSize",
                      }),
                    )}
                  >
                    <SecondaryLogo className="h-7 w-auto sm:h-9" />
                  </Link>
                )}
              </ul>
            </div>
            <div className="flex items-center gap-6 sm:hidden">
              <NavigationMain items={platformConfig.mainNav} user={user} />
            </div>
          </div>
        </PlatformContainer>
      </nav>
    </header>
  );
}
