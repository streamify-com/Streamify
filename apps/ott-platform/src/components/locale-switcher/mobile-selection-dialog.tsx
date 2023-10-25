import { Button } from "@shared-components/ui/button";
import {
  CircleFlagsDe,
  CircleFlagsUk,
} from "@shared-components/graphics/flags";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";
import { useTransition } from "react";
import { Sheet, SheetTrigger, SheetContent } from "@shared-components/ui/sheet";
import { ScrollArea } from "@shared-components/ui/scroll-area";
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

export default function MobileSelectionDialog() {
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
    <Sheet>
      <SheetTrigger asChild className="flex md:hidden">
        <Button
          variant="languageButton"
          size="languageSize"
          className="justify-center"
        >
          {getFlagIconForLocale(locale)}
          <span className="ml-2.5">{t("locale", { locale })}</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        title={t("label")}
        side="bottom"
        className="border-separator h-[65%] rounded-t-lg border-t text-standard"
      >
        <ScrollArea className="mt-10 h-[90%] w-full border-t border-separator">
          <div className="grid gap-4 mt-4">
            {SUPPORTED_LOCALES.map((cur) => (
              <Button
                key={cur}
                disabled={isPending}
                onClick={() => handleLocaleChange(cur)}
                variant="languageButton"
                size="languageSize"
                className={
                  cur === locale
                    ? "justify-between md:w-full text-standard"
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
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
