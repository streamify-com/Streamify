import HeroSectionTest from "@/components/section/hero-section-test";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Home",
};

export default function WelcomePage() {
  return (
    <>
      <HeroSectionTest />
    </>
  );
}
