"use client";

import { cn } from "@shared-components/lib/utils";
import { buttonVariants } from "@shared-components/ui/button";
import { Input } from "@shared-components/ui/input";
import React, { useState, useEffect } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const DateInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, placeholder, ...props }, ref) => {
    // Function to check if the device is mobile
    const isMobileDevice = () => {
      return (
        typeof window.orientation !== "undefined" ||
        navigator.userAgent.indexOf("IEMobile") !== -1
      );
    };

    // Set initial input type based on device
    const initialInputType = isMobileDevice() ? "date" : "text";
    const [inputType, setInputType] = useState(initialInputType);

    const handleFocus = () => setInputType("date");
    const handleBlur = () =>
      isMobileDevice() ? setInputType("date") : setInputType("text");

    return (
      <div className="relative">
        <Input
          placeholder={placeholder}
          type={inputType}
          onFocus={handleFocus}
          onBlur={handleBlur}
          id="date"
          ref={ref}
          className={cn(
            buttonVariants({
              variant: "secondaryButton",
              size: "defaultSize",
            }),
          )}
          {...props}
        />
      </div>
    );
  },
);

DateInput.displayName = "DateInput";

export { DateInput };
