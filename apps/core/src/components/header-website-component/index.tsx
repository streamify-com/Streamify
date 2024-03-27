import { HeaderWebsite } from "@shared-components/components/header";
import { useTranslations } from "next-intl";
import type { User } from "@clerk/nextjs/dist/types/server";
import ShortLocaleLink from "@/components/short-locale-link";
import { Separator } from "@shared-components/ui/separator";

interface HeaderWebsiteProps {
  user: User | null;
}

export default function HeaderWebsiteComponent({ user }: HeaderWebsiteProps) {
  const t = useTranslations("header-homepage");
  return (
    <HeaderWebsite
      user={user}
      products={t("products")}
      templates={t("templates")}
      download={t("download")}
      roadmap={t("roadmap")}
      pricing={t("pricing")}
    >
      <div className="flex items-center mx-4 space-x-4">
        <div className="flex items-center space-x-2">
          <ShortLocaleLink locale="en" href="/test" />
          <ShortLocaleLink locale="de" href="/test" />
        </div>
        <Separator orientation="vertical" />
      </div>
    </HeaderWebsite>
  );
}
