import { Metadata } from "next";
import SigninPageForm from "@/components/auth/signin";

export const metadata: Metadata = {
  title: "Terms of Services",
  description: "Terms of Services",
};

export default function LegalPage() {
  return <SigninPageForm />;
}
