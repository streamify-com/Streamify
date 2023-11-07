import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@shared-components/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border group px-4 py-1 md:text-sm text-xs font-regular transition-colors focus:outline-none focus:ring-2 focus:ring-separator focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-action text-primary md:hover:bg-action/80",
        secondary:
          "border-transparent bg-secondary text-primary md:hover:bg-secondary/80",
        warning:
          "border-transparent bg-negative text-background md:hover:bg-negative/80",
        outline:
          "border-separator text-primary-muted md:hover:text-primary text-primary bg-background/50 backdrop-blur-lg md:hover:bg-background-hover",
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
