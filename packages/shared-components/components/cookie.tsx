"use client";

import React, { useEffect, useState } from "react";
import { hasCookie, setCookie } from "cookies-next";
import { Button, buttonVariants } from "@shared-components/ui/button";
import { cn } from "@shared-components/lib/utils";
import Link from "next-intl/link";

interface CookieConsentProps {
  description: string;
  cookie_policy: string;
  accept_all: string;
  only_necessary: string;
}

// const CookieConsent: React.FC = ({ description, cookie_policy, accept_all, only_necessary }: CookieConsentProps) => {
export default function CookieConsent({
  description,
  cookie_policy,
  accept_all,
  only_necessary,
}: CookieConsentProps) {
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
        <p className="text-standard text-sm">
          {description}
          <Link
            href="/cookie-policy"
            className="font-regular underline underline-offset-4"
          >
            {cookie_policy}
          </Link>
          .
        </p>
        <div className="mt-4 space-y-4 md:flex md:items-center md:gap-x-3 md:space-y-0">
          <Button
            onClick={acceptCookie}
            className={cn(
              buttonVariants({
                variant: "primaryButton",
                size: "defaultSize",
              }),
              "md:px-5 md:py-2",
            )}
          >
            {accept_all}
          </Button>
          <Button
            onClick={declineCookie}
            className={cn(
              buttonVariants({
                variant: "secondaryButton",
                size: "defaultSize",
              }),
              "md:px-5 md:py-2",
            )}
          >
            {only_necessary}
          </Button>
        </div>
      </div>
    </div>
  );
}

// export default CookieConsent;
