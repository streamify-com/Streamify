import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Link } from "@shared-components/ui/link";
import { buttonVariants } from "@shared-components/ui/button";
import { cn } from "@shared-components/lib/utils";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "verify" });

  return {
    title: t("title"),
  };
}

export default function Page({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);
  const t = useTranslations("LocaleSwitcher");

  return (
    <div className="flex-1 space-y-4">
      <Link
        href="https://93eca700-b764-4621-ab7f-de0792aa31ab.ma.bw-cloud-instance.org/jupyterhub"
        className={cn(
          buttonVariants({
            variant: "primaryButton",
            size: "defaultSize",
          }),
          "sm:text-sm bg-orange-500",
        )}
      >
        Login with Shibboleth
      </Link>
    </div>
  );
}
