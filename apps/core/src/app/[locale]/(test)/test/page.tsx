import { LanguagePicker } from "@/components/test-component";
import { unstable_setRequestLocale } from "next-intl/server";
import { useLocale, useTranslations } from "next-intl";
import {
  ThemeModeIcon,
  ThemeModeSelector,
} from "@shared-components/components/theme-switcher";
import ShortLocaleLink from "@/components/short-locale-link";
import FullLocaleLink from "@/components/full-locale-link";
import { Link } from "@shared-components/ui/link";
import { Calendar } from "@shared-components/ui/calendar";
import { buttonVariants } from "@shared-components/ui/button";
import { cn } from "@shared-components/lib/utils";
import Newsletter from "@shared-components/forms/email/newsletter";

type Props = {
  params: { locale: string };
};

export default function Page({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const curLocale = useLocale();
  const t = useTranslations("LocaleSwitcher");
  const u = useTranslations("mode-theme");
  const v = useTranslations("signin");
  const w = useTranslations("newsletter");

  return (
    <div className="p-6 sm:p-20 grid grid-cols-1 gap-2 sm:flex z-50">
      <div className="font-special text-action">Tin Votan</div>
      <ShortLocaleLink locale="en" href="/test" />
      <ShortLocaleLink locale="de" href="/test" />
      <FullLocaleLink locale="en" languageName="English" href="/test" />
      <FullLocaleLink locale="de" languageName="Deutsch" href="/test" />
      <LanguagePicker
        buttonContent={t("locale", { locale: curLocale })}
        href="/test"
      />
      {/* <FullLocaleName locale={undefined} /> */}
      <ThemeModeSelector
        light={u("light")}
        dark={u("dark")}
        system={u("system")}
      />
      <ThemeModeIcon />
      <Link
        aria-label="Reset password"
        href="/signin"
        className={cn(
          buttonVariants({
            variant: "primaryButton",
            size: "defaultSize",
          }),
          "sm:text-sm",
        )}
      >
        {v("signin")}
      </Link>
      {/* <Calendar /> */}
      <Newsletter
        notification={w("notification")}
        placeholder={w("placeholder")}
        newsletterbutton={w("newsletterbutton")}
      />
    </div>
  );
}
