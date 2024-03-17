import { Link } from "@shared-components/ui/link";
import { PrimaryLogo } from "@shared-components/graphics/streamify";
import * as React from "react";
import GradientBackground from "@shared-components/animations/gradient-background";
import { ThemeModeIcon } from "@shared-components/components/theme-switcher";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div>
      <div className="relative h-screen flex-col items-center justify-center sm:grid sm:grid-cols-2">
        <GradientBackground />
        <div className="relative hidden h-full flex-col md:flex">
          <Link href="/" className="absolute z-30 hidden m-20 md:flex">
            <PrimaryLogo className="text-background sm:hover:text-background-hover h-8 w-auto sm:h-14 sm:w-auto" />
          </Link>
          <div className="absolute z-30 hidden ml-20 bottom-20 md:flex">
            <ThemeModeIcon />
          </div>
        </div>
        {/* <BackToHomepageButton href={""} name={""} /> */}
        <main className="mx-auto z-50 flex w-full flex-col justify-center space-y-6 p-4 sm:px-12">
          <div className="p-10 z-10 bg-background rounded-md border-separator border">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
