"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { isClerkAPIResponseError, useSignUp } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type { z } from "zod";
import { Separator } from "@shared-components/ui/separator";
import { verfifyEmailSchema } from "@/lib/auth";
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

type Inputs = z.infer<typeof verfifyEmailSchema>;

interface VerifyEmailFormProps {
  formlabel: string;
  verifycodeformlabel: string;
  formbutton: string;
  previousstep: string;
}

export function VerifyEmailForm({
  formlabel,
  verifycodeformlabel,
  formbutton,
  previousstep,
}: VerifyEmailFormProps) {
  const router = useRouter();
  const { isLoaded, signUp, setActive } = useSignUp();
  const [isPending, startTransition] = React.useTransition();

  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(verfifyEmailSchema),
    defaultValues: {
      code: "",
    },
  });

  function onSubmit(data: Inputs) {
    if (!isLoaded) return;

    startTransition(async () => {
      try {
        const completeSignUp = await signUp.attemptEmailAddressVerification({
          code: data.code,
        });
        if (completeSignUp.status !== "complete") {
          /*  investigate the response, to see if there was an error
             or if the user needs to complete more steps.*/
          console.log(JSON.stringify(completeSignUp, null, 2));
        }
        if (completeSignUp.status === "complete") {
          await setActive({ session: completeSignUp.createdSessionId });

          router.push(`${window.location.origin}/`);
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
        className="grid gap-4"
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{formlabel}</FormLabel>
              <FormControl>
                <Input
                  placeholder={verifycodeformlabel}
                  {...field}
                  onChange={(e) => {
                    e.target.value = e.target.value.trim();
                    field.onChange(e);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Separator className="my-4" />
        <Button disabled={isPending} className="bg-highlight w-full md:w-full">
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
