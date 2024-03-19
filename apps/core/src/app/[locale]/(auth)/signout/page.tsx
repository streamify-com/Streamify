import { type Metadata } from "next";
import SignOutPageForm from "@shared-components/forms/auth/signout";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "signout" });

  return {
    title: t("title"),
  };
}

export const runtime = "edge";

export default function SignOutPage() {
  const t = useTranslations("signout");
  return (
    <SignOutPageForm
      title={t("title")}
      description={t("description")}
      cancelbutton={t("cancel-button")}
    />
  );
}
