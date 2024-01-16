import { type Metadata } from "next";
import SignOutPageForm from "@/components/auth/signout";

export const metadata: Metadata = {
  title: "Sign Out",
  description: "Sign out to your account",
};

export const runtime = "edge";

export default function SignOutPage() {
  return <SignOutPageForm />;
}
