"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { gradient } from "./Gradient";

export default function GradientBackground() {
    useEffect(() => {
    gradient.initGradient("#gradient-canvas");
  }, []);
  return (
    <motion.canvas
        id="gradient-canvas"
        data-transition-in
        className="fixed top-0 w-full h-screen"
    />
  )
}
