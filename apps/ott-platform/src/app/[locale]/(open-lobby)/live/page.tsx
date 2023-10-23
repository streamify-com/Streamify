import HeroSectionTest from "@/components/layout/section/hero-section-test";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Live",
  description: "Live",
};

export default function LivePage() {
  return (
    <>
      <HeroSectionTest />
    </>
  );
}
