"use client";

import { Button } from "@shared-components/ui/button";

// TODO
export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="mx-auto my-4 flex max-w-xl flex-col rounded-lg border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-black md:p-12">
      <h2 className="text-xl font-bold justify-center">Error</h2>
      <p className="my-2">
        There was an issue. This could be a temporary issue, please try your
        action again.
      </p>
      <Button variant="actionButton" size="defaultSize" onClick={() => reset()}>
        Try Again
      </Button>
    </div>
  );
}
