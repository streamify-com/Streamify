"use client";

import React from "react";
import { PlatformContainer } from "@shared-components/ui/container";
import Link from "next-intl/link";
import { PrimaryLogo } from "@shared-components/graphics/logo";

export default function TopBar() {
  return (
    <header className="sticky top-0 z-40 bg-action-muted">
      <nav>
        <PlatformContainer>
          <div className="relative flex h-8 items-center justify-between gap-16">
            <div className="relative flex items-center gap-16">
              <Link href="/home" className="items-center">
                <PrimaryLogo className="text-background sm:hover:text-action-muted h-5 w-auto sm:w-auto" />
              </Link>
            </div>
          </div>
        </PlatformContainer>
      </nav>
    </header>
  );
}
