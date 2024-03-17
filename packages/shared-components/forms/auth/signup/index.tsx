"use client";

import { Link } from "@shared-components/ui/link";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardSubtitle,
} from "@shared-components/ui/card";
import { SignUpForm } from "@shared-components/forms/auth/_components/signup-form";
import { OAuthSignIn } from "@shared-components/forms/auth/_components/oauth-signin";
import { cn } from "@shared-components/lib/utils";
import { buttonVariants } from "@shared-components/ui/button";
import { Separator } from "@shared-components/ui/separator";

interface SignUpFormProps {
  step: string;
  title: string;
  description: string;
  signin_link: string;
  or_continue_with: string;
  genderplaceholder: string;
  gendermale: string;
  genderfemale: string;
  genderdiverse: string;
  firstname: string;
  lastname: string;
  birthdate: string;
  email: string;
  password: string;
  termsandconditions: string;
  termsandconditionsheader: string;
  termsandconditionsdescriptionpart1: string;
  termsandconditionsdescriptionpart2: string;
  privacypolicy: string;
  and: string;
  formbutton: string;
  previous_step: string;
}

export default function SignUpPageForm({
  step,
  title,
  description,
  signin_link,
  or_continue_with,
  genderplaceholder,
  gendermale,
  genderfemale,
  genderdiverse,
  firstname,
  lastname,
  birthdate,
  email,
  password,
  termsandconditions,
  termsandconditionsheader,
  termsandconditionsdescriptionpart1,
  termsandconditionsdescriptionpart2,
  privacypolicy,
  and,
  formbutton,
  previous_step,
}: SignUpFormProps) {
  return (
    <>
      <CardHeader>
        <CardSubtitle>{step}</CardSubtitle>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {description}&nbsp;
          <Link
            aria-label={description}
            href="signin"
            className={cn(
              buttonVariants({
                variant: "highlightLinkButton",
                size: "linkSize",
              }),
            )}
          >
            {signin_link}
          </Link>
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <OAuthSignIn />
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <Separator />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white/80 dark:bg-black/80 backdrop-blur-lg text-primary-muted px-4">
              {or_continue_with}
            </span>
          </div>
        </div>
        <SignUpForm
          firstname={firstname}
          lastname={lastname}
          email={email}
          password={password}
          termsandconditions={termsandconditions}
          termsandconditionsheader={termsandconditionsheader}
          termsandconditionsdescriptionpart1={
            termsandconditionsdescriptionpart1
          }
          termsandconditionsdescriptionpart2={
            termsandconditionsdescriptionpart2
          }
          privacypolicy={privacypolicy}
          and={and}
          formbutton={formbutton}
          previous_step={previous_step}
          genderplaceholder={genderplaceholder}
          gendermale={gendermale}
          genderfemale={genderfemale}
          genderdiverse={genderdiverse}
          birthdate={birthdate}
        />
      </CardContent>
    </>
  );
}
