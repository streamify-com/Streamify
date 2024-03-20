import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@shared-components/lib/utils";

const inputVariants = cva(
  "inline-flex items-center justify-center rounded-md text-md font-regular transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        defaultInput:
          "bg-transparent sm:hover:bg-secondary-muted border border-separator border sm:hover:border-primary sm:hover:placeholder:text-primary placeholder:text-primary-muted sm:hover:text-primary text-primary-muted transition-all",
      },
      size: {
        defaultInputSize: "h-10 sm:h-10 py-2 px-4 sm:w-full w-full",
      },
    },
    defaultVariants: {
      variant: "defaultInput",
      size: "defaultInputSize",
    },
  },
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          inputVariants({ variant: "defaultInput", size: "defaultInputSize" }),
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input, inputVariants };
