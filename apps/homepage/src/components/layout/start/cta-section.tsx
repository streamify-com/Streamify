import { HomepageContainer } from "@shared-components/ui/container";
import Link from "next-intl/link";
import { cn } from "@shared-components/lib/utils";
import { buttonVariants } from "@shared-components/ui/button";
import { Banner } from "@shared-components/components/banner";

export default function CtaSection() {
  return (
    <div className="bg-background-hover border-separator border-y">
      <HomepageContainer>
        <div className="my-10 flex-col gap-4 space-y-4 md:flex md:flex-row md:items-center md:justify-center md:space-x-4 md:space-y-0">
          <Link
            href="/subscribe"
            className={cn(
              buttonVariants({
                variant: "primaryButton",
                size: "defaultSize",
              }),
            )}
          >
            Get started
          </Link>
          <Banner firstButtonName={"1"} secondButtonName={"2"} />
        </div>
      </HomepageContainer>
    </div>
  );
}
