import { Metadata } from "next";
import SigninPageForm from "@/forms/auth/signin";
import { unstable_setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your account",
};

type Props = {
  params: { locale: string };
};

export default function Page({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  return <SigninPageForm />;
}
