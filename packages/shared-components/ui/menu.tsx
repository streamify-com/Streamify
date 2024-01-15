"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@shared-components/lib/utils";
import { Icons } from "@shared-components/graphics/icons";

const Menu = SheetPrimitive.Root;

const MenuTrigger = SheetPrimitive.Trigger;

const MenuClose = SheetPrimitive.Close;

const MenuPortal = ({ ...props }: SheetPrimitive.DialogPortalProps) => (
  <SheetPrimitive.Portal {...props} />
);
MenuPortal.displayName = SheetPrimitive.Portal.displayName;

const MenuOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-background/80 backdrop-blur-lg",
      className,
    )}
    {...props}
    ref={ref}
  />
));
MenuOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b border-separator data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-y border-separator data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 border-x border-separator data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-x-0 top-0 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  },
);

interface MenuContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const MenuContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  MenuContentProps
>(({ side = "right", className, children, title, ...props }, ref) => (
  <MenuPortal>
    <MenuOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      {children}
      <div className="absolute left-8 top-5 block sm:hidden">
        <span className="text-primary">{title}</span>
      </div>
      <SheetPrimitive.Close className="ring-offset-background focus:ring-separator data-[state=open]:bg-primary-muted absolute right-8 top-4 rounded-sm opacity-70 transition-opacity sm:hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none">
        <button className="active:bg-background-hover flex h-8 w-8 items-center justify-center rounded-full border-separator border bg-foreground">
          <Icons.close className="h-4 w-4" />
        </button>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </MenuPortal>
));
MenuContent.displayName = SheetPrimitive.Content.displayName;

const MenuHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className,
    )}
    {...props}
  />
);
MenuHeader.displayName = "MenuHeader";

const MenuFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col gap-4 sm:flex-row sm:justify-end", className)}
    {...props}
  />
);
MenuFooter.displayName = "MenuFooter";

const MenuTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("text-primary text-lg", className)}
    {...props}
  />
));
MenuTitle.displayName = SheetPrimitive.Title.displayName;

const MenuDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("text-primary text-sm", className)}
    {...props}
  />
));
MenuDescription.displayName = SheetPrimitive.Description.displayName;

export {
  Menu,
  MenuPortal,
  MenuOverlay,
  MenuTrigger,
  MenuClose,
  MenuContent,
  MenuHeader,
  MenuFooter,
  MenuTitle,
  MenuDescription,
};
