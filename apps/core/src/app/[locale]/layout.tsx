import CookieBannerComponent from "@/components/cookie-banner-component";
import { getTranslations } from "next-intl/server";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "signin" });

  return {
    title: t("title"),
  };
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function PlatformLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col p-8 sm:p-12">
      <main className="flex-1">{children}</main>
      <CookieBannerComponent />
    </div>
  );
}
