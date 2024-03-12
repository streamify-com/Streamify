import clsx from "clsx";
import { useLocale } from "next-intl";
import { Link, locales } from "@/navigation";

type Props = {
  locale: (typeof locales)[number];
};

export default function ShortLocaleLink({ locale }: Props) {
  const curLocale = useLocale();

  return (
    <Link
      href="/"
      locale={locale}
      className={clsx(
        "font-medium text-primary-muted",
        curLocale === locale && "sm:text-primary",
      )}
    >
      {locale.toUpperCase()}
    </Link>
  );
}
