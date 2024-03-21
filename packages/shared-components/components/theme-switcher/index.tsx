"use client";

import { useState, useEffect } from "react";
import {
  DarkIcon,
  LightIcon,
  SystemIcon,
} from "@shared-components/graphics/icons";
import { Tabs, TabsList, TabsTrigger } from "@shared-components/ui/tabs";
import { useTheme } from "next-themes";
import { cn } from "@shared-components/lib/utils";
import { buttonVariants } from "@shared-components/ui/button";

interface ThemeNameProps {
  light: string;
  dark: string;
  system: string;
}

export function ThemeSelect({ light, dark, system }: ThemeNameProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
      data-test-id="theme-selector"
      className={cn(
        buttonVariants({ variant: "secondaryButton" }),
        "sm:w-[160px] w-lg appearance-none",
      )}
    >
      <option value="system">{system}</option>
      {mounted && (
        <>
          <option value="dark">{dark}</option>
          <option value="light">{light}</option>
        </>
      )}
    </select>
  );
}

export function ThemeTextToggleTabs({ light, dark, system }: ThemeNameProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <Tabs
      defaultValue={resolvedTheme}
      className="w-full sm:w-fit"
      onValueChange={setTheme}
    >
      <TabsList className="grid w-full sm:w-auto grid-cols-3 gap-2">
        <TabsTrigger
          value="light"
          className={`${
            resolvedTheme === "light" ? "data-[state=active]:bg-primary" : ""
          }`}
        >
          {light}
        </TabsTrigger>
        <TabsTrigger
          value="dark"
          className={`${
            resolvedTheme === "dark" ? "data-[state=active]:bg-primary" : ""
          }`}
        >
          {dark}
        </TabsTrigger>
        <TabsTrigger
          value="system"
          className={`${
            resolvedTheme === "system" ? "data-[state=active]:bg-primary" : ""
          }`}
        >
          {system}
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

export function ThemeIconToggleTabs() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <Tabs
      defaultValue={resolvedTheme}
      className="w-full sm:w-fit"
      onValueChange={setTheme}
    >
      <TabsList className="grid w-full sm:w-auto grid-cols-3 gap-2">
        <TabsTrigger
          value="light"
          className={`${
            resolvedTheme === "light" ? "data-[state=active]:bg-primary" : ""
          }`}
        >
          <LightIcon className="h-3 w-auto" />
        </TabsTrigger>
        <TabsTrigger
          value="dark"
          className={`${
            resolvedTheme === "dark" ? "data-[state=active]:bg-primary" : ""
          }`}
        >
          <DarkIcon className="h-3 w-auto" />
        </TabsTrigger>
        <TabsTrigger
          value="system"
          className={`${
            resolvedTheme === "system" ? "data-[state=active]:bg-primary" : ""
          }`}
        >
          <SystemIcon className="h-3 w-auto" />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
