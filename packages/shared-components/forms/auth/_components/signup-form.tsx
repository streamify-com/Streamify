"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { isClerkAPIResponseError, useSignUp } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type { z } from "zod";
import { signUpSchema } from "@shared-components/lib/auth";
import { Button, buttonVariants } from "@shared-components/ui/button";
import { Checkbox } from "@shared-components/ui/checkbox";
import { Input } from "@shared-components/ui/input";
import { Icons } from "@shared-components/graphics/icons";
import { PasswordInput } from "@shared-components/forms/auth/_components/password-input";
import { Separator } from "@shared-components/ui/separator";
import { Link } from "@shared-components/ui/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@shared-components/ui/form";
import { cn } from "@shared-components/lib/utils";
import { DateInput } from "@shared-components/forms/auth/_components/date-input";

type Inputs = z.infer<typeof signUpSchema>;

interface SignUpFormProps {
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

export function SignUpForm({
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
  const router = useRouter();
  const { isLoaded, signUp } = useSignUp();
  const [isPending, startTransition] = React.useTransition();
  const [isChecked, setIsChecked] = React.useState(false);
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      // birthday: "",
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(data: Inputs) {
    if (!isLoaded) return;

    if (data.password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    startTransition(async () => {
      try {
        await signUp.create({
          // unsafeMetadata: {
          //   gender: data.gender,
          //   birthday: data.birthday,
          // },
          // gender: data.gender,
          // birthday: data.birthday,
          firstName: data.firstname,
          lastName: data.lastname,
          emailAddress: data.email,
          password: data.password,
        });

        // Send email verification code
        await signUp.prepareEmailAddressVerification({
          strategy: "email_code",
        });

        router.push("/signup/verify");
        toast.message("Check your email", {
          description: "We sent you a 6-digit verification code.",
        });
      } catch (error) {
        const unknownError = "Something went wrong, please try again.";

        isClerkAPIResponseError(error)
          ? toast.error(error.errors[0]?.longMessage ?? unknownError)
          : toast.error(unknownError);
      }
    });
  }

  return (
    <Form {...form}>
      <form
        className="grid gap-2"
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <div className="grid grid-cols-1 gap-4 sm:gap-2">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-2">
            {/* <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sm:hidden block">
                    {genderplaceholder}
                  </FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      className={cn(
                        buttonVariants({
                          variant: "secondaryButton",
                          size: "defaultSize",
                        }),
                        "sm:w-full",
                      )}
                    >
                      <option value="">{genderplaceholder}</option>
                      <option value="male">{gendermale}</option>
                      <option value="female">{genderfemale}</option>
                      <option value="diverse">{genderdiverse}</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="birthday"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sm:hidden block">{birthdate}</FormLabel>
                  <FormControl>
                    <DateInput placeholder={birthdate} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sm:hidden block">{firstname}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={firstname}
                      autoComplete="given-name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sm:hidden block">{lastname}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={lastname}
                      autoComplete="family-name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sm:hidden block">{email}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={email}
                    autoComplete="on"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sm:hidden block">{password}</FormLabel>
                <FormControl>
                  <PasswordInput placeholder={password} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sm:hidden block">
                  Confirm Password
                </FormLabel>
                <FormControl>
                  <PasswordInput
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Separator className="my-2" />
        <div className="items-top mb-2 flex space-x-2 text-left">
          <Checkbox
            id="terms1"
            checked={isChecked}
            onClick={handleCheckboxClick}
            className="mt-1.5 sm:mt-1 h-5 w-5 sm:h-4 sm:w-4"
          />
          <div className="grid gap-1.5 leading-none ml-2">
            <label htmlFor="terms1" className="text-primary sm:text-sm text-sm">
              {termsandconditionsheader}
            </label>
            <p className="text-primary-muted sm:text-sm text-sm">
              {termsandconditionsdescriptionpart1}
              <Link
                aria-label="Terms of Services"
                href="/terms-of-services"
                className={cn(
                  buttonVariants({ variant: "linkButton", size: "linkSize" }),
                  "sm:text-sm text-sm",
                )}
              >
                {termsandconditions}
              </Link>
              &nbsp;{and}&nbsp;
              <Link
                aria-label="Privacy Policy"
                href="/privacy-policy"
                className={cn(
                  buttonVariants({ variant: "linkButton", size: "linkSize" }),
                  "sm:text-sm text-sm",
                )}
              >
                {privacypolicy}
              </Link>
              {termsandconditionsdescriptionpart2}
            </p>
          </div>
        </div>
        <Button
          disabled={isPending || !isChecked}
          className="bg-primary w-full sm:w-full"
        >
          {isPending && (
            <Icons.spinner
              className="mr-2 h-4 w-4 animate-spin"
              aria-hidden="true"
            />
          )}
          {formbutton}
          <span className="sr-only">{formbutton}</span>
        </Button>
        {/* <Button
          aria-label="Go back to the previous page"
          variant="secondaryButton"
          size="defaultSize"
          className="w-full sm:w-full"
          onClick={() => router.back()}
          disabled={isPending}
        >
          {previous_step}
        </Button> */}
      </form>
    </Form>
  );
}
