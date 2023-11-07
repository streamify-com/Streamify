import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@shared-components/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center group rounded-md text-md font-regular transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primaryButton:
          "bg-primary md:hover:bg-primary-muted text-primary-inner border border-primary md:hover:border-primary-muted",
        secondaryButton:
          "bg-secondary md:hover:bg-secondary-muted text-secondary-inner md:hover:text-secondary-hover border border-separator",
        actionButton:
          "bg-action md:hover:bg-action-muted text-background border border-action md:hover:border-action-muted",
        insentiveButton:
          "bg-transparent md:hover:bg-action text-action md:hover:text-background border border-action",
        ghostButton:
          "bg-transparent md:hover:bg-secondary-muted text-secondary-inner md:hover:text-secondary-hover border border-transparent md:hover:border-separator",
        linkButton:
          "text-primary md:hover:text-action underline underline-offset-4 transition-colors",
        externalLinkButton:
          "text-link underline underline-offset-4 transition-colors",
        deleteButton:
          "bg-negative md:hover:bg-negative-muted text-background border border-negative md:hover:border-negative-muted",
        StripeButton:
          "bg-[#635BFF] md:hover:bg-[#5951e5] text-white border border-separator",
        PaypalButton:
          "bg-[#F7BE38] md:hover:bg-[#DEAB32] text-black dark:text-black border border-separator",
        VisaButton:
          "bg-white md:hover:bg-gray-200 text-black border-separator border",
        SofortButton:
          "bg-[#2E3235] md:hover:bg-gray-700 text-white border-separator border",
        ApplePayButton:
          "dark:bg-white dark:md:hover:bg-gray-200 dark:text-black dark:md:hover:bg-black dark:hover:text-white dark:hover:border-white bg-black md:hover:bg-white text-white md:hover:text-black border border-black",
        GooglePayButton:
          "bg-white md:hover:bg-gray-200 text-black border-separator border",
        KlarnaButton:
          "bg-[#FFC0CB] md:hover:bg-[#E5ACB6] text-black border border-separator",
        MastercardButton:
          "bg-[#1F2937] md:hover:bg-[#353E4B] text-white border border-separator",
        MaestroButton:
          "bg-[#013775] md:hover:bg-[#1A4B82] text-white border border-separator",
        AmazonPayButton:
          "bg-[#232F3E] md:hover:bg-[#394351] text-white border border-separator",
      },
      size: {
        defaultSize: "h-12 md:h-10 w-full md:w-auto py-2 px-4",
        fixedSize: "h-12 md:h-10 w-full md:w-48 py-2 px-4",
        headerSize: "h-12 md:h-8 w-full md:w-auto py-1 px-2 md:text-sm",
        footerSize:
          "h-12 md:h-8 w-full md:w-auto md:py-1 md:px-2 py-0 px-0 md:justify-center justify-start",
        navigationSize: "h-8",
        iconSize: "h-9 w-9",
        avatarSize: "py-1 px-2",
        menuSize: "h-auto w-full text-left",
        linkSize: "p-0",
        seeAllSize: "h-10 md:h-10 w-full md:w-auto py-2 px-4 text-right",
        paymentSize: "h-12 md:h-10 w-full md:w-48 p-2 text-left",
      },
    },
    defaultVariants: {
      variant: "primaryButton",
      size: "defaultSize",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export interface ShiningButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const ShiningButton = React.forwardRef<HTMLButtonElement, ShiningButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className="from-primary to-separator font-regular group relative inline-flex h-12 md:h-10 w-full items-center justify-center overflow-hidden rounded-md bg-gradient-to-br p-[0.05rem] md:w-48 md:hover:bg-primary"
        ref={ref}
        {...props}
      >
        <span className="bg-background md:hover:bg-background-hover flex h-full w-full items-center justify-center rounded-md">
          <p className="font-regular from-primary-muted via-primary to-primary-muted text-md inline-flex items-center justify-center bg-gradient-to-br bg-clip-text text-center text-transparent md:group-hover:text-primary">
            {children}
          </p>
        </span>
      </Comp>
    );
  },
);
ShiningButton.displayName = "ShiningButton";

export { Button, ShiningButton, buttonVariants };
