"use client";

import { Button } from "@shared-components/ui/button";
import { useTranslations } from "next-intl";
import { Sheet, SheetTrigger, SheetContent } from "@shared-components/ui/sheet";
import { ScrollArea } from "@shared-components/ui/scroll-area";
import { QRCodeIcon } from "@shared-components/graphics/icons";
import { TinVotanQR } from "@shared-components/graphics/qr-code";

export default function TeamcardDialog() {
  const t = useTranslations("teamcard");

  return (
    <Sheet>
      <SheetTrigger asChild className="flex sm:hidden">
        <Button
          variant="secondaryButton"
          size="defaultSize"
          className="h-12 sm:h-10 w-12 sm:w-10 p-0"
        >
          <QRCodeIcon className="h-12" />
          {/* <span className="ml-2.5">QR Code</span> */}
        </Button>
      </SheetTrigger>
      <SheetContent
        title={t("label")}
        side="bottom"
        className="border-separator h-[60%] rounded-t-xl border-t"
      >
        <div className="grid mt-4 p-14">
          <TinVotanQR className="text-primary" />
        </div>
        {/* <ScrollArea className="mt-10 h-[90%] w-full border-t border-separator">
          <div className="grid mt-4">
            <TinVotanQR />
          </div>
        </ScrollArea> */}
      </SheetContent>
    </Sheet>
  );
}
