"use client";

import "@shared-components/styles/globals.css";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { gradient } from "./components/Gradient";

export default function GradientBackground() {
  useEffect(() => {
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <motion.canvas
      initial={{
        filter: "blur(20px)",
      }}
      animate={{
        filter: "blur(0px)",
      }}
      transition={{
        duration: 1,
        ease: [0.075, 0.82, 0.965, 1],
      }}
      id="gradient-canvas"
      data-transition-in
      className="fixed top-0 w-full h-screen"
    />
  );
}
