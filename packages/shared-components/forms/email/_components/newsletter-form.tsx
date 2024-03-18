"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import { Input } from "@shared-components/ui/input";
import { Button } from "@shared-components/ui/button";
import { Icons } from "@shared-components/graphics/icons";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@shared-components/ui/form";
import { emailSchema } from "@shared-components/lib/email";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";

interface NewsletterFormProps {
  notification: string;
  placeholder: string;
  newsletterbutton: string;
}

type Inputs = z.infer<typeof emailSchema>;

function isInputNamedElement(
  e: Element,
): e is HTMLInputElement & { name: string } {
  return "value" in e && "name" in e;
}

const NewsletterForm = ({
  notification,
  placeholder,
  newsletterbutton,
}: NewsletterFormProps) => {
  const initialData = {
    email: "",
  };

  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });

  const [isPending, startTransition] = React.useTransition();

  const [data, setData] = useState(initialData);

  async function handleOnSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData: Record<string, string> = {};

    Array.from(e.currentTarget.elements)
      .filter(isInputNamedElement)
      .forEach((field) => {
        if (!field.name) return;
        formData[field.name] = field.value;
      });
    startTransition(async () => {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
        }),
      });

      if (response.status === 200) {
        setData(initialData);
        toast.success(`${notification}`);
      }

      // if (!response.ok) {
      //   switch (response.status) {
      //     case 409:
      //       toast.error("You are already subscribed to our newsletter.")
      //       break
      //     case 422:
      //       toast.error("Invalid input.")
      //       break
      //     case 429:
      //       toast.error("The daily email limit has been reached.")
      //       break
      //     case 500:
      //       toast.error("Something went wrong. Please try again later.")
      //       break
      //     default:
      //       toast.error("Something went wrong. Please try again later.")
      //   }
      //   return
      // }
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={handleOnSubmit}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col items-center gap-4 sm:flex-row space-y-0">
              {/* <FormLabel className="">{placeholder}</FormLabel> */}
              <FormControl>
                <Input
                  type="email"
                  id="email"
                  autoComplete="on"
                  placeholder={placeholder}
                  {...field}
                />
              </FormControl>
              <FormMessage />
              <Button
                type="submit"
                disabled={isPending}
                variant="primaryButton"
                size="defaultSize"
              >
                {isPending && (
                  <Icons.spinner
                    className="mr-2 h-4 w-4 animate-spin"
                    aria-hidden="true"
                  />
                )}
                {newsletterbutton}
                <span className="sr-only">{newsletterbutton}</span>
              </Button>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default NewsletterForm;
