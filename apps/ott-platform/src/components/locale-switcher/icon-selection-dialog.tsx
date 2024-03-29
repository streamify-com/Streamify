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

export default function IconSelectionDialog() {
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
      <SheetTrigger asChild className="flex sm:hidden">
        <Button
          variant="ghostButton"
          size="iconSize"
          className="justify-center"
        >
          {getFlagIconForLocale(locale)}
        </Button>
      </SheetTrigger>
      <SheetContent
        title={t("label")}
        side="bottom"
        className="border-separator h-[40%] rounded-t-xl border-t text-primary-muted"
      >
        <ScrollArea className="mt-10 h-[90%] w-full border-t border-separator">
          <div className="grid gap-2 mt-4">
            {SUPPORTED_LOCALES.map((cur) => (
              <Button
                key={cur}
                disabled={isPending}
                onClick={() => handleLocaleChange(cur)}
                variant="ghostButton"
                size="defaultSize"
                className={
                  cur === locale
                    ? "justify-between sm:w-full text-active"
                    : "justify-between sm:w-full text-primary"
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
