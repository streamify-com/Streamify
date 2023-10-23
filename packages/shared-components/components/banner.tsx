"use client";

import Link from "next-intl/link";
import { useDemoModal } from "@shared-components/ui/demo-modal";
import { cn } from "@shared-components/lib/utils";
import { buttonVariants } from "@shared-components/ui/button";
import {
  ExpandingArrowRight,
  PlayIcon,
} from "@shared-components/graphics/icons";

interface BannerProps {
  firstButtonName: string;
  secondButtonName: string;
}

export function Banner({ firstButtonName, secondButtonName }: BannerProps) {
  const { DemoModal, setShowDemoModal } = useDemoModal();
  return (
    <div className="mt-10 flex flex-col items-center gap-4 md:flex-row">
      <DemoModal>
        Hi
      </DemoModal>
      <Link
        href="#"
        onClick={() => setShowDemoModal(true)}
        className={cn(
          buttonVariants({ variant: "primaryButton", size: "defaultSize" }),
        )}
      >
        <PlayIcon className="h-5 w-5 flex-none" />
        <span className="ml-3">{firstButtonName}</span>
      </Link>
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "secondaryButton", size: "defaultSize" }),
        )}
      >
        <span className="mr-2.5">{secondButtonName}</span>
        <ExpandingArrowRight />
      </Link>
    </div>
  );
}
