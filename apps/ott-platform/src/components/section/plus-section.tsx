"use client";

import { PlatformContainer } from "@shared-components/ui/container";
import { useTranslations } from "next-intl";

export default function PlusSection() {
  const t = useTranslations("plus");
  return (
    <>
      <PlatformContainer>
        <h1 className="text-3xl font-customFont text-primary">{t("name")}</h1>
      </PlatformContainer>
    </>
  );
}
