"use client";

import React, { useState, useEffect } from "react";
import {
  CopyIcon,
  ScheduleIcon,
  Icons,
} from "@shared-components/graphics/icons";
import useCopyToClipboard from "@shared-components/hooks/use-copy-to-clipboard";
import Link from "next-intl/link";

interface CopyCardProps {
  title: string;
  value_string: string;
}

export function CopyCard({ title, value_string }: CopyCardProps) {
  const [value, copy] = useCopyToClipboard();
  const [isCopied, setIsCopied] = React.useState(false);

  const handleCopyClick = async () => {
    const success = await copy(value_string);
    if (success) {
      setIsCopied(true);

      // Reset isCopied state after 4 seconds
      setTimeout(() => {
        setIsCopied(false);
      }, 4000);
    }
  };

  return (
    <div className="flex items-center transition duration-200 border-separator border my-2 p-4 bg-transparent rounded-md">
      <span className="flex-1">{title}</span>
      <span className="text-highlight">{value_string}</span>
      <span
        onClick={handleCopyClick}
        className={`ml-4 flex transition duration-100 border-separator border p-1.5 bg-transparent rounded-md hover:bg-hoverground hover:border-highlight hover:text-highlight text-xs ${
          isCopied ? "text-green-500 border-green-500 bg-green-500/10" : ""
        }`}
      >
        <CopyIcon className="h-4 w-auto" />
      </span>
    </div>
  );
}

export function DiscordCard({ title }: { title: string }) {
  return (
    <Link
      className="flex items-center transition duration-200 border-separator border p-4 group bg-transparent hover:bg-[#5865F2] hover:text-highlight rounded-md"
      href="https://discord.gg/G2eAUj3y"
      target="_blank"
    >
      <span className="flex">
        <Icons.DiscordIcon className="h-7 w-auto text-highlight group-hover:text-white" />
      </span>
      <span className="text-highlight group-hover:text-white ml-4">
        {title}
      </span>
    </Link>
  );
}

export function ScheduleMeetingCard({ title }: { title: string }) {
  return (
    <Link
      className="flex items-center transition duration-200 border-separator border p-4 group bg-highlight hover:bg-hoverground hover:text-background rounded-md"
      href="https://cal.com/streamify/30min"
      target="_blank"
    >
      <span className="flex">
        <ScheduleIcon className="h-7 w-auto text-background group-hover:text-highlight" />
      </span>
      <span className="text-background group-hover:text-highlight ml-4">
        {title}
      </span>
    </Link>
  );
}
