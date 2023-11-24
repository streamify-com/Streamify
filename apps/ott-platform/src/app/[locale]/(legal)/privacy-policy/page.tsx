import { Metadata } from "next";
import SigninPageForm from "@/components/auth/signin";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy",
};

export default function LegalPage() {
  return <SigninPageForm />;
}
