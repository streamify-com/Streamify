import Image from "next/image";
import Link from "next-intl/link";
import { PrimaryLogo } from "@shared-components/graphics/logo";
import { PlatformContainer } from "@shared-components/ui/container";
import * as React from "react";
import {
  BackToHomepageButton,
  GoBackButton,
} from "@/components/auth/components/back-to-homepage";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div>
      <header className="border-separator  bg-background/75 sticky top-0 z-50 block border-b backdrop-blur-xl md:hidden">
        <nav>
          <PlatformContainer>
            <div className="relative flex h-16 items-center justify-between gap-16 md:h-20">
              <GoBackButton />
              <div className="relative flex items-center gap-16">
                <Link href="/" className="items-center space-x-2">
                  <div className="relative">
                    <PrimaryLogo className="text-primary h-8 w-auto" />
                  </div>
                </Link>
                <div className="hidden gap-10 md:flex"></div>
              </div>
              <div className="w-14" />
            </div>
          </PlatformContainer>
        </nav>
      </header>
      <div className="relative h-screen flex-col items-center justify-center sm:grid sm:grid-cols-1 lg:grid-cols-2">
        <div className="bg-background border-separator relative hidden h-full flex-col border-r lg:flex">
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
          <Link href="/home" className="absolute z-30 hidden p-20 lg:flex">
            <PrimaryLogo className="text-primary h-8 w-auto md:h-14 md:w-auto" />
          </Link>
        </div>
        <BackToHomepageButton />
        <main className="mx-auto flex w-full flex-col justify-center space-y-6 px-8 py-10 md:px-20">
          {children}
        </main>
      </div>
    </div>
  );
}
