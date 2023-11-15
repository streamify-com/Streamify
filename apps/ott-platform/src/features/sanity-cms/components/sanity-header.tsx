"use client";

import * as React from "react";
import Link from "next-intl/link";
import { useTranslations } from "next-intl";
import { PrimaryLogo } from "@shared-components/graphics/logo";
import { cn } from "@shared-components/lib/utils";
import { Button, buttonVariants } from "@shared-components/ui/button";
import { OpenInNewTabIcon } from "@shared-components/graphics/icons";

export function SanityHeader(props: any) {
  return (
    <header className="border-separator bg-background relative top-0 z-50 border-b">
      <nav className="px-5 md:px-5">
        <div className="relative z-50 flex h-12 items-center justify-between gap-16 md:h-16">
          <div className="relative z-50 flex items-center gap-16">
            <Link href="/" className="items-center space-x-2">
              <PrimaryLogo className="text-primary h-6 w-auto md:h-8 md:w-auto" />
            </Link>
            <div className="hidden gap-10 md:flex"></div>
          </div>
          <div className="hidden md:inline-block">
            <ul className="bottom-20 flex flex-row items-center gap-4">
              <Link
                href="/"
                target="_blank"
                className={cn(
                  buttonVariants({
                    variant: "actionButton",
                    size: "headerSize",
                  }),
                  "md:w-36",
                )}
              >
                Preview
                <OpenInNewTabIcon className="ml-2.5 h-4 w-4" />
              </Link>
              <Button
                variant="secondaryButton"
                size="headerSize"
                className="border-standard border md:w-36"
              >
                Go Live
              </Button>
            </ul>
          </div>
          <div className="flex items-center gap-6 md:hidden"></div>
        </div>
      </nav>
    </header>
  );
}
