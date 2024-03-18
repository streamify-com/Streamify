import React from "react";
import { Metadata } from "next";
import PageNotFoundLayout from "@shared-components/layouts/page-not-found-layout";
import { useTranslations } from "next-intl";

type Props = {
  params: { locale: string };
};

export const metadata: Metadata = {
  title: "404",
  description: "Page not found",
};

export default function NotFound() {
  const t = useTranslations("page-not-found");

  return (
    <PageNotFoundLayout
      message={t("message")}
      title={t("title")}
      description={t("description")}
      button_homepage_name={t("button_homepage_name")}
      button_support_name={t("button_support_name")}
    />
  );
}
