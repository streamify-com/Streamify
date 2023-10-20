import { type Metadata } from "next";
import SignOutPageForm from "@/components/form/signout-page-form";

export const metadata: Metadata = {
  title: "Sign Out",
  description: "Sign out to your account",
};

export const runtime = "edge";

export default function SignOutPage() {
  return <SignOutPageForm />;
}
