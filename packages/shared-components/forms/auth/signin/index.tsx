"use client";

import Link from "next/link";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@shared-components/ui/card";
import { SignInForm } from "@shared-components/forms/auth/_components/signin-form";

import { cn } from "@shared-components/lib/utils";
import { buttonVariants } from "@shared-components/ui/button";
import { Separator } from "@shared-components/ui/separator";
import { OAuthSignIn } from "@shared-components/forms/auth/_components/oauth-signin";

interface SignInFormProps {
  title: string;
  description: string;
  signup_link: string;
  or_continue_with: string;
  email: string;
  password: string;
  signin_button: string;
  previousstep: string;
  reset_password: string;
}

export default function SigninPageForm({
  title,
  description,
  signup_link,
  or_continue_with,
  email,
  password,
  signin_button,
  previousstep,
  reset_password,
}: SignInFormProps) {
  return (
    <>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {description}&nbsp;
          <Link
            aria-label="alternative.name"
            href="/signup"
            className={cn(
              buttonVariants({
                variant: "highlightLinkButton",
                size: "linkSize",
              }),
            )}
          >
            {signup_link}
          </Link>
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-1 gap-2 my-4">
          <OAuthSignIn />
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <Separator />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background text-primary-muted px-2">
              {or_continue_with}
            </span>
          </div>
        </div>
        <SignInForm
          email={email}
          password={password}
          signin={signin_button}
          previousstep={previousstep}
          reset_password={reset_password}
        />
        {/* <CardFooter>
          <Link
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
            {reset_password}
          </Link>
        </CardFooter> */}
      </CardContent>
    </>
  );
}
