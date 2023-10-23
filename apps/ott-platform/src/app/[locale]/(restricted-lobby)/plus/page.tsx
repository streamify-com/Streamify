import HeroSection from "@/components/layout/section/hero-section";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Plus",
  description: "Plus",
};

export default function IndexPage() {
  return (
    <>
      <HeroSection />
    </>
  );
}
