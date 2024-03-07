"use client";
import {
  availableLanguageTags,
  AvailableLanguageTag,
  languageTag,
} from "@/paraglide/runtime";
import { useRouter, usePathname } from "@/lib/i18n";
import { cn } from "@shared-components/lib/utils";
import { buttonVariants } from "@shared-components/ui/button";

export function SelectLanguage() {
  const labels: Record<AvailableLanguageTag, string> = {
    en: "English",
    de: "Deutsch",
  };

  const pathname = usePathname();
  const router = useRouter();

  return (
    <select
      value={languageTag()}
      onChange={(e) =>
        router.replace(pathname, {
          locale: e.target.value as AvailableLanguageTag,
        })
      }
      className={cn(
        buttonVariants({
          variant: "secondaryButton",
          size: "fixedSize",
        }),
      )}
    >
      {availableLanguageTags.map((lang) => (
        <option key={lang} value={lang}>
          {labels[lang]}
        </option>
      ))}
    </select>
  );
}
