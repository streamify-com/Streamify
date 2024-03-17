import clsx from "clsx";
import { useLocale } from "next-intl";
import { locales } from "@/config/navigation";
import { Link } from "@shared-components/ui/link";

type Props = {
  locale: (typeof locales)[number];
  href: string;
};

export default function ShortLocaleLink({ href, locale }: Props) {
  const curLocale = useLocale();

  return (
    <Link
      href={href}
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
