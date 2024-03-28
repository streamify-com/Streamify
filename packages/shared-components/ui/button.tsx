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
          "bg-primary sm:hover:bg-primary-muted text-primary-inner border border-primary sm:hover:border-primary-muted",
        secondaryButton:
          "bg-secondary sm:hover:bg-secondary-muted text-secondary-inner sm:hover:text-secondary-hover border border-separator",
        tertiaryButton:
          "bg-secondary sm:hover:bg-foreground text-primary sm:hover:text-primary border border-separator sm:hover:border-primary-muted",
        actionButton:
          "bg-action sm:hover:bg-action-muted text-background sm:hover:text-white border border-action sm:hover:border-action-muted",
        insentiveButton:
          "bg-transparent text-action sm:hover:underline hover:underline-offset-4 sm:hover:text-actio",
        ghostButton:
          "bg-transparent sm:hover:bg-secondary-muted text-secondary-inner sm:hover:text-secondary-hover border border-transparent sm:hover:border-separator",
        blurButton:
          "sm:hover:border-separator bg-background/75 sm:hover:bg-secondary-muted border border-transparent text-white sm:hover:text-secondary-hover backdrop-blur-xl",
        linkButton:
          "text-primary-muted sm:hover:text-primary underline underline-offset-4 transition-colors",
        highlightLinkButton:
          "text-primary sm:hover:text-action underline underline-offset-4 transition-colors",
        externalLinkButton:
          "text-link sm:hover:underline hover:underline-offset-4 transition-colors",
        deleteButton:
          "bg-negative sm:hover:bg-negative-muted text-background border border-negative sm:hover:border-negative-muted",
        StripeButton:
          "bg-[#635BFF] sm:hover:bg-[#5951e5] text-white border border-separator",
        PaypalButton:
          "bg-[#F7BE38] sm:hover:bg-[#DEAB32] text-black dark:text-black border border-separator",
        VisaButton:
          "bg-white sm:hover:bg-gray-200 text-black border-separator border",
        SofortButton:
          "bg-[#2E3235] sm:hover:bg-gray-700 text-white border-separator border",
        ApplePayButton:
          "dark:bg-white dark:sm:hover:bg-gray-200 dark:text-black dark:sm:hover:bg-black dark:hover:text-white dark:hover:border-white bg-black sm:hover:bg-white text-white sm:hover:text-black border border-black",
        GooglePayButton:
          "bg-white sm:hover:bg-gray-200 text-black border-separator border",
        KlarnaButton:
          "bg-[#FFC0CB] sm:hover:bg-[#E5ACB6] text-black border border-separator",
        MastercardButton:
          "bg-[#1F2937] sm:hover:bg-[#353E4B] text-white border border-separator",
        MaestroButton:
          "bg-[#013775] sm:hover:bg-[#1A4B82] text-white border border-separator",
        AmazonPayButton:
          "bg-[#232F3E] sm:hover:bg-[#394351] text-white border border-separator",
      },
      size: {
        defaultSize: "h-10 sm:h-10 w-full sm:w-auto py-2 px-4",
        fullSize: "h-10 sm:h-10 w-full sm:w-full py-2 px-4",
        headerSize: "h-8 sm:h-8 w-full sm:w-auto py-1 px-4 sm:text-sm",
        footerSize:
          "h-8 sm:text-sm text-sm w-full sm:w-auto sm:py-1 sm:px-2 py-0 px-0 sm:justify-center justify-start",
        navigationSize: "h-8",
        iconSize: "h-9 w-9",
        roundedSize: "h-8 w-8 rounded-full",
        avatarSize: "p-1",
        menuSize: "h-auto w-full text-left",
        linkSize: "p-0",
        seeAllSize: "h-10 sm:h-10 w-full sm:w-auto py-2 px-4 text-right",
        paymentSize: "h-12 sm:h-10 w-full sm:w-48 p-2 text-left",
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
        className="from-primary to-separator font-regular group relative inline-flex h-12 sm:h-10 w-full items-center justify-center overflow-hidden rounded-md bg-gradient-to-br p-[0.05rem] sm:w-48 sm:hover:bg-primary"
        ref={ref}
        {...props}
      >
        <span className="bg-background sm:hover:bg-background-hover flex h-full w-full items-center justify-center rounded-md">
          <p className="font-regular from-primary-muted via-primary to-primary-muted text-md inline-flex items-center justify-center bg-gradient-to-br bg-clip-text text-center text-transparent sm:group-hover:text-primary">
            {children}
          </p>
        </span>
      </Comp>
    );
  },
);
ShiningButton.displayName = "ShiningButton";

export { Button, ShiningButton, buttonVariants };
