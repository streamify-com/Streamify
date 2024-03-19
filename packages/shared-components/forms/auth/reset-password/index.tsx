"use client";

import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@shared-components/ui/card";
import { ResetPasswordForm } from "@shared-components/forms/auth/_components/reset-password-form";

interface ResetPasswordProps {
  title: string;
  description: string;
  formbutton: string;
  formbuttondescription: string;
  previous_step: string;
  inputplaceholder: string;
}

export default function ResetPasswordPageForm({
  title,
  description,
  formbutton,
  formbuttondescription,
  previous_step,
  inputplaceholder,
}: ResetPasswordProps) {
  return (
    <>
      <CardHeader className="space-y-1">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-2 mt-4">
        <ResetPasswordForm
          formlabel={title}
          formbutton={formbutton}
          formbuttondescription={formbuttondescription}
          previous_step={previous_step}
          inputplaceholder={inputplaceholder}
        />
      </CardContent>
    </>
  );
}
