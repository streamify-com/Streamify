"use client";

import Link from "next-intl/link";
import { PrimaryLogo } from "@shared-components/graphics/logo";

function LogoHeader() {
  return (
    <div className="relative pb-8 md:hidden">
      <div className="absolute inset-0 flex items-center">
        <span className="h-10 w-full bg-transparent" />
      </div>
      <div className="relative my-4 flex justify-center md:my-0">
        <Link href="/">
          <PrimaryLogo className="text-primary h-14 w-auto" />
        </Link>
      </div>
    </div>
  );
}

export default LogoHeader;
