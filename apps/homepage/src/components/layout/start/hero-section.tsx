"use client";

import React from "react";
import { HomepageContainer } from "@shared-components/ui/container";
import { badgeVariants } from "@shared-components/ui/badge";
import { ArrowRightCircle } from "@shared-components/graphics/icons";
import Link from "next-intl/link";
import { cn } from "@shared-components/lib/utils";
import { ShiningButton, buttonVariants } from "@shared-components/ui/button";
import { PlayIcon } from "@shared-components/graphics/icons";
import { useTranslations } from "next-intl";
import HeroGradientTitle from "@/components/feature/hero-gradient-title";

export default function HeroSection() {
  const t = useTranslations("hero-homepage");
  return (
    <div className="bg-transparent">
      <HomepageContainer>
        <div className="mx-auto py-8 text-center">
          <Link
            className={badgeVariants({ variant: "outline" })}
            href={t("badge.href")}
          >
            {t("badge.headless-streaming")}
            <span className="text-highlight">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
            <span className="text-highlight font-italic">
              {t("badge.read-the-story")}
            </span>
            <ArrowRightCircle className="font-regular text-standard group group-hover:text-primary ml-2 h-4 w-4" />
          </Link>
        </div>
        <div className="mx-auto text-center">
          <h1 className="font-customFont from-standard via-highlight to-standard inline-block bg-gradient-to-t bg-clip-text text-4xl text-transparent md:text-5xl lg:text-6xl">
            {t("title-1")}
            &nbsp;
            {/* <span className="text-primary">{t("title-2")}</span> */}
            <HeroGradientTitle className="inline-block">
              {t("title-2")}
            </HeroGradientTitle>
            &nbsp;
            {t("title-3")}
          </h1>
          <div className="my-10">
            <h3 className="md:text-md text-sm lg:text-lg">
              {t("description")}
            </h3>
          </div>
          <div className="my-10">
            <h3 className="text-highlight md:text-sm text-xs uppercase">
              {t("highlight")}
            </h3>
          </div>
        </div>
        <div className="mx-auto text-center">
          <div className="flex-col gap-4 space-y-4 md:flex md:flex-row md:items-center md:justify-center md:space-x-4 md:space-y-0">
            <Link
              href={t("button.call-to-action.href")}
              className={cn(
                buttonVariants({
                  variant: "actionButton",
                  size: "defaultSize",
                }),
              )}
            >
              {t("button.call-to-action.name")}
            </Link>
            {/* <Link
              href="/subscribe"
              className={cn(
                buttonVariants({
                  variant: "secondaryButton",
                  size: "defaultSize",
                }),
              )}
            >
              <PlayIcon className="h-5 w-5 flex-none" />
              <span className="ml-2">Watch video</span>
            </Link> */}
            <ShiningButton>
              <PlayIcon className="h-5 w-5 flex-none text-standard group-hover:text-highlight" />
              <span className="ml-3">{t("button.watch-video")}</span>
            </ShiningButton>
          </div>
        </div>
      </HomepageContainer>
    </div>
  );
}
