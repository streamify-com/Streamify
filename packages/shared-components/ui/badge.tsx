import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@shared-components/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-4 py-1 md:text-sm text-xs font-regular transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-standard md:hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-standard md:hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground md:hover:bg-destructive/80",
        outline:
          "border-separator group text-standard md:hover:text-primary bg-background/50 backdrop-blur-lg md:hover:bg-hoverground md:hover:border-highlight",
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
