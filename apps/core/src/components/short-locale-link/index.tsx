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
        "p-1 hover:sm:bg-foreground",
        curLocale === locale && "border border-primary rounded-md",
      )}
    >
      {locale.toUpperCase()}
    </Link>
  );
}
