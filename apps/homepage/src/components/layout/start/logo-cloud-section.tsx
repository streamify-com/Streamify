"use client";

import React from "react";
import { HomepageContainer } from "@shared-components/ui/container";
import { useTranslations } from "next-intl";
import {
  AWSLogo,
  ClerkLogo,
  MuxLogo,
  PlanetscaleLogo,
  ResendLogo,
  SanityLogo,
  StripeLogo,
  VercelLogo,
} from "@shared-components/graphics/logo";

export default function LogoCloudSection() {
  const t = useTranslations("logo-cloud-homepage");
  return (
    <div className="py-20">
      <HomepageContainer>
        <div className="relative">
          <div className="relative flex justify-center text-md uppercase">
            <span className="px-2 font-bold">{t("title")}</span>
          </div>
          <div className="text-foreground mx-auto mt-12 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-8 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-8">
            {/* <Image
              src="https://assets.streamify.dev/logo/streamify_logo-red.svg"
              alt="Logo 1"
              width={474}
              height={144}
              className="col-span-2 max-h-8 w-full object-contain lg:col-span-1"
            /> */}
            <AWSLogo className="col-span-2 max-h-4 md:max-h-8 w-full object-contain lg:col-span-1" />
            <VercelLogo className="col-span-2 max-h-4 md:max-h-6 w-full object-contain lg:col-span-1" />
            <PlanetscaleLogo className="col-span-2 max-h-4 md:max-h-8 w-full object-contain lg:col-span-1" />
            <ClerkLogo className="col-span-2 max-h-4 md:max-h-8 w-full object-contain lg:col-span-1" />
            <StripeLogo className="col-span-2 max-h-4 md:max-h-8 w-full object-contain lg:col-span-1" />
            <MuxLogo className="col-span-2 max-h-4 md:max-h-6 w-full object-contain lg:col-span-1" />
            <SanityLogo className="col-span-2 max-h-4 md:max-h-6 w-full object-contain lg:col-span-1" />
            <ResendLogo className="col-span-2 max-h-4 md:max-h-6 w-full object-contain lg:col-span-1" />
          </div>
        </div>
      </HomepageContainer>
    </div>
  );
}