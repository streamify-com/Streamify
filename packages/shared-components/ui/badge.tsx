import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@shared-components/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border group px-4 py-2 sm:text-sm text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-separator focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-action text-primary sm:hover:bg-action/80",
        secondary:
          "border-transparent bg-secondary text-primary sm:hover:bg-secondary/80",
        warning:
          "border-transparent bg-negative text-background sm:hover:bg-negative/80",
        outline:
          "border-separator text-primary-muted bg-background/50 backdrop-blur-lg sm:hover:bg-background-hover sm:hover:border-primary sm:hover:text-primary",
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
