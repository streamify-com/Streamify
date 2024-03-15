import * as React from "react";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="p-12 z-10 bg-background rounded-md border-separator border">
      {children}
    </div>
  );
}
