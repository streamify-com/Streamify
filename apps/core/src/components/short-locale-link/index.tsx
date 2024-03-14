import clsx from "clsx";
import { useLocale } from "next-intl";
import { Link } from "@shared-components/ui/navigation";
import { locales } from "@/navigation";

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
        "sm:text-primary text-primary",
        curLocale === locale &&
          "sm:text-action text-action underline underline-offset-4",
      )}
    >
      {locale.toUpperCase()}
    </Link>
  );
}
