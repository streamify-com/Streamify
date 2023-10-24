import { LocaleChoose, LocaleSwitcher } from "@/components/locale-switcher";
import { PlatformContainer } from "@shared-components/ui/container";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Matches",
  description: "Matches",
};

export default function MatchesPage() {
  return (
    <PlatformContainer>
      <div className="grid grid-cols-1 gap-2 gap-y-4">
        <LocaleChoose />
        <LocaleSwitcher />
      </div>
    </PlatformContainer>
  );
}
