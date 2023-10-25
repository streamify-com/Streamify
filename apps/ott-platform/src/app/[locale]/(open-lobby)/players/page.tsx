import HeroSectionTest from "@/components/section/hero-section-test";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Players",
  description: "Players",
};

export default function PlayersPage() {
  return (
    <>
      <HeroSectionTest />
    </>
  );
}
