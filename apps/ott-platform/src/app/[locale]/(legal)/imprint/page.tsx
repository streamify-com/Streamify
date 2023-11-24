import { Metadata } from "next";
import SigninPageForm from "@/components/auth/signin";

export const metadata: Metadata = {
  title: "Imprint",
  description: "Imprint",
};

export default function LegalPage() {
  return <SigninPageForm />;
}
