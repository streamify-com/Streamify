import { type Metadata } from "next";
import ResetPasswordStep2PageForm from "@/components/form/reset-password-step-2-page-form";

export const metadata: Metadata = {
  title: "Reset Password",
  description: "Choose a new password and paste the code",
};

export default function ResetPasswordStep2Page() {
  return <ResetPasswordStep2PageForm />;
}
