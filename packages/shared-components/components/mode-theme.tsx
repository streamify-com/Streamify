"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";
import {
  DarkIcon,
  LightIcon,
  SystemIcon,
} from "@shared-components/graphics/icons";
import { Tabs, TabsList, TabsTrigger } from "@shared-components/ui/tabs";

export function ModeSelection() {
  const { setTheme, resolvedTheme } = useTheme();

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTheme = event.target.value;
    setTheme(selectedTheme);
  };

  return (
    <div>
      <select
        id="selectTheme"
        name="Theme selector"
        className="border-separator rounded-md md:hover:border-highlight md:hover:text-highlight text-standard h-12 w-full border bg-transparent px-4 py-2 transition-all md:h-12 md:w-48"
        value={resolvedTheme}
        onChange={handleThemeChange}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [enabled, setEnabled] = useState(resolvedTheme === "light");

  useEffect(() => {
    if (enabled) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [enabled, setTheme]);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={classNames(
        enabled ? "bg-background" : "bg-background",
        "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-background ring-1 ring-separator transition-colors duration-200 ease-in-out",
      )}
    >
      <span
        className={classNames(
          enabled ? "translate-x-5" : "translate-x-0",
          "bg-standard pointer-events-none relative inline-block h-5 w-5 transform rounded-full ring-0 transition duration-200 ease-in-out",
        )}
      >
        <span
          className={classNames(
            enabled
              ? "opacity-0 duration-100 ease-out"
              : "opacity-100 duration-200 ease-in",
            "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity",
          )}
          aria-hidden="true"
        >
          <LightIcon className="text-background h-3 w-3" />
        </span>
        <span
          className={classNames(
            enabled
              ? "opacity-100 duration-200 ease-in"
              : "opacity-0 duration-100 ease-out",
            "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity",
          )}
          aria-hidden="true"
        >
          <DarkIcon className="text-background h-3 w-3" />
        </span>
      </span>
    </Switch>
  );
}

export function ThemeModeSelector() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system",
  );
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const options = [
    {
      value: "light",
      text: "Light",
    },
    {
      value: "dark",
      text: "Dark",
    },
    {
      value: "system",
      text: "System",
    },
  ];

  function onWindowMatch() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }
  onWindowMatch();

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
  }, [element.classList, onWindowMatch, theme]);

  darkQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  });

  return (
    <Tabs defaultValue="system" className="border-standard w-full md:w-48">
      <TabsList className="grid w-full grid-cols-3 gap-2">
        {options?.map((opt) => (
          <TabsTrigger
            key={opt.text}
            onClick={() => setTheme(opt.value)}
            value={opt.value}
            className="data-[state=active]:bg-standard text-sm md:text-xs"
          >
            {opt.text}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}

export function ThemeModeIcon() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system",
  );
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const options = [
    {
      value: "light",
      text: "System",
      icon: <LightIcon className="h-4 w-auto" />,
    },
    {
      value: "dark",
      text: "System",
      icon: <DarkIcon className="h-4 w-auto" />,
    },
    {
      value: "system",
      text: "System",
      icon: <SystemIcon className="h-4 w-auto" />,
    },
  ];

  function onWindowMatch() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }
  onWindowMatch();

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
  }, [element.classList, onWindowMatch, theme]);

  darkQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  });

  return (
    <Tabs defaultValue="system" className="w-full md:w-28 rounded-full">
      <TabsList className="grid w-full grid-cols-3 gap-2">
        {options?.map((opt) => (
          <TabsTrigger
            key={opt.text}
            onClick={() => setTheme(opt.value)}
            value={opt.value}
            className="data-[state=active]:bg-standard text-sm md:text-xs"
          >
            {opt.icon}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
