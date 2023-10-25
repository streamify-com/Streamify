import PricingPageForm from "@/components/form/pricing-page-form";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Pricing",
};

export default function PricingPage() {
  return <PricingPageForm />;
}
