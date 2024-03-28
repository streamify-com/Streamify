"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useSignUp } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import type { z } from "zod";
import { verfifyEmailSchema } from "@shared-components/lib/auth";
import { Button } from "@shared-components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@shared-components/ui/form";
import { Icons } from "@shared-components/graphics/icons";
import { showErrorToast } from "@shared-components/lib/handle-error";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@shared-components/ui/input-otp";

type Inputs = z.infer<typeof verfifyEmailSchema>;

interface VerifyEmailFormProps {
  formlabel: string;
  description: string;
  verify_code_form_label: string;
  formbutton: string;
  previous_step: string;
}

export function VerifyEmailForm({
  formlabel,
  description,
  verify_code_form_label,
  formbutton,
  previous_step,
}: VerifyEmailFormProps) {
  const router = useRouter();
  const { isLoaded, signUp, setActive } = useSignUp();
  const [loading, setLoading] = React.useState(false);

  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(verfifyEmailSchema),
    defaultValues: {
      code: "",
    },
  });

  async function onSubmit(data: Inputs) {
    if (!isLoaded) return;

    setLoading(true);

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
    } catch (err) {
      showErrorToast(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
        {/* <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sm:hidden block">{formlabel}</FormLabel>
              <FormControl>
                <Input
                  placeholder={verify_code_form_label}
                  type="tel"
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
        /> */}
        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{verify_code_form_label}</FormLabel>
              <FormControl>
                <InputOTP
                  maxLength={6}
                  render={({ slots }) => (
                    <InputOTPGroup>
                      {slots.map((slot, index) => (
                        <InputOTPSlot key={index} {...slot} />
                      ))}
                      &nbsp;
                    </InputOTPGroup>
                  )}
                  {...field}
                />
              </FormControl>
              <FormDescription className="text-primary-muted">
                {description}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <Separator className="my-4" /> */}
        <Button
          disabled={loading}
          variant="actionButton"
          size="defaultSize"
          type="submit"
        >
          {loading && (
            <Icons.spinner
              className="mr-2 h-4 w-4 animate-spin"
              aria-hidden="true"
            />
          )}
          {formbutton}
        </Button>
        <Button
          aria-label="Go back to the previous page"
          variant="secondaryButton"
          size="defaultSize"
          className="w-full sm:w-full"
          onClick={() => router.back()}
          disabled={loading}
        >
          {previous_step}
        </Button>
      </form>
    </Form>
  );
}
