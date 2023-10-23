"use client";

import * as React from "react";

import { cn } from "@shared-components/lib/utils";
import { Button } from "@shared-components/ui/button";
import { Input, type InputProps } from "@shared-components/ui/input";
import { Icons } from "@shared-components/graphics/icons";

const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
      <div className="relative">
        <Input
          type={showPassword ? "text" : "password"}
          className={cn("pr-10", className)}
          ref={ref}
          {...props}
        />
        <Button
          type="button"
          variant="ghostButton"
          size="iconSize"
          className="absolute right-0 top-0 h-full px-3 py-2"
          onClick={() => setShowPassword((prev) => !prev)}
          disabled={props.value === "" || props.disabled}
        >
          {showPassword ? (
            <Icons.hide className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Icons.view className="h-4 w-4" aria-hidden="true" />
          )}
          <span className="sr-only">
            {showPassword ? "Hide password" : "Show password"}
          </span>
        </Button>
      </div>
    );
  },
);
PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
