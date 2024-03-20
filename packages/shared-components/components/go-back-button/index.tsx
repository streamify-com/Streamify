"use client";

import { cn } from "@shared-components/lib/utils";
import { Button, buttonVariants } from "@shared-components/ui/button";
import { useTranslations } from "next-intl";
import * as React from "react";
import { useRouter } from "next/navigation";
import { ExpandingArrowLeft } from "@shared-components/animations/expanding-arrow-left";
import { Link } from "@shared-components/ui/link";

type BackToHomepageButtonProps = {
  href: string;
  name: string;
};

type GoBackButtonProps = {
  name: string;
};

export function BackToHomepageButton({
  href,
  name,
}: BackToHomepageButtonProps) {
  return (
    <div className="absolute bottom-0 z-30 hidden md:flex group m-20">
      <Link
        href={href}
        className={cn(
          buttonVariants({
            variant: "blurButton",
            size: "defaultSize",
          }),
        )}
      >
        <ExpandingArrowLeft />
        <span className="ml-7">{name}</span>
      </Link>
    </div>
  );
}

export function GoBackButton({ name }: GoBackButtonProps) {
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
      <span className="ml-5">{name}</span>
    </Button>
  );
}
