import clsx from "clsx";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

export function PlatformContainer({ children }: ContainerProps) {
  return <div className={clsx("px-8 md:px-20")}>{children}</div>;
}

export function HomepageContainer({ children }: ContainerProps) {
  return <div className={clsx("px-8 md:px-24")}>{children}</div>;
}
