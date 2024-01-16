import { Metadata } from "next";
import ImprintSection from "@/components/section/imprint-section";

export const metadata: Metadata = {
  title: "Imprint",
  description: "Imprint",
};

export default function LegalPage() {
  return <ImprintSection />;
}
