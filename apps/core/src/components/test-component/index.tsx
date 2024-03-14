"use client";

import * as React from "react";

import { cn } from "@shared-components/lib/utils";
import { useMediaQuery } from "@shared-components/hooks/use-media-query";
import { Button } from "@shared-components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@shared-components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@shared-components/ui/drawer";
import { Input } from "@shared-components/ui/input";
import { Label } from "@shared-components/ui/label";
import ShortLocaleLink from "../short-locale-link";
import FullLocaleLink from "../full-locale-link";

type Props = {
  buttonContent: string;
};

export function DrawerDialogDemo({ buttonContent }: Props) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="primaryButton">{buttonContent}</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] border sm:border-separator">
          {/* <ProfileForm /> */}
          <ShortLocaleLink locale="en" />
          <ShortLocaleLink locale="de" />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="primaryButton">{buttonContent}</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Languages</DrawerTitle>
          <DrawerDescription>Set your daily activity goal.</DrawerDescription>
        </DrawerHeader>
        <div className="p-4 sm:p-20 grid grid-cols-1 gap-2 sm:flex">
          <FullLocaleLink locale="en" languageName="English" />
          <FullLocaleLink locale="de" languageName="Deutsch" />
        </div>
        <DrawerFooter className="pt-8">
          <DrawerClose asChild>
            <Button variant="primaryButton">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
  return (
    <form className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" defaultValue="shadcn@example.com" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="username">Username</Label>
        <Input id="username" defaultValue="@shadcn" />
      </div>
      <Button type="submit">Save changes</Button>
    </form>
  );
}
