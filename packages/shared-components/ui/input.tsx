import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@shared-components/lib/utils";

const inputVariants = cva(
  "inline-flex items-center justify-center rounded-md text-md font-regular transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        defaultInput:
          "bg-transparent border border-separator border md:hover:border-primary md:hover:text-primary text-primary transition-all",
      },
      size: {
        inputSize: "h-12 md:h-10 py-2 px-4 md:w-full w-full",
      },
    },
    defaultVariants: {
      variant: "defaultInput",
      size: "inputSize",
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
          inputVariants({ variant: "defaultInput", size: "inputSize" }),
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
