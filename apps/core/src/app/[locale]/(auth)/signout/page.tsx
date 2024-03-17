import { type Metadata } from "next";
import SignOutPageForm from "@shared-components/forms/auth/signout";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Sign Out",
  description: "Sign out to your account",
};

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
