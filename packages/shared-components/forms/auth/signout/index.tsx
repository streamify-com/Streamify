"use client";

import { LogOutButtons } from "@shared-components/forms/auth/_components/logout-buttons";
import { SignOutForm } from "@shared-components/forms/auth/_components/signout-form";
import { CardContent, CardHeader } from "@shared-components/ui/card";

interface SignOutFormProps {
  title: string;
  description: string;
  cancelbutton: string;
}

export default function SignOutPageForm({
  title,
  description,
  cancelbutton,
}: SignOutFormProps) {
  return (
    <>
      <CardHeader className="space-y-1">
        <SignOutForm
          title={title}
          description={description}
          size="sm"
          className="text-center sm:text-left"
        />
      </CardHeader>
      <CardContent className="grid gap-4 mt-4">
        <LogOutButtons formbutton={title} cancelbutton={cancelbutton} />
      </CardContent>
    </>
  );
}
