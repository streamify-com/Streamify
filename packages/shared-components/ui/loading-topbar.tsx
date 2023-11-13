"use client";

import { useEffect, useState } from "react";

const LoadingTopBar: React.FC = () => {
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentProgress < 100) {
        const increment = Math.random() * 40;
        setCurrentProgress((prevProgress) => {
          const newProgress = prevProgress + increment;
          return newProgress > 100 ? 100 : newProgress;
        });
      } else {
        clearInterval(interval);
      }
    }, 800);

    return () => clearInterval(interval);
  }, [currentProgress]);

  return (
    <div
      style={{ width: `${currentProgress}%` }}
      className="h-1 w-full bg-action transition-all duration-200 absolute z-40 top-0"
    />
  );
};

export default LoadingTopBar;
