"use client"

import * as React from "react"
import { Button, ButtonProps } from "./button"
import { CopyIcon, Icons } from "@shared-components/graphics/icons"


export function CopyButton({ value, ...props }: ButtonProps) {
  const [isCopied, setIsCopied] = React.useState(false)

  return (
    <Button
      variant="secondaryButton"
      size="iconSize"
      className="absolute right-5 top-4 z-20 h-6 w-6 px-0"
      onClick={() => {
        if (typeof window === "undefined") return
        setIsCopied(true)
        void window.navigator.clipboard.writeText(value?.toString() ?? "")
        setTimeout(() => setIsCopied(false), 2000)
      }}
      {...props}
    >
      {isCopied ? (
        <Icons.check className="h-3 w-3" aria-hidden="true" />
      ) : (
        <CopyIcon className="h-3 w-3" aria-hidden="true" />
      )}
      <span className="sr-only">
        {isCopied ? "Copied" : "Copy to clipboard"}
      </span>
    </Button>
  )
}
