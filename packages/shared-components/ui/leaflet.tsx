"use client";

import { useEffect, useRef, ReactNode, Dispatch, SetStateAction } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { cn } from "@shared-components/lib/utils";
import { Button, buttonVariants } from "@shared-components/ui/button";

export default function Leaflet({
  setShow,
  children,
}: {
  setShow: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}) {
  const leafletRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const transitionProps = { type: "spring", stiffness: 500, damping: 30 };
  useEffect(() => {
    controls.start({
      y: 20,
      transition: transitionProps,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleDragEnd(_: any, info: any) {
    const offset = info.offset.y;
    const velocity = info.velocity.y;
    const height = leafletRef.current?.getBoundingClientRect().height || 0;
    if (offset > height / 2 || velocity > 800) {
      await controls.start({ y: "100%", transition: transitionProps });
      setShow(false);
    } else {
      controls.start({ y: 0, transition: transitionProps });
    }
  }

  function closeLeaflet() {
    setShow(false);
  }

  return (
    <AnimatePresence>
      <motion.div
        ref={leafletRef}
        key="leaflet"
        className="bg-background group fixed inset-x-0 bottom-0 h-[90%] z-50 w-screen pb-5 sm:hidden shadow-lg cursor-grab active:cursor-grabbing"
        initial={{ y: "100%" }}
        animate={controls}
        exit={{ y: "100%" }}
        transition={transitionProps}
        drag="y"
        dragDirectionLock
        onDragEnd={handleDragEnd}
        dragElastic={{ top: 0, bottom: 1 }}
        dragConstraints={{ top: 0, bottom: 0 }}
      >
        <Button
          onClick={closeLeaflet}
          className={cn(
            buttonVariants({
              variant: "menuButton",
              size: "menuSize",
            }),
            "absolute uppercase bg-background hover:bg-transparent border border-separator hover:border-transparent text-xs right-0 top-0 z-50 mr-6 mt-2 h-7 w-16 md:flex",
          )}
        >
          Exit
        </Button>
        <div
          className={`rounded-t-lg border-separator bg-hoverground -mb-1 flex h-12 w-full items-center justify-center border-t`}
        >
          <div className="bg-foreground -mr-1 h-1 w-6 rounded-full transition-all group-active:rotate-12" />
          <div className="bg-foreground h-1 w-6 rounded-full transition-all group-active:-rotate-12" />
        </div>
        {children}
      </motion.div>
      <motion.div
        key="leaflet-backdrop"
        className="bg-background/75 fixed inset-0 z-40 bg-opacity-10 backdrop-blur-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setShow(false)}
      />
    </AnimatePresence>
  );
}
