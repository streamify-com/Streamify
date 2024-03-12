import LocaleSwitcher from "@/components/locale-switcher";
import { unstable_setRequestLocale } from "next-intl/server";
// import { ThemeModeSelectorTest } from "@/components/theme-switcher";

type Props = {
  params: { locale: string };
};

export default function Page({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  return (
    <div className="px-12 py-60 z-10 bg-white/60 dark:bg-black/60 backdrop-blur-2xl rounded-md border-separator border">
      <LocaleSwitcher />
      HALLO
      {/* <ThemeModeSelectorTest /> */}
    </div>
  );
}
