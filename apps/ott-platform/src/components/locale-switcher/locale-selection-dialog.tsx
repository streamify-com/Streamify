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
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";
import { useTransition } from "react";

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

  function handleLocaleChange(newLocale: string) {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  }

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>{t("label")}</DialogTitle>
        {/* <DialogDescription>
            Make changes to your profi
          </DialogDescription> */}
      </DialogHeader>
      <div className="grid grid-cols-1 gap-2">
        {SUPPORTED_LOCALES.map((cur) => (
          <Button
            key={cur}
            disabled={isPending}
            onClick={() => handleLocaleChange(cur)}
            variant="languageButton"
            size="languageSize"
          >
            {getFlagIconForLocale(cur)}
            <span className="ml-2.5">{t("locale", { locale: cur })}</span>
          </Button>
        ))}
      </div>
      {/* <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter> */}
    </DialogContent>
  );
}
