import HeroSectionTest from "@/components/section/hero-section-test";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Matches",
  description: "Matches",
};

export default function MatchesPage() {
  return (
    <>
      <HeroSectionTest />
    </>
  );
}
