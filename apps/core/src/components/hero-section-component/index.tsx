"use client";

import React from "react";
import { HomepageContainer } from "@shared-components/ui/container";
import { Badge, badgeVariants } from "@shared-components/ui/badge";
import { ArrowRightCircle, VideoIcon } from "@shared-components/graphics/icons";
import { Link } from "@shared-components/ui/link";
// import { useTranslations } from "next-intl";
import HeroGradientTitle from "@shared-components/animations/gradient-title";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@shared-components/lib/utils";
import { buttonVariants } from "@shared-components/ui/button";
// import Newsletter from "@shared-components/forms/email/newsletter";

interface HeroSectionProps {
  badge_title: string;
  badge_description: string;
  badge_subtext: string;
  title_1: string;
  title_2: string;
  title_3: string;
  description: string;
  highlight: string;
}

export default function HeroSectionComponent({
  badge_title,
  badge_description,
  badge_subtext,
  title_1,
  title_2,
  title_3,
  description,
  highlight,
}: HeroSectionProps) {
  //   const w = useTranslations("newsletter");

  return (
    <AnimatePresence>
      <div className="bg-transparent flex flex-col justify-center static overflow-hidden px-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.65,
              duration: 0.55,
              ease: [0.075, 0.82, 0.965, 1],
            }}
            className="mx-auto pb-4 sm:pb-12 text-center"
          >
            <Link href="/story">
              <div className={badgeVariants({ variant: "outline" })}>
                <Badge variant="default" className="px-2 py-1 mr-3">
                  {badge_title}
                </Badge>
                {badge_description}
                <span className="text-primary-muted hidden sm:block">
                  &nbsp;&nbsp;|&nbsp;&nbsp;
                </span>
                <span className="text-primary-muted hidden sm:block">
                  {badge_subtext}
                </span>
                <ArrowRightCircle className="text-primary-muted group mx-2 h-4 w-4" />
              </div>
            </Link>
          </motion.div>
          <div className="mx-auto text-center py-2">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.15,
                duration: 0.95,
                ease: [0.165, 0.84, 0.44, 1],
              }}
              className="font-special from-primary-muted via-primary to-primary-muted inline-block bg-gradient-to-t bg-clip-text text-3xl text-transparent sm:text-6xl sm:px-28"
            >
              {title_1}
              &nbsp;
              <HeroGradientTitle className="inline-block">
                {title_2}
              </HeroGradientTitle>
              &nbsp;
              {title_3}
            </motion.h1>
            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.15,
                duration: 0.95,
                ease: [0.165, 0.84, 0.44, 1],
              }}
              className="py-6 sm:pt-12 sm:px-44 sm:text-lg text-sm md:text-xl text-primary-muted"
            >
              {description}
            </motion.h3>
            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.15,
                duration: 0.95,
                ease: [0.165, 0.84, 0.44, 1],
              }}
              className="pb-4 text-primary sm:text-sm text-xs uppercase"
            >
              {highlight}
            </motion.h3>
            <div className="mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.65,
                  duration: 0.55,
                  ease: [0.075, 0.82, 0.965, 1],
                }}
                className="flex-col gap-4 space-y-4 sm:flex sm:flex-row sm:items-center sm:justify-center sm:space-y-0 py-4 sm:py-8"
              >
                <Link
                  href="/test"
                  className={cn(
                    buttonVariants({
                      variant: "actionButton",
                      size: "defaultSize",
                    }),
                  )}
                >
                  Get started
                </Link>
                <Link
                  href="/welcome"
                  className={cn(
                    buttonVariants({
                      variant: "secondaryButton",
                      size: "defaultSize",
                    }),
                  )}
                >
                  <VideoIcon className="h-6 w-auto mr-2" />
                  Watch trailer (2 min)
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}
