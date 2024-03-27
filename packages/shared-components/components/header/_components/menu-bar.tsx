"use client";

import * as React from "react";
import { Button } from "@shared-components/ui/button";
import { useTranslations } from "next-intl";
import {
  ThemeTextToggleTabs,
  ThemeIconToggleTabs,
} from "@shared-components/components/theme-switcher";
import { Icons, MenuIcon } from "@shared-components/graphics/icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@shared-components/ui/dialog";

export default function MenuBar() {
  const t = useTranslations("header-homepage");
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghostButton" size="iconSize" className="sm:h-8 sm:w-8">
          <MenuIcon className="h-5 w-5 text-primary-muted" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[85%]">
        <DialogHeader>
          <DialogTitle className="text-xl">Menu</DialogTitle>
          {/* <DialogDescription>
            Make changes to your profile here. Click save when you are done.
          </DialogDescription> */}
        </DialogHeader>
        <div className="grid gap-4 py-4 items-center">
          <div className="grid grid-cols-3 items-center justify-between gap-10">
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function Square() {
  return (
    <div className="h-[20vh] bg-foreground sm:hover:bg-primary border border-separator rounded-md sm:hover:border-primary transition-colors delay-100 duration-200 ease-in-out"></div>
  );
}
