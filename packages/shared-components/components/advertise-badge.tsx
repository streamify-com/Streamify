import { StreamifyBadge } from "@shared-components/graphics/badge";
import Link from "next-intl/link";

export default function AdvertiseBadge() {
  return (
    <div className="pointer-events-none fixed bottom-0 right-0 z-50 p-4">
      <Link
        href="https://www.streamify.com"
        target="_blank"
        aria-label="Streamify ad"
      >
        <StreamifyBadge className="text-background border-separator bg-primary h-8 w-auto rounded-md border shadow-lg drop-shadow-lg" />
      </Link>
    </div>
  );
}
