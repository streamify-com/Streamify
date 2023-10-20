"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { isClerkAPIResponseError, useSignUp } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type { z } from "zod";
import { signUpSchema } from "@/lib/auth";
import { Button } from "@shared-components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@shared-components/ui/form";
import { Input } from "@shared-components/ui/input";
import { Icons } from "@shared-components/graphics/icons";
import { PasswordInput } from "@/components/layout/auth/password-input";
import { Separator } from "@shared-components/ui/separator";
import Link from "next-intl/link";
import { Checkbox } from "@shared-components/ui/checkbox";

type Inputs = z.infer<typeof signUpSchema>;

interface SignUpFormProps {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  termsandconditions: string;
  termsandconditionsdescription: string;
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
  termsandconditionsdescription,
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
          gender: data.gender,
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
        className="grid gap-4"
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4">
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <FormControl>
                  <select
                    {...field}
                    className="h-12 md:h-12 py-2 px-4 md:w-full w-full rounded-md border border-separator"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="diverse">Diverse</option>
                    <option value="no indication">No Indication</option>
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date of birth</FormLabel>
                <FormControl>
                  <input
                    type="date"
                    className="h-12 md:h-12 py-2 px-4 md:w-full w-full rounded-md border border-separator"
                  ></input>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{firstname}</FormLabel>
                <FormControl>
                  <Input placeholder={firstname} {...field} />
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
                <FormLabel>{lastname}</FormLabel>
                <FormControl>
                  <Input placeholder={lastname} {...field} />
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
              <FormLabel>{email}</FormLabel>
              <FormControl>
                <Input placeholder={email} {...field} />
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
              <FormLabel>{password}</FormLabel>
              <FormControl>
                <PasswordInput placeholder={password} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="items-center flex space-x-2 mt-4">
          <Checkbox
            id="terms1"
            checked={isChecked}
            onClick={handleCheckboxClick}
          />
          <div className="flex items-center">
            <Link
              aria-label="Terms of Services"
              href="/terms-of-services"
              className="hover:text-highlight underline underline-offset-4 transition-colors"
            >
              {termsandconditions}
            </Link>
            <span className="mx-2">{and}</span>
            <Link
              aria-label="Terms of Services"
              href="/privacy-policy"
              className="hover:text-highlight underline underline-offset-4 transition-colors"
            >
              {privacypolicy}
            </Link>
          </div>
        </div>
        <p className="text-standard text-sm">{termsandconditionsdescription}</p>
        <Separator className="border-separator my-4 border-t" />
        <Button
          disabled={isPending || !isChecked}
          className="bg-highlight w-full md:w-full"
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
          size="defaultSize"
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
