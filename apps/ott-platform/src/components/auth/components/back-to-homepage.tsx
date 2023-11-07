"use client";

import { ExpandingArrowLeft } from "@shared-components/graphics/icons";
import { cn } from "@shared-components/lib/utils";
import { Button, buttonVariants } from "@shared-components/ui/button";
import Link from "next-intl/link";
import { useTranslations } from "next-intl";
import * as React from "react";
import { useRouter } from "next/navigation";

export function BackToHomepageButton() {
  const t = useTranslations("back-to-homepage");
  return (
    <div className="absolute bottom-0 z-30 hidden md:flex group m-20">
      <Link
        href={t("href")}
        className={cn(
          buttonVariants({
            variant: "ghostButton",
            size: "navigationSize",
          }),
          "sm:hover:border-separator sm:hover:bg-background/75 border border-transparent px-4 py-2 text-primary-inner sm:group-hover:text-primary-hover sm:hover:backdrop-blur-xl",
        )}
      >
        <ExpandingArrowLeft />
        <span className="ml-7">{t("name")}</span>
      </Link>
    </div>
  );
}

export function GoBackButton() {
  const t = useTranslations("go-back");
  const router = useRouter();
  const [isPending] = React.useTransition();
  return (
    <Button
      aria-label="Go back to the previous page"
      variant="ghostButton"
      size="navigationSize"
      className="w-14 text-sm"
      onClick={() => router.back()}
      disabled={isPending}
    >
      <ExpandingArrowLeft />
      <span className="ml-5">{t("name")}</span>
    </Button>
  );
}
