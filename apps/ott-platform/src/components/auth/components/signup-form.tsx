"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { isClerkAPIResponseError, useSignUp } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type { z } from "zod";
import { signUpSchema } from "@/lib/auth";
import { Button, buttonVariants } from "@shared-components/ui/button";
import { Checkbox } from "@shared-components/ui/checkbox";
import { Input } from "@shared-components/ui/input";
import { Icons } from "@shared-components/graphics/icons";
import { PasswordInput } from "@/components/auth/components/password-input";
import { Separator } from "@shared-components/ui/separator";
import Link from "next-intl/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@shared-components/ui/form";
import { cn } from "@shared-components/lib/utils";

type Inputs = z.infer<typeof signUpSchema>;

interface SignUpFormProps {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  termsandconditions: string;
  termsandconditionsheader: string;
  termsandconditionsdescriptionpart1: string;
  termsandconditionsdescriptionpart2: string;
  privacypolicy: string;
  and: string;
  formbutton: string;
  previousstep: string;
}

export function SignUpForm({
  firstname,
  lastname,
  email,
  password,
  termsandconditions,
  termsandconditionsheader,
  termsandconditionsdescriptionpart1,
  termsandconditionsdescriptionpart2,
  privacypolicy,
  and,
  formbutton,
  previousstep,
}: SignUpFormProps) {
  const router = useRouter();
  const { isLoaded, signUp } = useSignUp();
  const [isPending, startTransition] = React.useTransition();
  const [isChecked, setIsChecked] = React.useState(false);

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(data: Inputs) {
    if (!isLoaded) return;

    startTransition(async () => {
      try {
        await signUp.create({
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
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4">
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>{firstname}</FormLabel> */}
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
                {/* <FormLabel>{lastname}</FormLabel> */}
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
              {/* <FormLabel>{email}</FormLabel> */}
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
              {/* <FormLabel>{password}</FormLabel> */}
              <FormControl>
                <PasswordInput
                  placeholder={password}
                  autoComplete="new-password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Separator className="my-2" />
        <div className="items-top mb-2 flex space-x-2 text-left">
          <Checkbox
            id="terms1"
            checked={isChecked}
            onClick={handleCheckboxClick}
          />
          <div className="grid gap-1.5 leading-none">
            <label htmlFor="terms1" className="text-primary text-sm">
              {termsandconditionsheader}
            </label>
            <p className="text-primary text-sm">
              {termsandconditionsdescriptionpart1}&nbsp;
              <Link
                aria-label="Terms of Services"
                href="/terms-of-services"
                className={cn(
                  buttonVariants({ variant: "linkButton", size: "linkSize" }),
                  "text-sm",
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
                  "text-sm",
                )}
              >
                {privacypolicy}
              </Link>
              &nbsp;{termsandconditionsdescriptionpart2}
            </p>
          </div>
        </div>
        <Button
          disabled={isPending || !isChecked}
          className="bg-primary w-full md:w-full"
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
        <Button
          aria-label="Go back to the previous page"
          variant="secondaryButton"
          size="fixedSize"
          className="w-full md:w-full"
          onClick={() => router.back()}
          disabled={isPending}
        >
          {previousstep}
        </Button>
      </form>
    </Form>
  );
}
