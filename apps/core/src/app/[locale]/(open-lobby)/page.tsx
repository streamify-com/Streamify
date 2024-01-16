import HeroSection from "@/components/section/hero-section";
import { PlatformContainer } from "@shared-components/ui/container";
import Background from "@shared-components/ui/background";

export default function Page() {
  return (
    <div>
      <PlatformContainer>
        <Background />
        <HeroSection />
      </PlatformContainer>
    </div>
  );
}
