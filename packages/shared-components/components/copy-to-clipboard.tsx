import { CopyIcon, Icons } from "@shared-components/graphics/icons";
import useClipboard from "@shared-components/hooks/use-clipboard";
import { Button } from "@shared-components/ui/button";

interface CopyToClipboardComponentProps {
  copy_text: string;
}

const CopyToClipboardComponent = ({
  copy_text,
}: CopyToClipboardComponentProps) => {
  const { ref, copied, onCopy } = useClipboard({ duration: 3000 });
  return (
    <>
      <Button
        className="flex transition duration-100 border-separator border p-1.5 bg-transparent rounded-md md:hover:bg-background-hover md:hover:border-standard-hover md:hover:text-standard-hover text-xs"
        size="iconSize"
        onClick={onCopy}
      >
        {copied ? (
          <Icons.check className="h-4 w-auto text-active" />
        ) : (
          <CopyIcon className="h-4 w-auto text-standard-hover" />
        )}
      </Button>
      <div ref={ref} className="hidden">
        <p>{copy_text}</p>
      </div>
    </>
  );
};

export default CopyToClipboardComponent;
