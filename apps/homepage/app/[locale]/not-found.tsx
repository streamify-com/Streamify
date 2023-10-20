"use client";

import PageNotFoundLayout from "@shared-components/layout/page-not-found";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("not-found-layout");
  return (
    <PageNotFoundLayout
      message={t("message")}
      title={t("title")}
      description={t("description")}
      button_homepage_name={t("button.homepage.name")}
      button_support_name={t("button.support.name")}
    />
  );
}
