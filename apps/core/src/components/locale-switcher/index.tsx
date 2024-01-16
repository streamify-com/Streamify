"use client";

import clsx from "clsx";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";
import { useTransition } from "react";
import { Button, buttonVariants } from "@shared-components/ui/button";
import {
  CircleFlagsDe,
  CircleFlagsUk,
} from "@shared-components/graphics/flags";
import { Icons } from "@shared-components/graphics/icons";
import LocaleSelectionDialog from "./locale-selection-dialog";
import { Dialog, DialogTrigger } from "@shared-components/ui/dialog";
import MobileSelectionDialog from "./mobile-selection-dialog";
import { cn } from "@shared-components/lib/utils";
import IconSelectionDialog from "./icon-selection-dialog";

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
        <DialogTrigger asChild className="hidden sm:flex">
          <Button
            variant="ghostButton"
            size="avatarSize"
            className="justify-start px-4 w-fit"
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

export function LocaleChooseTitle() {
  const t = useTranslations("locale-switcher");
  const locale = useLocale();

  return (
    <>
      <Dialog>
        <DialogTrigger asChild className="hidden sm:flex">
          <Button
            variant="ghostButton"
            size="footerSize"
            className="justify-start w-fit sm:text-sm"
          >
            {t("locale", { locale })}
          </Button>
        </DialogTrigger>
        <LocaleSelectionDialog />
      </Dialog>
      <MobileSelectionDialog />
    </>
  );
}

export function LocaleChooseIconHeader() {
  const t = useTranslations("locale-switcher");
  const locale = useLocale();

  return (
    <>
      <Dialog>
        <DialogTrigger asChild className="hidden sm:flex">
          <Button
            variant="ghostButton"
            size="avatarSize"
            className="justify-end"
          >
            {getFlagIconForLocale(locale)}
          </Button>
        </DialogTrigger>
      </Dialog>
      <IconSelectionDialog />
    </>
  );
}

export function LocaleChooseIcon() {
  const locale = useLocale();

  return (
    <>
      <Dialog>
        <DialogTrigger asChild className="hidden sm:flex">
          <Button
            variant="ghostButton"
            size="iconSize"
            className="justify-center px-1 w-16 h-8 group bg-transparent sm:hover:bg-secondary-muted border border-transparent sm:hover:border-transparent"
          >
            {getFlagIconForLocale(locale)}
            <Icons.chevronDown className="ml-1 h-3 text-primary-muted sm:group-hover:text-primary group" />
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
        "relative text-primary",
        isPending && "transition-opacity [&:disabled]:opacity-30",
      )}
    >
      <p className="sr-only">{t("label")}</p>
      <select
        className={cn(
          buttonVariants({
            variant: "secondaryButton",
            size: "fixedSize",
          }),
        )}
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
