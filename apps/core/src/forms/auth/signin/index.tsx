"use client";

import Link from "next/link";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@shared-components/ui/card";
import { SignInForm } from "@/forms/auth/_components/signin-form";

import { cn } from "@shared-components/lib/utils";
import { buttonVariants } from "@shared-components/ui/button";
import { Separator } from "@shared-components/ui/separator";
import { OAuthSignIn } from "@/forms/auth/_components/oauth-signin";

export default function SigninPageForm() {
  return (
    <>
      <CardHeader>
        <CardTitle>Title</CardTitle>
        <CardDescription>
          Description&nbsp;
          <Link
            aria-label="alternative.name"
            href="/link"
            className={cn(
              buttonVariants({
                variant: "highlightLinkButton",
                size: "linkSize",
              }),
            )}
          >
            Alternative name
          </Link>
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-1 gap-2">
          <OAuthSignIn />
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <Separator />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background text-primary-muted px-2">
              or continue with
            </span>
          </div>
        </div>
        <SignInForm
          email="Email"
          password="Password"
          signin="Signin"
          previousstep="Previous step"
        />
        <CardFooter>
          {/* <Link
            aria-label="Reset password"
            href="/signin/reset-password"
            className={cn(
              buttonVariants({
                variant: "linkButton",
                size: "linkSize",
              }),
              "sm:text-sm",
            )}
          >
            Reset password
          </Link> */}
        </CardFooter>
      </CardContent>
    </>
  );
}
