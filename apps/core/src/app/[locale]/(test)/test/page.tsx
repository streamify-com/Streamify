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
import { getTranslations } from "next-intl/server";
import { ComboBoxResponsive } from "@/components/test-1";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "verify" });

  return {
    title: t("title"),
  };
}

export default function Page({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const curLocale = useLocale();
  const t = useTranslations("LocaleSwitcher");
  const u = useTranslations("mode-theme");
  const v = useTranslations("signin");
  const w = useTranslations("newsletter");

  return (
    <>
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
      <ComboBoxResponsive
        buttonContent={t("locale", { locale: curLocale })}
        href="/test"
      />
    </>
  );
}
