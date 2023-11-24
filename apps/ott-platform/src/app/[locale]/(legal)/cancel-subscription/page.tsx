import { Metadata } from "next";
import SigninPageForm from "@/components/auth/signin";

export const metadata: Metadata = {
  title: "Cancel subscription",
  description: "Cancel subscription",
};

export default function LegalPage() {
  return <SigninPageForm />;
}
