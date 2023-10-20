import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@shared-components/ui/select";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";
import { ChangeEvent, useTransition } from "react";

export function LanguageSelection() {
  const t = useTranslations("LanguageSelection");
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <select
          className="inline-flex appearance-none bg-transparent py-3 pl-2 pr-6"
          value={locale}
          disabled={isPending}
          onChange={onSelectChange}
        >
          {["en", "de"].map((cur) => (
            <option key={cur} value={cur}>
              {t("locale", { locale: cur })}
            </option>
          ))}
        </select>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="de">Deutsch</SelectItem>
          <SelectItem value="en">English</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
