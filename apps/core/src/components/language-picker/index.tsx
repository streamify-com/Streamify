"use client";

import * as React from "react";
import { useMediaQuery } from "@shared-components/hooks/use-media-query";
import { Button } from "@shared-components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@shared-components/ui/popover";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@shared-components/ui/command";
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
import FullLocaleLink from "@/components/full-locale-link";
import { GlobeIcon } from "@shared-components/graphics/icons";

type Props = {
  href: string;
  buttonContent: string;
  title: string;
  description: string;
};

export function LanguagePicker({
  title,
  description,
  href,
  buttonContent,
}: Props) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="secondaryButton" className="w-auto justify-start">
            <GlobeIcon className="h-4 w-auto mr-3" />
            {buttonContent}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="start">
          <StatusList href={href} />
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="secondaryButton">
          <Button variant="ghostButton">
            <GlobeIcon className="h-4 w-auto mr-3" />
            {buttonContent}
          </Button>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle className="font-bold">{title}</DrawerTitle>
          <DrawerDescription>
            {description}{" "}
            <span className="underline underline-offset-4">
              {buttonContent}
            </span>
          </DrawerDescription>
        </DrawerHeader>
        <div className="mt-4">
          <StatusList href={href} />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function StatusList({ href }: { href: string }) {
  return (
    <Command>
      <CommandList>
        <CommandGroup>
          <CommandItem>
            <FullLocaleLink locale="en" languageName="English" href={href} />
          </CommandItem>
          <CommandItem>
            <FullLocaleLink locale="de" languageName="Deutsch" href={href} />
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}