"use client";

import clsx from "clsx";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";
import { useTransition } from "react";
import { Button } from "@shared-components/ui/button";
import {
  CircleFlagsDe,
  CircleFlagsUk,
} from "@shared-components/graphics/flags";
import { Icons } from "@shared-components/graphics/icons";
import LocaleSelectionDialog from "./locale-selection-dialog";
import { Dialog, DialogTrigger } from "@shared-components/ui/dialog";
import MobileSelectionDialog from "./mobile-selection-dialog";

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
  const t = useTranslations("locale-switcher");
  const locale = useLocale();

  return (
    <>
      <Dialog>
        <DialogTrigger asChild className="hidden md:flex">
          <Button
            variant="languageButton"
            size="languageSize"
            className="md:text-sm"
          >
            {getFlagIconForLocale(locale)}
            <span className="ml-2.5">{t("locale", { locale })}</span>
          </Button>
        </DialogTrigger>
        <LocaleSelectionDialog />
      </Dialog>
      <MobileSelectionDialog />
    </>
  );
}

export function LocaleChooseIcon() {
  const locale = useLocale();

  return (
    <>
      <Dialog>
        <DialogTrigger asChild className="hidden md:flex">
          <Button
            variant="languageButton"
            size="avatarSize"
            className="justify-center px-4 w-20 h-12 md:h-9 group"
          >
            {getFlagIconForLocale(locale)}
            <Icons.chevronDown className="ml-2.5 h-4 text-standard md:group-hover:text-highlight group" />
          </Button>
        </DialogTrigger>
        <LocaleSelectionDialog />
      </Dialog>
      <MobileSelectionDialog />
    </>
  );
}

export function LocaleSwitcher() {
  const t = useTranslations("locale-switcher");
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
        className="border-separator rounded-md md:hover:border-highlight md:hover:text-highlight text-md md:text-sm h-12 w-full border bg-transparent transition-all md:h-10 md:w-48"
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
