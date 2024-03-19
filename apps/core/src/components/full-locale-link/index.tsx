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
        "font-regular text-lg sm:text-md text-primary sm:text-primary inline-flex items-center justify-center sm:w-auto w-full",
        curLocale === locale &&
          "font-regular text-primary-muted sm:text-primary-muted sm:underline sm:underline-offset-4 underline underline-offset-4",
      )}
    >
      {languageName}
    </Link>
  );
}
