import { Metadata } from "next";
import SignUpPageForm from "@/components/auth/signup";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Sign up for an account",
};

export default function SignUpPage() {
  return <SignUpPageForm />;
}
