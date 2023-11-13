import Newsletter from "@/components/newsletter";
import TestComponent from "@/components/test";
import { PlatformContainer } from "@shared-components/ui/container";
import LoadingTopBar from "@shared-components/ui/loading-topbar";

export default function Page() {
  return (
    <div>
      <PlatformContainer>
        {/* <LoadingTopBar /> */}
        {/* <TestComponent /> */}
        <Newsletter />
      </PlatformContainer>
    </div>
  );
}
