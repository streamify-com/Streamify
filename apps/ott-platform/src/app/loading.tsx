// import LoadingSpinner from "@shared-components/ui/loading-spinner";
import LoadingTopBar from "@shared-components/ui/loading-topbar";

export default function Loading() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      {/* <LoadingSpinner /> */}
      <LoadingTopBar />
    </div>
  );
}
