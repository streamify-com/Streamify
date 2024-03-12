import clsx from "clsx";
import { useLocale, useTranslations } from "next-intl";
import { Link, locales } from "@/navigation";

type Props = {
  locale: (typeof locales)[number];
};

export default function FullLocaleLink({ locale }: Props) {
  const curLocale = useLocale();
  const t = useTranslations("LocaleSwitcher");

  return (
    <Link
      href="/"
      locale={locale}
      className={clsx(
        "font-medium text-primary-muted",
        curLocale === locale && "sm:text-primary",
      )}
    >
      {t("locale", { locale: curLocale })}
    </Link>
  );
}
