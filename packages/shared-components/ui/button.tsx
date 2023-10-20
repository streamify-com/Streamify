import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@shared-components/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center group rounded-md text-md font-regular transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-separator disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primaryButton:
          "bg-highlight text-background border border-standard md:hover:bg-hoverground md:hover:text-highlight md:hover:border md:hover:border-highlight",
        secondaryButton:
          "bg-background border border-separator md:hover:bg-hoverground md:hover:border md:hover:border-highlight md:hover:text-highlight text-standard",
        actionButton:
          "bg-primary text-background border border-primary md:hover:border md:hover:bg-background md:hover:border-primary md:hover:text-primary",
        outlineButton: "bg-transparent text-primary border border-primary",
        intentionButton:
          "bg-transparent text-primary border border-primary md:border-transparent md:hover:border md:hover:border-primary md:hover:text-primary",
        menuButton:
          "hover:text-highlight bg-transparent md:hover:bg-hoverground border border-transparent md:hover:border-separator text-highlight",
        navigationButton: "bg-transparent transition-all",
        closeButton:
          "bg-background md:hover:bg-hoverground text-standard border border-separator md:hover:text-highlight md:hover:border-highlight items-center justify-center transition duration-100",
        ghostButton: "text-md md:text-2xl font-bold text-white",
        leafletButton: "text-standard font-bold text-md",
        avatarButton:
          "md:hover:bg-hoverground border border-transparent md:hover:border-separator",
        oauthButton:
          "bg-background text-standard text-sm border-separator border md:hover:text-background md:hover:bg-highlight md:hover:border-highlight",
        linkButton:
          "text-standard md:hover:text-highlight underline underline-offset-4 transition-colors",
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
        defaultSize: "h-12 py-2 px-4 w-full md:w-48",
        headerSize: "h-12 md:h-9 py-2 w-full sm:w-fit px-4 text-md sm:text-sm",
        navigationSize: "h-8",
        iconSize: "h-8 rounded-md px-3 text-xs",
        avatarSize: "py-1 px-2",
        menuSize: "w-full text-left h-auto rounded-md",
        leafletSize: "h-7 w-16 rounded-md",
        oauthSize: "h-12 md:h-10 w-full px-2 py-1 md:w-auto",
        linkSize: "px-0 py-0",
        seeAllSize: "md:h-12 w-full text-right py-2 px-4 md:w-auto",
        labelSize: "md:h-12 w-full py-2 md:w-auto",
        paymentSize: "h-12 p-2 w-full md:w-52 text-left",
        closeSize: "h-8 w-8 p-1 rounded-full",
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
