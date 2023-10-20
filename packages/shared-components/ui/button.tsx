import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@shared-components/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-md font-regular transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-separator disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primaryButton:
          "bg-highlight text-background border border-standard md:hover:bg-hoverground md:hover:text-highlight md:hover:border md:hover:border-highlight",
        secondaryButton:
          "group flex gap-x-2 bg-background border border-separator md:hover:bg-background md:hover:border md:hover:border-highlight md:hover:text-highlight text-standard text-md font-regular transition-all",
        actionButton:
          "bg-primary text-background border border-primary md:hover:border md:hover:bg-background md:hover:border-primary md:hover:text-primary",
        outlineButton: "bg-transparent text-primary border border-primary",
        intentionButton:
          "bg-transparent text-primary border border-primary md:border-transparent md:hover:border md:hover:border-primary md:hover:text-primary",
        menuButton:
          "hover:text-highlight bg-transparent hover:bg-hoverground border border-transparent hover:border-separator text-highlight",
        navigationButton:
          "bg-background border border-background text-standard text-md font-regular transition-all",
        closeButton:
          "bg-background text-standard border border-separator md:hover:text-highlight md:hover:border-highlight",
        ghostButton: "hover:text-highlight",
        avatarButton: "border border-separator",
        oauthButton:
          "bg-background text-standard border-separator border hover:text-highlight",
        StripeButton:
          "bg-[#635BFF] hover:bg-[#5951e5] text-white border border-separator",
        PaypalButton:
          "bg-[#F7BE38] hover:bg-[#DEAB32] text-black dark:text-black border border-separator",
        VisaButton:
          "bg-white hover:bg-gray-200 text-black border-separator border",
        ApplePayButton:
          "dark:bg-white dark:hover:bg-gray-200 dark:text-black dark:hover:bg-black dark:hover:text-white dark:hover:border-white bg-black hover:bg-white text-white hover:text-black border border-black",
        GooglePayButton:
          "bg-white hover:bg-gray-200 text-black border-separator border",
        KlarnaButton:
          "bg-[#FFC0CB] hover:bg-[#E5ACB6] text-black border border-separator",
        MastercardButton:
          "bg-[#1F2937] hover:bg-[#353E4B] text-white border border-separator",
        MaestroButton:
          "bg-[#013775] hover:bg-[#1A4B82] text-white border border-separator",
        AmazonPayButton:
          "bg-[#232F3E] hover:bg-[#394351] text-white border border-separator",
      },
      size: {
        defaultSize: "h-12 md:h-12 py-2 px-4 w-full md:w-48",
        headerSize: "h-9 py-2 px-4 text-xs sm:text-sm md:text-sm",
        navigationSize: "h-8",
        inputSize: "h-12 md:h-12 py-2 px-4 md:w-full w-full",
        iconSize: "h-8 rounded-md px-3 text-xs",
        avatarSize: "h-auto rounded-full",
        menuSize: "w-full text-left h-auto rounded-md",
        oauthSize: "h-12 w-full px-4 py-2 md:w-auto",
        seeAllSize: "md:h-12 w-full text-right py-2 px-4 md:md:w-auto",
        labelSize: "md:h-12 w-full py-2 md:md:w-auto",
        paymentSize: "h-12 md:h-12 p-2 w-full md:w-52 text-left",
        closeSize: "h-8 w-8 md:h-12 p-4 md:w-12 rounded-full",
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
        className="from-standard to-separator font-regular group relative inline-flex h-12 w-full items-center justify-center overflow-hidden rounded-md bg-gradient-to-br p-[0.05rem] md:w-48 hover:bg-highlight"
        ref={ref}
        {...props}
      >
        <span className="bg-background hover:bg-background flex h-full w-full items-center justify-center rounded-md">
          <p className="font-regular from-standard via-highlight to-standard text-md inline-flex items-center justify-center bg-gradient-to-br bg-clip-text text-center text-transparent group-hover:text-highlight">
            {children}
          </p>
        </span>
      </Comp>
    );
  },
);
ShiningButton.displayName = "ShiningButton";

export { Button, ShiningButton, buttonVariants };
