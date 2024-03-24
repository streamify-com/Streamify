"use client";

import { CopyIcon, Icons } from "@shared-components/graphics/icons";
import useClipboard from "@shared-components/hooks/use-clipboard";
import { Button } from "@shared-components/ui/button";
// Import the toast module
import { toast } from "sonner";

interface CopyToClipboardComponentProps {
  copy_text: string;
}

const CopyToClipboardComponent = ({
  copy_text,
}: CopyToClipboardComponentProps) => {
  const { ref, copied, onCopy: originalOnCopy } = useClipboard({ duration: 3000 });

  // Wrap the original onCopy to add toast notifications
  const onCopy = async () => {
    try {
      await originalOnCopy();
      // Display success message
      toast.message("Copied to clipboard!", {
        // Optional: Add any configuration specific to your project's theme or requirements
      });
    } catch (error) {
      // Display error message
      toast.error("Failed to copy!", {
        // Optional: Add any configuration specific to your project's theme or requirements
      });
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

export default CopyToClipboardComponent;
