import Newsletter from "@/components/newsletter";
import { PlatformContainer } from "@shared-components/ui/container";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Test 2",
  description: "Test 2",
};

export default function Page() {
  return (
    <div>
      <PlatformContainer>Test 3</PlatformContainer>
    </div>
  );
}
