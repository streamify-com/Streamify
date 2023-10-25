import React from "react";
import Link from "next/link";
import { cn } from "@shared-components/lib/utils";
import { buttonVariants } from "@shared-components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="grid place-items-center text-center">
        <div className="text-primary mx-auto mt-10 py-8 text-3xl">404</div>
        <div className="mx-auto text-center">
          <h1 className="text-highlight text-4xl font-bold md:text-5xl lg:text-6xl">
            Page not found
          </h1>
          <div className="mx-auto my-6 px-8 text-center md:px-20 xl:px-44">
            <h3 className="text-md lg:text-lg">
              Sorry, we couldn&apos;t find the page you&apos;re looking for.
            </h3>
          </div>
        </div>
        <div className="mx-auto pb-20 text-center">
          <div className="flex-col gap-4 space-y-4 md:flex md:flex-row md:items-center md:justify-center md:space-x-4 md:space-y-0">
            <Link
              href="/home"
              className={cn(
                buttonVariants({
                  variant: "primaryButton",
                  size: "defaultSize",
                }),
              )}
            >
              Homepage
            </Link>
            <Link
              href="/contact-us"
              className={cn(
                buttonVariants({
                  variant: "secondaryButton",
                  size: "defaultSize",
                }),
              )}
            >
              <span className="ml-2">Contact us</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
