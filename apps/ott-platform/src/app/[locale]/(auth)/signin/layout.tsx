import * as React from "react";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

interface AuthLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function AuthLayout({
  children,
  params: { locale },
}: AuthLayoutProps) {
  const user = await currentUser();

  if (user) {
    redirect(`/${locale}/`);
  }

  return <>{children}</>;
}
