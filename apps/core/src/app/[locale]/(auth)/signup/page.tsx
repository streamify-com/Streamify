import { Metadata } from "next";
import SignUpPageForm from "@shared-components/forms/auth/signup";
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
  const t = await getTranslations({ locale, namespace: "signup" });

  return {
    title: t("title"),
  };
}

export default function SignUpPage() {
  const t = useTranslations("signup");
  return (
    <>
      <SignUpPageForm
        step={t("step")}
        title={t("title")}
        description={t("description")}
        signin_link={t("signin-link")}
        or_continue_with={t("or-continue-with")}
        genderplaceholder={t("genderplaceholder")}
        gendermale={t("gendermale")}
        genderfemale={t("genderfemale")}
        genderdiverse={t("genderdiverse")}
        firstname={t("first-name")}
        lastname={t("last-name")}
        birthdate={t("birth-date")}
        email={t("email")}
        password={t("password")}
        termsandconditions={t("terms-and-conditions")}
        termsandconditionsheader={t("terms-and-conditions-header")}
        termsandconditionsdescriptionpart1={t(
          "terms-and-conditions-description-part-1",
        )}
        termsandconditionsdescriptionpart2={t(
          "terms-and-conditions-description-part-2",
        )}
        privacypolicy={t("privacy-policy")}
        and={t("and")}
        formbutton={t("form-button")}
        previous_step={t("previous-step")}
        confirmPassword={t("confirm-password")}
      />
    </>
  );
}
