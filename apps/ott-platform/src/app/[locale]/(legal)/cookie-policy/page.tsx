import { Metadata } from "next";
import SigninPageForm from "@/components/auth/signin";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie Policy",
};

export default function LegalPage() {
  return <SigninPageForm />;
}
