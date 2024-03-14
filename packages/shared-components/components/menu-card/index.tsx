"use client";

import { ScheduleIcon, Icons } from "@shared-components/graphics/icons";
import Link from "next/link";
import CopyToClipboardComponent from "../copy-to-clipboard";

interface CopyCardProps {
  title: string;
  value_string: string;
}

export function CopyCard({ title, value_string }: CopyCardProps) {
  return (
    <div className="flex items-center transition duration-200 border-separator border my-2 px-4 py-2 bg-transparent rounded-md">
      <span className="text-primary-muted flex-1">{title}</span>
      <span className="text-primary mr-4">{value_string}</span>
      <CopyToClipboardComponent copy_text={value_string} />
    </div>
  );
}

export function DiscordCard({ title }: { title: string }) {
  return (
    <Link
      className="flex items-center transition duration-200 border-separator border p-4 group bg-transparent sm:hover:bg-[#5865F2] sm:hover:text-primary rounded-md"
      href="https://discord.gg/G2eAUj3y"
      target="_blank"
    >
      <span className="flex">
        <Icons.DiscordIcon className="h-7 w-auto text-primary sm:group-hover:text-white" />
      </span>
      <span className="text-primary sm:group-hover:text-white ml-4">
        {title}
      </span>
    </Link>
  );
}

export function ScheduleMeetingCard({ title }: { title: string }) {
  return (
    <Link
      className="flex items-center transition duration-200 border-separator border p-4 group bg-primary sm:hover:bg-background-hover sm:hover:text-background rounded-md"
      href="https://cal.com/streamify/30min"
      target="_blank"
    >
      <span className="flex">
        <ScheduleIcon className="h-7 w-auto text-background sm:group-hover:text-primary" />
      </span>
      <span className="text-background sm:group-hover:text-primary ml-4">
        {title}
      </span>
    </Link>
  );
}
