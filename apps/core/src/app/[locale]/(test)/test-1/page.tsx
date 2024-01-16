import Newsletter from "@/components/newsletter";
import HeroSection from "@/components/section/hero-section";
import { PlatformContainer } from "@shared-components/ui/container";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Test 1",
  description: "Test 1",
};

export default function Page() {
  return (
    <div>
      <PlatformContainer>
        <HeroSection />
        <Newsletter />
      </PlatformContainer>
    </div>
  );
}
