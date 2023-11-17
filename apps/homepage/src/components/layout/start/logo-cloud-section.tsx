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
import { AnimatePresence, motion } from "framer-motion";

export default function LogoCloudSection() {
  const t = useTranslations("logo-cloud-homepage");
  return (
    <AnimatePresence>
      <div className="my-10">
        <HomepageContainer>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.65,
              duration: 0.55,
              ease: [0.075, 0.82, 0.965, 1],
            }}
            className="mx-auto py-8 text-center"
          >
            <div className="relative flex justify-center text-md uppercase">
              <span className="px-2 font-bold text-primary-muted">
                {t("title")}
              </span>
            </div>
            <div className="text-primary-muted mx-auto mt-12 grid max-w-lg grid-cols-4 items-center justify-between gap-x-8 gap-y-10 sm:grid-cols-7 sm:gap-x-10 sm:mx-0 sm:max-w-none">
              {/* <Image
              src="https://assets.streamify.dev/logo/streamify-logo-purpur.svg"
              alt="Logo 1"
              width={474}
              height={144}
              className="col-span-2 max-h-8 w-full object-contain md:col-span-1"
            /> */}
              <AWSLogo className="col-span-2 max-h-6 sm:max-h-7 w-full object-contain md:col-span-1" />
              <VercelLogo className="col-span-2 max-h-4 sm:max-h-6 w-full object-contain md:col-span-1" />
              <PlanetscaleLogo className="col-span-2 max-h-4 sm:max-h-8 w-full object-contain md:col-span-1" />
              <ClerkLogo className="col-span-2 max-h-4 sm:max-h-8 w-full object-contain md:col-span-1" />
              <StripeLogo className="col-span-2 max-h-4 sm:max-h-7 w-full object-contain md:col-span-1" />
              {/* <MuxLogo className="col-span-2 max-h-3 sm:max-h-5 w-full object-contain md:col-span-1" /> */}
              <SanityLogo className="col-span-2 max-h-3 sm:max-h-4 w-full object-contain md:col-span-1" />
              <ResendLogo className="col-span-2 max-h-4 sm:max-h-6 w-full object-contain md:col-span-1" />
            </div>
          </motion.div>
        </HomepageContainer>
      </div>
    </AnimatePresence>
  );
}
