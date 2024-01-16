import { type Metadata } from "next";
import VerifyEmailPageForm from "@/components/auth/verify";

export const metadata: Metadata = {
  title: "Verify Email",
  description: "Verify your email address to continue with your sign up",
};

export default async function VerifyEmailPage() {
  return <VerifyEmailPageForm />;
}
