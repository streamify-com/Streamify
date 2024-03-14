"use client";

import { ChangeEvent, ReactNode, useTransition } from "react";
import { useRouter } from "@shared-components/ui/navigation";

type Props = {
  children: ReactNode;
  defaultValue: string;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
}: Props) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  // TODO
  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(
        // @ts-expect-error
        { locale: nextLocale },
      );
    });
  }

  return (
    <select
      className="inline-flex appearance-none bg-transparent py-3 pl-4 pr-12 rounded-md border border-separator sm:hover:border-primary sm:hover:bg-background-hover"
      defaultValue={defaultValue}
      disabled={isPending}
      onChange={onSelectChange}
    >
      {children}
    </select>
  );
}
