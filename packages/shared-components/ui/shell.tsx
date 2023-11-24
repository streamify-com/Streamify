import * as React from "react";
import { cn } from "@shared-components/lib/utils";
import { cva, type VariantProps } from "class-variance-authority"

interface ShellProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode;
  layout?: "default" | "dashboard" | "auth";
}

const shellVariants = cva("grid items-center gap-8 pb-8 pt-6 md:py-8", {
  variants: {
    variant: {
      default: "container",
      sidebar: "",
      centered: "container flex h-[100dvh] max-w-2xl flex-col justify-center",
      markdown: "container max-w-3xl py-8 md:py-10 lg:py-10",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

function Shell({
  children,
  layout = "default",
  className,
  ...props
}: ShellProps) {
  return (
    <section
      className={cn(
        "z-20 w-full",
        layout === "default" && "sm:absolute",
        layout === "auth" &&
          "max-w-xl sm:absolute sm:right-36 sm:w-[30rem] sm:items-center sm:py-8",
        layout === "dashboard" && "grid items-center gap-8 pb-8 pt-6 sm:py-8",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}

export { Shell, shellVariants }