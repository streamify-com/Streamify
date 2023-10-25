"use client";

import { PlatformContainer } from "@shared-components/ui/container";
import { useTranslations } from "next-intl";

export default function SubscribeSection() {
  const t = useTranslations("subscribe");
  return (
    <>
      <PlatformContainer>
        <h1 className="text-3xl font-customFont text-primary">{t("name")}</h1>
      </PlatformContainer>
    </>
  );
}
