import { type Metadata } from "next";
import ResetPasswordPageForm from "@/components/auth/reset-password";

export const metadata: Metadata = {
  title: "Reset Password",
  description: "Enter your email to reset your password",
};

export default function ResetPasswordPage() {
  return <ResetPasswordPageForm />;
}
