import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@shared-components/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border group p-1 sm:text-xs text-xs font-regular transition-colors focus:outline-none focus:ring-2 focus:ring-separator focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-action text-background sm:hover:bg-action-muted",
        secondary:
          "border-transparent bg-secondary text-primary sm:hover:bg-secondary-muted",
        warning:
          "border-transparent bg-negative text-background sm:hover:bg-negative-muted",
        outline:
          "border-separator text-primary bg-background/50 backdrop-blur-lg sm:hover:bg-background-hover sm:hover:border-separator-hover",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
