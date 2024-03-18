"use client";

import { Toaster as RadToaster } from "sonner";

export function Toaster() {
  return (
    <RadToaster
      position="bottom-right"
      toastOptions={{
        style: {
          background: "rgba(var(--action))",
          color: "rgba(var(--background))",
          border: "1px solid rgba(var(--separator))",
        },
      }}
    />
  );
}
