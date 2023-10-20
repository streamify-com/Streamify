"use client";

import * as React from "react";
import Link from "next-intl/link";
import { useTranslations } from "next-intl";
import { platformConfig } from "@/config/platform";
import { cn } from "@shared-components/lib/utils";
import NavigationMain from "@/components/layout/header/navigation-main";
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
import { ModeSelection } from "@/components/feature/mode-theme";

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
    <header className="border-separator bg-background/75 sticky top-0 z-30 border-b backdrop-blur-xl">
      <nav>
        <PlatformContainer>
          <div className="relative flex h-16 items-center justify-between gap-16">
            <div className="relative flex items-center gap-16">
              <Link href="/home" className="items-center space-x-2">
                <PrimaryLogo className="text-primary h-8 w-auto" />
              </Link>
              <div className="hidden gap-10 md:flex">
                <NavigationMain items={platformConfig.mainNav} user={user} />
              </div>
            </div>
            <div className="hidden md:inline-block">
              <ul className="bottom-20 flex flex-row items-center gap-4">
                {/* {user ? (
                  <Link
                    href="/subscribe"
                    className={cn(
                      buttonVariants({
                        variant: "actionButton",
                        size: "headerSize",
                      }),
                    )}
                  >
                    <SecondaryLogo className="text-background hover:text-primary h-7 w-auto md:h-9" />
                  </Link>
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
                    <SecondaryLogo className="text-background hover:text-primary h-7 w-auto md:h-9" />
                  </Link>
                )} */}
                {user ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="avatarButton" size="avatarSize">
                        <Avatar className="">
                          <AvatarImage
                            src={user.imageUrl}
                            alt={user.username ?? ""}
                          />
                          <AvatarFallback>{initials}</AvatarFallback>
                        </Avatar>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="bg-background border-separator z-40 mt-2 w-full border p-4 md:w-56"
                      align="end"
                      forceMount
                    >
                      <DropdownMenuLabel className="font-normal">
                        <div className="flex flex-col space-y-1">
                          <p className="text-md font-regular text-highlight leading-none">
                            {user.firstName}&nbsp;{user.lastName}
                          </p>
                          <p className="text-standard text-xs leading-none">
                            {email}
                          </p>
                        </div>
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator className="border-separator my-2 border-t" />
                      <DropdownMenuGroup>
                        {/* <DropdownMenuItem asChild>
                          <Link
                            href="/dashboard/account"
                            className="hover:bg-hoverground my-2 rounded-md"
                          >
                            <Icons.AccountIcon
                              className="mr-4 h-4 w-4"
                              aria-hidden="true"
                            />
                            Account
                            <DropdownMenuShortcut>⌘A</DropdownMenuShortcut>
                          </Link>
                        </DropdownMenuItem> */}
                        <DropdownMenuItem asChild>
                          <Link
                            href="/dashboard/subscription"
                            className="hover:bg-hoverground hover:text-highlight my-2 rounded-md"
                          >
                            <Icons.billing
                              className="mr-4 h-4 w-4"
                              aria-hidden="true"
                            />
                            Subscription
                            {/* <DropdownMenuShortcut>⌘A</DropdownMenuShortcut> */}
                          </Link>
                        </DropdownMenuItem>
                        {/* <DropdownMenuItem asChild>
                          <Link
                            href="/dashboard/account"
                            className="hover:bg-hoverground my-2 rounded-md"
                          >
                            <Icons.AccountIcon
                              className="mr-4 h-4 w-4"
                              aria-hidden="true"
                            />
                            Account
                            <DropdownMenuShortcut>⌘A</DropdownMenuShortcut>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link
                            href="/dashboard/account"
                            className="hover:bg-hoverground my-1 rounded-lg"
                          >
                            <Icons.BillingIcon
                              className="mr-4 h-4 w-4"
                              aria-hidden="true"
                            />
                            Billing
                            <DropdownMenuShortcut>⌘A</DropdownMenuShortcut>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link
                            href="/dashboard/account"
                            className="hover:bg-hoverground my-1 rounded-lg"
                          >
                            <Icons.SettingsIcon
                              className="mr-4 h-4 w-4"
                              aria-hidden="true"
                            />
                            Settings
                            <DropdownMenuShortcut>⌘A</DropdownMenuShortcut>
                          </Link>
                        </DropdownMenuItem> */}
                        <DropdownMenuItem asChild>
                          <Link
                            href="/dashboard/account"
                            className="hover:bg-hoverground hover:text-highlight my-1 rounded-lg"
                          >
                            <Icons.SupportIcon
                              className="mr-4 h-4 w-4"
                              aria-hidden="true"
                            />
                            Support
                            {/* <DropdownMenuShortcut>⌘A</DropdownMenuShortcut> */}
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                      <DropdownMenuSeparator className="border-separator my-2 border-t" />
                      <DropdownMenuItem asChild>
                        <ModeSelection />
                      </DropdownMenuItem>
                      <DropdownMenuSeparator className="border-separator my-2 border-t" />
                      <DropdownMenuItem asChild>
                        <Link
                          href="/signout"
                          className="hover:bg-hoverground hover:text-highlight my-1 rounded-lg"
                        >
                          <Icons.LogOutIcon
                            className="mr-4 h-4 w-4"
                            aria-hidden="true"
                          />
                          Sign out
                          {/* <DropdownMenuShortcut>⌘A</DropdownMenuShortcut> */}
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href="/signin"
                    className={cn(
                      buttonVariants({
                        variant: "actionButton",
                        size: "headerSize",
                      }),
                    )}
                  >
                    {/* {t("call-to-action.name")}&nbsp;&nbsp; */}
                    <SecondaryLogo className="text-background hover:text-primary h-7 w-auto md:h-9" />
                  </Link>
                )}
              </ul>
            </div>
            <div className="flex items-center gap-6 md:hidden">
              <NavigationMain items={platformConfig.mainNav} user={user} />
            </div>
          </div>
        </PlatformContainer>
      </nav>
    </header>
  );
}
