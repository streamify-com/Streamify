"use client";

import React, { useEffect, useState } from "react";
import { hasCookie, setCookie } from "cookies-next";
import { Button, buttonVariants } from "@shared-components/ui/button";
import Link from "next-intl/link";
import { useTranslations } from "next-intl";
import { cn } from "@shared-components/lib/utils";

export default function Cookie() {
  const t = useTranslations("cookie");

  const [showConsent, setShowConsent] = useState<boolean>(true);

  useEffect(() => {
    setShowConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("localConsent", "true", {});
  };

  const declineCookie = () => {
    setShowConsent(true);
    setCookie("localConsent", "false", {});
  };

  if (showConsent) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 px-10 pb-10">
      <div className="bg-background ring-separator pointer-events-auto max-w-md rounded-md p-6 ring-1">
        <p className="text-primary text-sm">
          {t("description")}
          <Link
            href="/cookie-policy"
            className={cn(
              buttonVariants({
                variant: "linkButton",
                size: "linkSize",
              }),
              "text-sm md:text-sm",
            )}
          >
            {t("cookie-policy")}
          </Link>
          .
        </p>
        <div className="mt-4 space-y-4 md:flex md:items-center md:gap-x-3 md:space-y-0">
          <Button
            onClick={acceptCookie}
            variant="primaryButton"
            size="headerSize"
            className="md:w-full sm:text-sm"
          >
            {t("accept-all")}
          </Button>
          <Button
            onClick={declineCookie}
            variant="secondaryButton"
            size="headerSize"
            className="md:w-full sm:text-sm"
          >
            {t("only-necessary")}
          </Button>
        </div>
      </div>
    </div>
  );
}
