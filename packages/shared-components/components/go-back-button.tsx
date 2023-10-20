"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@shared-components/ui/button";
import { ExpandingArrowLeft } from "@shared-components/graphics/icons";

export default function GoBackButton() {
  const router = useRouter();
  const [isPending] = React.useTransition();
  return (
    <Button
      aria-label="Go back to the previous page"
      variant="navigationButton"
      size="navigationSize"
      className="w-14"
      onClick={() => router.back()}
      disabled={isPending}
    >
      <ExpandingArrowLeft />
      <span className="ml-5">Back</span>
    </Button>
  );
}
