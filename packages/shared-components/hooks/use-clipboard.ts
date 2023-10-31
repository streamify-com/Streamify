import React, { useCallback, useEffect, useRef, useState } from "react";

interface UseClipboardProps {
  duration?: number;
}

const useClipboard = (props: UseClipboardProps) => {
  const [copied, setCopied] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const resetCopy = useRef<NodeJS.Timeout | null>(null);

  const onCopy = useCallback(() => {
    if (ref.current) {
      navigator.clipboard
        .writeText(ref.current.innerText)
        .then(() => setCopied(true))
        .catch((err) => console.error("Failed to copy text: ", err));
    }
  }, []);

  useEffect(() => {
    if (copied) {
      resetCopy.current = setTimeout(
        () => setCopied(false),
        props.duration || 3000,
      ) as NodeJS.Timeout;
    }

    return () => {
      if (resetCopy.current) {
        clearTimeout(resetCopy.current);
      }
    };
  }, [copied, props.duration]);

  return { copied, ref, onCopy };
};

export default useClipboard;
