"use client";

import { Toaster as RadToaster } from "sonner";

export function Toaster() {
  return (
    <RadToaster
      position="bottom-right"
      toastOptions={{
        style: {
          background: "rgba(var(--background))",
          color: "rgba(var(--standard))",
          border: "1px solid rgba(var(--border))",
        },
      }}
    />
  );
}
