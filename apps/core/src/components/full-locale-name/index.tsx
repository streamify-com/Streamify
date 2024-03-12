import clsx from "clsx";
import { useLocale, useTranslations } from "next-intl";
import { Link, locales } from "@/navigation";

type Props = {
  locale: (typeof locales)[number];
};

export default function FullLocaleName({ locale }: Props) {
  const curLocale = useLocale();
  const t = useTranslations("LocaleSwitcher");

  return (
    <p
      className={clsx(
        "font-medium sm:text-primary-muted text-primary-muted",
        curLocale === locale && "sm:text-primary text-primary",
      )}
    >
      {t("locale", { locale: curLocale })}
    </p>
  );
}
