import TeamcardDialog from "@/components/teamcard/teamcard-dialog";
import { cn } from "@shared-components/lib/utils";
import { Button, buttonVariants } from "@shared-components/ui/button";
import { HomepageContainer } from "@shared-components/ui/container";
import Link from "next-intl/link";

export default function Page() {
  return (
    <HomepageContainer>
      <div className="gap-2 flex">
        <Button variant="primaryButton" size="defaultSize">
          Add to contacts
        </Button>
        <TeamcardDialog />
      </div>
      <div className="mt-4 grid grid-cols-1 gap-2 gap-y-4">
        <Link
          href="https://vcard.link/card/DfrG.vcf"
          className={cn(
            buttonVariants({
              variant: "primaryButton",
              size: "defaultSize",
            }),
          )}
        >
          Add to contacts
        </Link>
        <TeamcardDialog />
      </div>
    </HomepageContainer>
  );
}
