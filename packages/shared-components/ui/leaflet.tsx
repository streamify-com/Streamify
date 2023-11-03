"use client";

import { useEffect, useRef, ReactNode, Dispatch, SetStateAction } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { Button } from "@shared-components/ui/button";

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
        className="bg-background group fixed inset-x-0 bottom-0 z-50 h-[90%] w-screen cursor-grab rounded-t-lg pb-5 shadow-md drop-shadow-md active:cursor-grabbing sm:hidden"
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
          variant="leafletButton"
          size="leafletSize"
          className="absolute right-0 top-0 z-50 mr-8 mt-2.5"
        >
          Done
        </Button>
        <div
          className={`border-separator bg-background-hover -mb-1 flex h-12 w-full items-center justify-center rounded-t-lg border`}
        >
          <div className="bg-standard -mr-1 h-1 w-6 rounded-full transition-all group-active:rotate-12" />
          <div className="bg-standard h-1 w-6 rounded-full transition-all group-active:-rotate-12" />
        </div>
        <div className="mt-1 h-full overflow-auto">{children}</div>
      </motion.div>
      <motion.div
        key="leaflet-backdrop"
        className="bg-background/10 fixed inset-0 z-40 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setShow(false)}
      />
    </AnimatePresence>
  );
}
