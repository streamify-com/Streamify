import ShortLocaleLink from "@/components/short-locale-link";
import LocaleSwitcher from "@/components/locale-switcher";
import { DrawerDialogDemo } from "@/components/test-component";
import { unstable_setRequestLocale } from "next-intl/server";
import FullLocaleName from "@/components/full-locale-name";
import { useLocale, useTranslations } from "next-intl";

type Props = {
  params: { locale: string };
};

export default function Page({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const curLocale = useLocale();
  const t = useTranslations("LocaleSwitcher");

  return (
    <div className="p-20">
      <LocaleSwitcher />
      <ShortLocaleLink locale="en" />
      <ShortLocaleLink locale="de" />
      <DrawerDialogDemo buttonContent={t("locale", { locale: curLocale })} />
      <FullLocaleName locale={undefined} />
    </div>
  );
}
