import clsx from "clsx";
import { useLocale } from "next-intl";
import { locales } from "@/config/navigation";
import { Link } from "@shared-components/ui/link";

type Props = {
  locale: (typeof locales)[number];
  languageName: string;
  href: string;
};

export default function FullLocaleLink({ href, locale, languageName }: Props) {
  const curLocale = useLocale();

  return (
    <Link
      href={href}
      locale={locale}
      className={clsx(
        "font-regular text-lg sm:text-md text-primary sm:text-primary inline-flex items-center justify-left sm:w-auto w-full h-10 sm:h-auto",
        curLocale === locale &&
          "font-regular text-primary-muted sm:text-primary-muted",
      )}
    >
      {languageName}
    </Link>
  );
}
