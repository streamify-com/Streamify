import TestComponent from "@/components/test";
import LoadingTopBar from "@shared-components/ui/loading-topbar";

export default function Page() {
  return (
    <div>
      <LoadingTopBar />
      <TestComponent />
    </div>
  );
}
