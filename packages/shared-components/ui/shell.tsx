import * as React from "react";
import { cn } from "@shared-components/lib/utils";

interface ShellProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode;
  layout?: "default" | "dashboard" | "auth";
}

export function Shell({
  children,
  layout = "default",
  className,
  ...props
}: ShellProps) {
  return (
    <section
      className={cn(
        "z-20 w-full",
        layout === "default" && "md:absolute",
        layout === "auth" &&
          "max-w-xl md:absolute md:right-36 md:w-[30rem] md:items-center md:py-8",
        layout === "dashboard" && "grid items-center gap-8 pb-8 pt-6 md:py-8",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
