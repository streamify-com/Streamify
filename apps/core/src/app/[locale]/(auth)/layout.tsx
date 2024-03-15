import { Link } from "@/navigation";
import { PrimaryLogo } from "@shared-components/graphics/streamify";
import * as React from "react";
import GradientBackground from "@shared-components/animations/gradient-background";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: AuthLayoutProps) {
  return (
    <div>
      <div className="relative h-screen flex-col items-center justify-center sm:grid sm:grid-cols-1 md:grid-cols-2">
        <GradientBackground />
        <div className="relative hidden h-full flex-col md:flex">
          <Link href="/" className="absolute z-30 hidden m-20 md:flex">
            <PrimaryLogo className="text-background sm:hover:text-background-hover h-8 w-auto sm:h-14 sm:w-auto" />
          </Link>
        </div>
        {/* <BackToHomepageButton href={""} name={""} /> */}
        <main className="mx-auto z-50 flex w-full flex-col justify-center space-y-6 px-8 py-10 sm:px-20">
          {children}
        </main>
      </div>
    </div>
  );
}
