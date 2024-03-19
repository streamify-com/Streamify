"use client";

import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@shared-components/ui/card";
import { ResetPasswordStep2Form } from "@shared-components/forms/auth/_components/reset-password-form-step-2";

interface ResetPasswordStep2Props {
  title: string;
  description: string;
  password_form_label: string;
  confirmation_form_label: string;
  code_form_label: string;
  verify_code_form_label: string;
  form_button: string;
  previous_step: string;
}

export default function ResetPasswordStep2PageForm({
  title,
  description,
  password_form_label,
  confirmation_form_label,
  code_form_label,
  verify_code_form_label,
  form_button,
  previous_step,
}: ResetPasswordStep2Props) {
  return (
    <>
      <CardHeader className="space-y-1">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 mt-4">
        <ResetPasswordStep2Form
          passwordformlabel={password_form_label}
          confirmationformlabel={confirmation_form_label}
          codeformlabel={code_form_label}
          verifycodeformlabel={verify_code_form_label}
          formbutton={form_button}
          previous_step={previous_step}
        />
      </CardContent>
    </>
  );
}
