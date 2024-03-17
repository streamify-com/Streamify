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
        "font-regular text-primary-muted sm:text-primary inline-flex items-center justify-center h-10 sm:w-auto border border-separator sm:border-transparent rounded-md",
        curLocale === locale &&
          "font-regular text-primary sm:text-primary sm:underline sm:underline-offset-4 bg-background sm:bg-transparent border-primary-muted",
      )}
    >
      {languageName}
    </Link>
  );
}
