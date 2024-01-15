"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import { useTranslations } from "next-intl";
import { Input } from "@shared-components/ui/input";
import { Button, buttonVariants } from "@shared-components/ui/button";
import { cn } from "@shared-components/lib/utils";

function isInputNamedElement(
  e: Element,
): e is HTMLInputElement & { name: string } {
  return "value" in e && "name" in e;
}

const NewsletterForm = () => {
  const initialData = {
    email: "",
  };

  const t = useTranslations("newsletter");

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
      toast.success(`${t("notification")}`);
    }
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <h3 className="text-md text-primary sm:font-semibold font-regular leading-6">
        {t("title")}
      </h3>
      <p className="text-md text-primary-muted my-2 leading-6">
        {t("description")}
      </p>
      <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
        <Input
          type="email"
          name="email"
          id="email"
          autoComplete="on"
          placeholder={t("placeholder")}
        />
        <Button
          type="submit"
          className={cn(
            buttonVariants({
              variant: "primaryButton",
              size: "defaultSize",
            }),
          )}
        >
          {t("button")}
        </Button>
      </div>
    </form>
  );
};

export default NewsletterForm;
