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
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 p-2 sm:p-12">
      <div className="bg-foreground border-separator pointer-events-auto max-w-md rounded-md p-6 border">
        <p className="text-standard text-sm">
          {t("description")}
          <Link
            href="/cookie-policy"
            className={cn(
              buttonVariants({
                variant: "linkButton",
                size: "linkSize",
              }),
              "text-sm sm:text-sm",
            )}
          >
            {t("cookie-policy")}
          </Link>
          .
        </p>
        <div className="mt-4 space-y-2 sm:flex sm:items-center sm:gap-x-3 sm:space-y-0">
          <Button
            onClick={acceptCookie}
            variant="primaryButton"
            size="headerSize"
            className="sm:w-full sm:text-sm"
          >
            {t("accept-all")}
          </Button>
          <Button
            onClick={declineCookie}
            variant="secondaryButton"
            size="headerSize"
            className="sm:w-full sm:text-sm"
          >
            {t("only-necessary")}
          </Button>
        </div>
      </div>
    </div>
  );
}
