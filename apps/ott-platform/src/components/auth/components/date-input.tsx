"use client";

import { cn } from "@shared-components/lib/utils";
import { Button, buttonVariants } from "@shared-components/ui/button";
import { Input } from "@shared-components/ui/input";
import React, { useState } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const DateInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, placeholder, ...props }) => {
    const [inputType, setInputType] = useState("text");

    const handleFocus = () => setInputType("date");
    const handleBlur = () => setInputType("text");

    return (
      <div className="relative">
        <div className="hidden sm:block">
          <Input
            placeholder={placeholder}
            type={inputType}
            onFocus={handleFocus}
            onBlur={handleBlur}
            id="date"
            className={cn(
              buttonVariants({
                variant: "secondaryButton",
                size: "defaultSize",
              }),
            )}
            {...props}
          />
        </div>
        <div className="block sm:hidden">
          <Input
            placeholder={placeholder}
            type="date"
            className={cn(
              buttonVariants({
                variant: "secondaryButton",
                size: "defaultSize",
              }),
              "text-right",
            )}
            {...props}
          />
          <Button
            variant="ghostButton"
            size="linkSize"
            className="absolute right-0 top-0 h-full px-3"
          >
            {placeholder}
          </Button>
        </div>
      </div>
    );
  },
);

DateInput.displayName = "DateInput";

export { DateInput };
