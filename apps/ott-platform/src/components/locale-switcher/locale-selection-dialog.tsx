import { Button } from "@shared-components/ui/button";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@shared-components/ui/dialog";
import {
  CircleFlagsDe,
  CircleFlagsUk,
} from "@shared-components/graphics/flags";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";
import { useTransition } from "react";
import { Icons } from "@shared-components/graphics/icons";

const SUPPORTED_LOCALES = ["en", "de"];

function getFlagIconForLocale(locale: string) {
  switch (locale) {
    case "en":
      return <CircleFlagsUk />;
    case "de":
      return <CircleFlagsDe />;
    default:
      return null;
  }
}

export default function LocaleSelectionDialog() {
  const t = useTranslations("locale-switcher");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  function handleLocaleChange(newLocale: string) {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  }

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>{t("label")}</DialogTitle>
      </DialogHeader>
      <div className="grid grid-cols-1 gap-2 mt-4">
        {SUPPORTED_LOCALES.map((cur) => (
          <Button
            key={cur}
            disabled={isPending}
            onClick={() => handleLocaleChange(cur)}
            variant="languageButton"
            size="languageSize"
            className={
              cur === locale
                ? "justify-between md:w-full text-primary"
                : "justify-between md:w-full text-highlight"
            }
          >
            <p className="flex items-center">
              {getFlagIconForLocale(cur)}
              <span className="ml-3">{t("locale", { locale: cur })}</span>
            </p>
            {cur === locale && <Icons.check className="ml-2 h-4" />}
          </Button>
        ))}
      </div>
    </DialogContent>
  );
}
