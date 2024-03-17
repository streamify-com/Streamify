import * as React from "react";
import { currentUser } from "@clerk/nextjs";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default async function AuthLayout({ children }: AuthLayoutProps) {
  const user = await currentUser();

  // if (!user) {
  //   redirect("/");
  // }

  if (!user) return <div>Not signed in</div>;

  return <>{children}</>;
}
