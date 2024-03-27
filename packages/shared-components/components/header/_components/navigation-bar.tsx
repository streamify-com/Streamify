"use client";

import * as React from "react";
import { Link } from "@shared-components/ui/link";
import { cn } from "@shared-components/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@shared-components/ui/navigation-menu";
import { PrimaryLogo } from "@shared-components/graphics/streamify";
import { buttonVariants } from "@shared-components/ui/button";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

interface NavigationBarProps {
  products: string;
  templates: string;
  download: string;
  roadmap: string;
  pricing: string;
}

export default function NavigationBar({
  products,
  templates,
  download,
  roadmap,
  pricing,
}: NavigationBarProps) {
  return (
    <NavigationMenu className="hidden sm:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link
            href="/products"
            legacyBehavior
            passHref
            className={cn(
              buttonVariants({
                variant: "actionButton",
                size: "headerSize",
              }),
            )}
          >
            <NavigationMenuTrigger>{products}</NavigationMenuTrigger>
          </Link>
          <NavigationMenuContent>
            <ul className="grid gap-4 p-4 sm:w-[400px] md:w-[500px] md:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="sm:hover:bg-background-hover sm:hover:border-separator sm:hover:text-primary flex h-full w-full select-none flex-col justify-end rounded-md border border-transparent p-6 no-underline outline-none"
                    href="/"
                  >
                    <div className="mb-2 mt-4">
                      <PrimaryLogo className="text-action h-8 w-auto" />
                    </div>
                    <div className="mb-2 text-lg font-semibold text-primary">
                      Studio
                    </div>
                    <p className="text-primary-muted text-sm leading-tight">
                      Build your own video streaming platform to monetize your
                      content.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href="/templates"
            legacyBehavior
            passHref
            className={cn(
              buttonVariants({
                variant: "actionButton",
                size: "headerSize",
              }),
            )}
          >
            <NavigationMenuTrigger>{templates}</NavigationMenuTrigger>
          </Link>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 sm:w-[500px] sm:grid-cols-2 md:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href="/download"
            legacyBehavior
            passHref
            className={cn(
              buttonVariants({
                variant: "actionButton",
                size: "headerSize",
              }),
            )}
          >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {download}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href="/roadmap"
            legacyBehavior
            passHref
            className={cn(
              buttonVariants({
                variant: "actionButton",
                size: "headerSize",
              }),
            )}
          >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {roadmap}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href="/pricing"
            legacyBehavior
            passHref
            className={cn(
              buttonVariants({
                variant: "actionButton",
                size: "headerSize",
              }),
            )}
          >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {pricing}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "sm:hover:bg-background-hover sm:hover:border-separator sm:hover:text-primary focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md border border-transparent p-3 leading-none no-underline outline-none transition-colors",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-semibold leading-none">{title}</div>
          <p className="text-primary-muted line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
