"use client";

import React from "react";
import { HomepageContainer } from "@shared-components/ui/container";
import { badgeVariants } from "@shared-components/ui/badge";
import { ArrowRightCircle } from "@shared-components/graphics/icons";
import Link from "next-intl/link";
import { useTranslations } from "next-intl";
import HeroGradientTitle from "@/components/hero-gradient-title";
import { AnimatePresence, motion } from "framer-motion";
import Newsletter from "@/components/newsletter";

export default function HeroSection() {
  const t = useTranslations("hero-homepage");
  return (
    <AnimatePresence>
      <div className="bg-transparent flex flex-col justify-center static overflow-hidden">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.65,
              duration: 0.55,
              ease: [0.075, 0.82, 0.965, 1],
            }}
            className="mx-auto pb-8 text-center hidden sm:block"
          >
            <div
              className={badgeVariants({ variant: "outline" })}
              // href={t("badge.href")}
            >
              {t("badge.headless-streaming")}
              <span className="text-primary">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
              <span className="text-primary sm:group-hover:text-action font-italic">
                {t("badge.read-the-story")}
              </span>
              <ArrowRightCircle className="font-medium text-primary group sm:group-hover:text-action ml-2 h-4 w-4" />
            </div>
          </motion.div>
          <div className="mx-auto text-center py-4">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.15,
                duration: 0.95,
                ease: [0.165, 0.84, 0.44, 1],
              }}
              className="font-special from-primary-muted via-primary to-primary-muted inline-block bg-gradient-to-t bg-clip-text text-3xl text-transparent sm:text-4xl md:text-5xl px-0 sm:px-14"
            >
              {t("title-1")}
              &nbsp;
              <HeroGradientTitle className="inline-block">
                {t("title-2")}
              </HeroGradientTitle>
              &nbsp;
              {t("title-3")}
            </motion.h1>
            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.15,
                duration: 0.95,
                ease: [0.165, 0.84, 0.44, 1],
              }}
              className="py-4 sm:px-44 sm:text-md text-sm md:text-lg text-primary-muted"
            >
              {t("description")}
            </motion.h3>
            {/* <motion.h3
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.15,
                  duration: 0.95,
                  ease: [0.165, 0.84, 0.44, 1],
                }}
                className="my-10 text-primary sm:text-sm text-xs uppercase"
              >
                {t("highlight")}
              </motion.h3> */}
          </div>
          <div className="mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.65,
                duration: 0.55,
                ease: [0.075, 0.82, 0.965, 1],
              }}
              className="flex-col gap-4 space-y-4 sm:flex sm:flex-row sm:items-center sm:justify-center sm:space-y-0"
            >
              <Newsletter />
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}
