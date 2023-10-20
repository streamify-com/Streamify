"use client";

import { getCookie, setCookie } from "cookies-next";
import * as React from "react";
import Link from "next-intl/link";
import { cn } from "@shared-components/lib/utils";
import { PrimaryLogo } from "@shared-components/graphics/logo";
import { HomepageContainer } from "@shared-components/ui/container";
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
import NavigationBar from "@/components/layout/header/navigation-bar";
import { homepageConfig } from "@/config/homepage";
import NavigationMain from "@/components/layout/header/navigation-main";
import { useScroll } from "@shared-components/lib/use-scroll";
import { useTranslations } from "next-intl";
import MenuBar from "@/components/layout/header/menu-bar";

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

  const toggleComponentOpen = () => {
    const newState = !isComponentOpen;
    setIsComponentOpen(newState);
    setCookie("navComponentOpen", newState ? "true" : "false");
  };

  const initials = `${user?.firstName?.charAt(0) ?? ""} ${
    user?.lastName?.charAt(0) ?? ""
  }`;
  const email =
    user?.emailAddresses?.find((e) => e.id === user.primaryEmailAddressId)
      ?.emailAddress ?? "";

  return (
    <header
      className={`sticky top-0 z-40 ${
        scrolled
          ? "border-separator border-b bg-white/60 backdrop-blur-xl dark:bg-black/60"
          : "md:bg-transparent bg-white border-separator border-b md:border-transparent"
      } `}
    >
      {/* <nav
        className={`border-separator bg-hoverground sticky top-0 z-40 border-b backdrop-blur-xl ${
          isComponentOpen ? '' : 'hidden'
        }`}
      >
        <HomepageContainer>
          <div className="relative flex h-8 items-center justify-between gap-16 text-xs">
            <div className="hidden md:block" />
            <div>Proudly hosted in the EU</div>
            <div>
              <Button
                onClick={toggleComponentOpen}
                className={cn(
                  buttonVariants({
                    variant: 'ghostButton',
                    size: 'defaultSize',
                  }),
                  'border-separator text-standard h-4 w-4 rounded-full border bg-transparent p-0 md:h-4 md:w-4',
                )}
              >
                <Icons.close className="h-2 w-2" />
              </Button>
            </div>
          </div>
        </HomepageContainer>
      </nav> */}
      <nav>
        <HomepageContainer>
          <div className="relative flex h-14 items-center justify-between md:h-16">
            <Link href="/" className="items-center w-72">
              <PrimaryLogo className="text-primary h-8 w-auto md:w-auto" />
            </Link>
            <div className="hidden md:flex">
              <NavigationBar />
            </div>
            <div className="hidden md:block w-72">
              <ul className="bottom-14 flex flex-row items-right justify-end gap-3">
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
                {/* {user ? (
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
                            {user.firstName} {user.lastName}
                          </p>
                          <p className="text-standard text-xs leading-none">
                            {email}
                          </p>
                        </div>
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <DropdownMenuItem asChild>
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
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link
                            href="/dashboard/account"
                            className="hover:bg-hoverground my-1 rounded-lg"
                          >
                            <Icons.SupportIcon
                              className="mr-4 h-4 w-4"
                              aria-hidden="true"
                            />
                            Support
                            <DropdownMenuShortcut>⌘A</DropdownMenuShortcut>
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                      <DropdownMenuSeparator className="border-separator my-2 border-t" />
                      <DropdownMenuItem asChild>
                        <Link
                          href="/signout"
                          className="hover:bg-hoverground my-1 rounded-lg"
                        >
                          <Icons.LogOutIcon
                            className="mr-4 h-4 w-4"
                            aria-hidden="true"
                          />
                          Sign out
                          <DropdownMenuShortcut>⌘A</DropdownMenuShortcut>
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href="/signin"
                    className={cn(
                      buttonVariants({
                        variant: "intentionButton",
                        size: "headerSize",
                      }),
                    )}
                  >
                    Sign in
                  </Link>
                )} */}
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
