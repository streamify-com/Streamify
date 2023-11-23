import Newsletter from "@/components/newsletter";
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
        <Newsletter />
      </PlatformContainer>
    </div>
  );
}
