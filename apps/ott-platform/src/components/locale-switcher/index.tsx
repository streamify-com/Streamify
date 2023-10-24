"use client";

import clsx from "clsx";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";
import { useTransition } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@shared-components/ui/alert-dialog";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@shared-components/ui/sheet";
import { ScrollArea } from "@shared-components/ui/scroll-area";
import { Button } from "@shared-components/ui/button";
import {
  CircleFlagsDe,
  CircleFlagsUk,
} from "@shared-components/graphics/flags";

const SUPPORTED_LOCALES = ["en", "de"];

function getFlagIconForLocale(locale: string) {
  switch (locale) {
    case "en":
      return <CircleFlagsUk />;
    case "de":
      return <CircleFlagsDe />;
    default:
      return null;
  }
}

export function LocaleChoose() {
  const t = useTranslations("LocaleSwitcher");
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function handleLocaleChange(newLocale: string) {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  }

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild className="hidden md:flex">
          <Button variant="languageButton" size="languageSize">
            {getFlagIconForLocale(locale)}
            <span className="ml-2.5">{t("locale", { locale })}</span>
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t("label")}</AlertDialogTitle>
            <AlertDialogDescription>
              <div className="grid grid-cols-1 gap-2">
                {SUPPORTED_LOCALES.map((cur) => (
                  <Button
                    key={cur}
                    disabled={isPending}
                    onClick={() => handleLocaleChange(cur)}
                    variant="languageButton"
                    size="languageSize"
                  >
                    {getFlagIconForLocale(cur)}
                    <span className="ml-2.5">
                      {t("locale", { locale: cur })}
                    </span>
                  </Button>
                ))}
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <Sheet>
        <SheetTrigger asChild className="flex md:hidden">
          <Button
            variant="languageButton"
            size="languageSize"
            className="justify-center"
          >
            {getFlagIconForLocale(locale)}
            <span className="ml-2.5">{t("locale", { locale })}</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          title={t("label")}
          side="bottom"
          className="border-separator h-[50%] rounded-t-lg border-t text-standard"
        >
          <ScrollArea className="mt-10 h-[90%] w-full">
            {/* <SheetHeader className="mt-2">
              <SheetTitle className="text-highlight">Edit profile</SheetTitle>
              <SheetDescription className="text-highlight">
                Make changes to your profile here. Click save when you&apos;re
                done.
              </SheetDescription>
            </SheetHeader> */}
            <div className="grid gap-4">
              {SUPPORTED_LOCALES.map((cur) => (
                <Button
                  key={cur}
                  disabled={isPending}
                  onClick={() => handleLocaleChange(cur)}
                  variant="languageButton"
                  size="languageSize"
                >
                  {getFlagIconForLocale(cur)}
                  <span className="ml-3">{t("locale", { locale: cur })}</span>
                </Button>
              ))}
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </>
  );
}

export function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function handleLocaleChange(newLocale: string) {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  }

  return (
    <label
      className={clsx(
        "relative text-standard",
        isPending && "transition-opacity [&:disabled]:opacity-30",
      )}
    >
      <p className="sr-only">{t("label")}</p>
      <select
        className="border-separator rounded-md hover:border-highlight hover:text-highlight text-standard h-12 w-full border bg-transparent px-4 py-2 transition-all hover:border md:h-12 md:w-48"
        defaultValue={locale}
        disabled={isPending}
        onChange={(e) => handleLocaleChange(e.target.value)}
      >
        {SUPPORTED_LOCALES.map((cur) => (
          <option key={cur} value={cur}>
            {t("locale", { locale: cur })}
          </option>
        ))}
      </select>
    </label>
  );
}
