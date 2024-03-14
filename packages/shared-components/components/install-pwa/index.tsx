"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@shared-components/ui/button";

const InstallPWA: React.FC = () => {
  const [supportsPWA, setSupportsPWA] = useState<boolean>(false);
  const [promptInstall, setPromptInstall] = useState<any | null>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      console.log("PWA triggered");
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const onClick = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };

  if (!supportsPWA) {
    return null;
  }

  return (
    <Button
      id="setup_button"
      aria-label="Install app"
      title="Install app"
      onClick={onClick}
      variant="actionButton"
      size="defaultSize"
    >
      Launch App
    </Button>
  );
};

export default InstallPWA;
