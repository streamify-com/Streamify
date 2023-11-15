"use client";

import { SanityDocument } from "@sanity/client";
import MuxPlayer from "@mux/mux-player-react";
import * as React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@shared-components/ui/button";
import { ExpandingArrowLeft } from "@shared-components/graphics/icons";

interface CinemaVideoPlayerProps {
  post: SanityDocument;
}

export default function CinemaVideoPlayer({ post }: CinemaVideoPlayerProps) {
  const router = useRouter();
  const [isPending] = React.useTransition();
  const [isMouseMoving, setIsMouseMoving] = React.useState(true);

  React.useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleMouseMove = () => {
      setIsMouseMoving(true);
      clearTimeout(timer);
      timer = setTimeout(() => setIsMouseMoving(false), 2000);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="h-screen overflow-hidden">
      {isMouseMoving && (
        <div className="absolute z-50 hidden p-8 md:block">
          <Button
            aria-label="Go back to the previous page"
            variant="secondaryButton"
            size="headerSize"
            className="group w-full bg-black/50 text-white backdrop-blur-xl md:w-full"
            onClick={() => router.back()}
            disabled={isPending}
          >
            <ExpandingArrowLeft />
            <span className="ml-5">Back</span>
          </Button>
        </div>
      )}
      {isMouseMoving && (
        <div className="relative inset-0 z-30 hidden h-[45%] bg-gradient-to-b from-black via-transparent md:block">
          <div className="absolute z-40 hidden px-36 py-6 md:block">
            <div className="text-md font-regular w-full px-4 py-2 text-white md:w-full md:text-xl">
              <p className="drop-shadow-xl">{post.title}</p>
            </div>
          </div>
        </div>
      )}
      {post?.playbackId ? (
        <MuxPlayer
          streamType="on-demand"
          playbackId={post.playbackId}
          className="fixed inset-0"
          loop
          autoPlay
        />
      ) : null}
    </div>
  );
}
