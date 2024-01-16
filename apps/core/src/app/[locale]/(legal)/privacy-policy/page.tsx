import { Metadata } from "next";
import PrivacyPolicySection from "@/components/section/privacy-policy-section";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy",
};

export default function LegalPage() {
  return <PrivacyPolicySection />;
}
