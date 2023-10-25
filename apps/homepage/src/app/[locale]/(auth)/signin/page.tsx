import { Metadata } from "next";
import SigninPageForm from "@/components/form/signin-page-form";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your account",
};

export default function SigninPage() {
  return <SigninPageForm />;
}
