import { Metadata } from "next";
import SignUpPageForm from "@/components/form/signup-page-form";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Sign up for an account",
};

export default function SignUpPage() {
  return <SignUpPageForm />;
}
