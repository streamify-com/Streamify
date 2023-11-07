import { HomepageContainer } from "@shared-components/ui/container";
import Link from "next-intl/link";
import { cn } from "@shared-components/lib/utils";
import { buttonVariants } from "@shared-components/ui/button";

export default function CtaSection() {
  return (
    <div className="bg-background-hover border-separator border-y">
      <HomepageContainer>
        <div className="my-10 flex-col gap-4 space-y-4 sm:flex sm:flex-row sm:items-center sm:justify-center sm:space-x-4 sm:space-y-0">
          <Link
            href="/subscribe"
            className={cn(
              buttonVariants({
                variant: "primaryButton",
                size: "fixedSize",
              }),
            )}
          >
            Get started
          </Link>
        </div>
      </HomepageContainer>
    </div>
  );
}
