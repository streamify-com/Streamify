"use client";

import { CopyIcon, Icons } from "@shared-components/graphics/icons";
import useClipboard from "@shared-components/hooks/use-clipboard";
import { Button } from "@shared-components/ui/button";
import { toast } from "sonner";

interface CopyToClipboardProps {
  copy_text: string;
  CopySucessful: string;
  CopyFailed: string;
}

const CopyToClipboard = ({
  CopySucessful,
  CopyFailed,
  copy_text,
}: CopyToClipboardProps) => {
  const {
    ref,
    copied,
    onCopy: originalOnCopy,
  } = useClipboard({ duration: 3000 });

  const onCopy = async () => {
    try {
      await originalOnCopy();
      toast.message(CopySucessful, {});
    } catch (error) {
      toast.error(CopyFailed, {});
    }
  };

  return (
    <>
      <Button
        className="flex transition duration-100 border-separator border p-1.5 bg-transparent rounded-md sm:hover:bg-background-hover sm:hover:border-primary sm:hover:text-primary text-xs"
        size="iconSize"
        onClick={onCopy}
      >
        {copied ? (
          <Icons.check className="h-4 w-auto text-active" />
        ) : (
          <CopyIcon className="h-4 w-auto text-primary" />
        )}
      </Button>
      <div ref={ref} className="hidden">
        <p>{copy_text}</p>
      </div>
    </>
  );
};

export default CopyToClipboard;
