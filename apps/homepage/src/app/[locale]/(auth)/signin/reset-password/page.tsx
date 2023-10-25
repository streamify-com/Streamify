import { type Metadata } from "next";
import ResetPasswordPageForm from "@/components/form/reset-password-page-form";

export const metadata: Metadata = {
  title: "Reset Password",
  description: "Enter your email to reset your password",
};

export default function ResetPasswordPage() {
  return <ResetPasswordPageForm />;
}
