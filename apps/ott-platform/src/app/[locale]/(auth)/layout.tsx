import Image from "next/image";
import Link from "next-intl/link";
import { PrimaryLogo } from "@shared-components/graphics/logo";
import { PlatformContainer } from "@shared-components/ui/container";
import * as React from "react";
import {
  BackToHomepageButton,
  GoBackButton,
} from "@/components/auth/components/back-to-homepage";
import {
  LocaleChoose,
  LocaleChooseIconHeader,
} from "@/components/locale-switcher";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div>
      <header className="border-separator bg-background/75 sticky top-0 z-50 block border-b backdrop-blur-xl sm:hidden">
        <nav>
          <PlatformContainer>
            <div className="relative flex h-16 items-center justify-between gap-16 sm:h-20">
              <GoBackButton />
              <div className="absolute flex left-1/2 -translate-x-1/2">
                <Link href="/" className="items-center">
                  <div className="relative">
                    <PrimaryLogo className="text-action h-8 w-auto" />
                  </div>
                </Link>
                <div className="hidden gap-10 sm:flex"></div>
              </div>
              <div className="w-auto">
                <LocaleChooseIconHeader />
              </div>
            </div>
          </PlatformContainer>
        </nav>
      </header>
      <div className="relative h-screen flex-col items-center justify-center sm:grid sm:grid-cols-1 md:grid-cols-2">
        <div className="bg-background border-separator relative hidden h-full flex-col border-r md:flex">
          <div className="absolute inset-0">
            <Image
              src="https://assets.streamify.dev/img/stadium-blur.png"
              fill
              priority={false}
              sizes="100vw"
              style={{ objectFit: "cover" }}
              alt="Authentication"
            />
          </div>
          <Link href="/home" className="absolute z-30 hidden m-20 md:flex">
            <PrimaryLogo className="text-action sm:hover:text-action-muted h-8 w-auto sm:h-14 sm:w-auto" />
          </Link>
        </div>
        <BackToHomepageButton />
        <main className="mx-auto flex w-full flex-col justify-center space-y-6 px-8 py-10 sm:px-20">
          {children}
        </main>
      </div>
    </div>
  );
}
