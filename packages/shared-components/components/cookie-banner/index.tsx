"use client";

import React, { useEffect, useState } from "react";
import { hasCookie, setCookie } from "cookies-next";
import { Button, buttonVariants } from "@shared-components/ui/button";
import { cn } from "@shared-components/lib/utils";
import { Link } from "@shared-components/ui/link";

interface CookieBannerProps {
  description: string;
  cookie_policy: string;
  accept_all: string;
  only_necessary: string;
}

export default function CookieBanner({
  description,
  cookie_policy,
  accept_all,
  only_necessary,
}: CookieBannerProps) {
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
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 p-4 sm:p-12">
      <div className="bg-foreground border-separator pointer-events-auto max-w-xl rounded-md p-6 border">
        <p className="text-standard sm:text-sm">{description}</p>
        <div className="mt-4 space-y-2 sm:flex sm:items-center sm:justify-between sm:gap-x-3 sm:space-y-0">
          <Link
            href="/cookie-policy"
            className={cn(
              buttonVariants({
                variant: "secondaryButton",
                size: "defaultSize",
              }),
              "sm:w-auto sm:text-sm",
            )}
          >
            {cookie_policy}
          </Link>
          <div className="sm:flex gap-x-2 space-y-2 sm:space-y-0">
            <Button
              onClick={acceptCookie}
              variant="primaryButton"
              size="defaultSize"
              className="sm:w-auto sm:text-sm"
            >
              {accept_all}
            </Button>
            <Button
              onClick={declineCookie}
              variant="primaryButton"
              size="defaultSize"
              className="sm:w-auto sm:text-sm"
            >
              {only_necessary}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
