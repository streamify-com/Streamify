"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { SignOutButton } from "@clerk/nextjs";
import useMounted from "@shared-components/hooks/use-mounted";
import { Button } from "@shared-components/ui/button";
import { Icons } from "@shared-components/graphics/icons";

interface LogOutButtonsProps {
  formbutton: string;
  cancelbutton: string;
}

export function LogOutButtons({
  formbutton,
  cancelbutton,
}: LogOutButtonsProps) {
  const router = useRouter();
  const mounted = useMounted();
  const [isPending, startTransition] = React.useTransition();

  return (
    <div className="flex w-full flex-col items-center gap-2">
      <SignOutButton
        signOutCallback={() =>
          startTransition(() => {
            router.push(`${window.location.origin}/?redirect=false`);
          })
        }
      >
        <Button
          aria-label="Log out"
          size="fixedSize"
          className="bg-primary w-full sm:w-full"
          disabled={isPending}
        >
          {isPending && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
          {formbutton}
        </Button>
      </SignOutButton>
      <Button
        aria-label="Go back to the previous page"
        variant="secondaryButton"
        size="fixedSize"
        className="w-full sm:w-full"
        onClick={() => router.back()}
        disabled={isPending}
      >
        {cancelbutton}
      </Button>
    </div>
  );
}
