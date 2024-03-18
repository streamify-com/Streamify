"use client";

import {
  CardContent,
  CardDescription,
  CardHeader,
  CardSubtitle,
  CardTitle,
} from "@shared-components/ui/card";
import { VerifyEmailForm } from "@shared-components/forms/auth/_components/verify-email-form";

interface VerifyEmailFormProps {
  step: string;
  title: string;
  description: string;
  formlabel: string;
  verify_code_form_label: string;
  formbutton: string;
  previous_step: string;
}

export default function VerifyEmailPageForm({
  step,
  title,
  description,
  formlabel,
  verify_code_form_label,
  formbutton,
  previous_step,
}: VerifyEmailFormProps) {
  return (
    <>
      <CardHeader>
        <CardSubtitle>{step}</CardSubtitle>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <VerifyEmailForm
          formlabel={formlabel}
          verify_code_form_label={verify_code_form_label}
          formbutton={formbutton}
          previous_step={previous_step}
          description={description}
        />
      </CardContent>
    </>
  );
}
