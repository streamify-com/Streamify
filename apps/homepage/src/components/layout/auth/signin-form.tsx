"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { isClerkAPIResponseError, useSignIn } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type { z } from "zod";
import { signInSchema } from "@/lib/auth";
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

type Inputs = z.infer<typeof signInSchema>;

interface SignInFormProps {
  email: string;
  password: string;
  signin: string;
  previousstep: string;
}

export function SignInForm({
  email,
  password,
  signin,
  previousstep,
}: SignInFormProps) {
  const router = useRouter();
  const { isLoaded, signIn, setActive } = useSignIn();
  const [isPending, startTransition] = React.useTransition();

  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: Inputs) {
    if (!isLoaded) return;

    startTransition(async () => {
      try {
        const result = await signIn.create({
          identifier: data.email,
          password: data.password,
        });

        if (result.status === "complete") {
          await setActive({ session: result.createdSessionId });

          router.push(`${window.location.origin}/`);
        } else {
          /*Investigate why the login hasn't completed */
          console.log(result);
        }
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
        <Separator className="my-4" />
        <Button disabled={isPending} className="bg-primary w-full sm:w-full">
          {isPending && (
            <Icons.spinner
              className="mr-2 h-4 w-4 animate-spin"
              aria-hidden="true"
            />
          )}
          {signin}
          <span className="sr-only">{signin}</span>
        </Button>
        <Button
          aria-label="Go back to the previous page"
          variant="secondaryButton"
          size="fixedSize"
          className="w-full sm:w-full"
          onClick={() => router.back()}
          disabled={isPending}
        >
          {previousstep}
        </Button>
      </form>
    </Form>
  );
}
