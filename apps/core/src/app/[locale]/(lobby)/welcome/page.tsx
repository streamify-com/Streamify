import { getTranslations } from "next-intl/server";
import HeroSectionComponent from "@/components/hero-section-component";
import { useTranslations } from "next-intl";

// type Props = {
//   params: { locale: string };
// };

// export async function generateMetadata({
//   params: { locale },
// }: Omit<Props, "children">) {
//   const t = await getTranslations({ locale, namespace: "verify" });

//   return {
//     title: t("title"),
//   };
// }

export default function Page() {
  const t = useTranslations("hero-homepage");

  return (
    <div>
      <HeroSectionComponent
        title_1={t("title-1")}
        title_2={t("title-2")}
        title_3={t("title-3")}
        description={t("description")}
        highlight={t("highlight")}
        badge_description={t("badge-description")}
        badge_subtext={t("badge-subtext")}
        badge_title={t("badge-title")}
      />
    </div>
  );
}
