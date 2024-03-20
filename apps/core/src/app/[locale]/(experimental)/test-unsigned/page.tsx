import ShortLocaleLink from "@/components/short-locale-link";
import { LanguagePicker } from "@/components/test-component";
import { unstable_setRequestLocale } from "next-intl/server";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@shared-components/ui/link";
import { cn } from "@shared-components/lib/utils";
import { buttonVariants } from "@shared-components/ui/button";
import {
  ThemeModeIcon,
  ThemeModeSelector,
} from "@shared-components/components/theme-switcher";
import FullLocaleLink from "@/components/full-locale-link";

type Props = {
  params: { locale: string };
};

export default function Page({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const curLocale = useLocale();
  const t = useTranslations("LocaleSwitcher");
  const u = useTranslations("mode-theme");

  return (
    <div className="p-20 sm:p-20 grid grid-cols-1 gap-2 sm:flex">
      <ShortLocaleLink locale="en" href="/test" />
      <ShortLocaleLink locale="de" href="/test" />
      <FullLocaleLink locale="en" languageName="English" href="/test" />
      <FullLocaleLink locale="de" languageName="Deutsch" href="/test" />
      <LanguagePicker
        buttonContent={t("locale", { locale: curLocale })}
        href="/test"
      />
      {/* <FullLocaleName locale={undefined} /> */}
      <Link
        href="/signin"
        className={cn(
          buttonVariants({
            variant: "secondaryButton",
            size: "defaultSize",
          }),
        )}
      >
        Sign in
      </Link>
      <ThemeModeSelector
        light={u("light")}
        dark={u("dark")}
        system={u("system")}
      />
      <ThemeModeIcon />
    </div>
  );
}
