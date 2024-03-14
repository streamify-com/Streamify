import clsx from "clsx";
import { useLocale } from "next-intl";
import { Link } from "@shared-components/ui/navigation";
import { locales } from "@/navigation";
import { buttonVariants } from "@shared-components/ui/button";
import { cn } from "@shared-components/lib/utils";

type Props = {
  locale: (typeof locales)[number];
  languageName: string;
};

export default function FullLocaleLink({ locale, languageName }: Props) {
  const curLocale = useLocale();

  return (
    <Link
      href="/"
      locale={locale}
      className={clsx(
        "font-regular text-primary sm:text-primary",
        curLocale === locale &&
          "text-action sm:text-action underline underline-offset-4",
      )}
    >
      {languageName}
    </Link>
  );
}
