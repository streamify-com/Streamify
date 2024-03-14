"use client";

import "vidstack/styles/defaults.css";
import "vidstack/styles/community-skin/video.css";
import {
  MediaCommunitySkin,
  MediaOutlet,
  MediaPlayer,
  MediaPoster,
} from "@vidstack/react";
import MuxPlayer from "@mux/mux-player-react";

interface VideoUrlProps {
  videoUrl: string;
}

export function MuxVideoPlayer({ videoUrl }: VideoUrlProps) {
  return (
    <MuxPlayer
      streamType="on-demand"
      src={videoUrl}
      metadataVideoTitle="Placeholder (optional)"
      metadataViewerUserId="Placeholder (optional)"
      // className="relative inset-0"
      className="fixed inset-0"
      loop
      autoPlay
    />
  );
}

export function MuxVideoBackground({ videoUrl }: VideoUrlProps) {
  return (
    <MuxPlayer
      streamType="on-demand"
      playbackId="Ojz11wN2KWh7mz2Mgc2nvatL9KwYHP3M"
      metadataVideoTitle="Placeholder (optional)"
      metadataViewerUserId="Placeholder (optional)"
      primaryColor="#FFFFFF"
      secondaryColor="#000000"
      autoPlay
      loop
      muted
    />
  );
}

export function VideoBackground({ videoUrl }: VideoUrlProps) {
  return (
    <MediaPlayer
      className="cover rounded-none border-transparent bg-black"
      src={videoUrl}
      autoplay
      muted
    >
      <MediaOutlet />
    </MediaPlayer>
  );
}

export function TrailerBackground({ videoUrl }: VideoUrlProps) {
  return (
    <MediaPlayer
      className="h-[90%] rounded-none border border-transparent bg-black"
      src={videoUrl}
      autoplay
      muted
    >
      <MediaOutlet />
    </MediaPlayer>
  );
}

export function VidstackPlayer({ videoUrl }: VideoUrlProps) {
  return (
    <MediaPlayer
      title="Sprite Fight"
      // className="relative border-transparent bg-black"
      className="cover fixed inset-0 border-transparent bg-black"
      src={videoUrl}
      // poster="https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/thumbnail.webp?time=268&width=980"
      // thumbnails="https://media-files.vidstack.io/sprite-fight/thumbnails.vtt"
      // aspectRatio={16 / 9}
      // crossorigin=""
      autoplay
    >
      {/* <MediaOutlet>
          <MediaPoster alt="Girl walks into sprite gnomes around her friend on a campfire in danger!" />
          <track
            src="https://media-files.vidstack.io/sprite-fight/subs/english.vtt"
            label="English"
            srcLang="en-US"
            kind="subtitles"
            default
          />
          <track
            src="https://media-files.vidstack.io/sprite-fight/chapters.vtt"
            srcLang="en-US"
            kind="chapters"
            default
          />
        </MediaOutlet> */}
      <MediaOutlet />
      <MediaCommunitySkin />
    </MediaPlayer>
  );
}

export function HoverPlayer({ videoUrl }: VideoUrlProps) {
  return (
    <MediaPlayer
      className="flex h-full w-full items-center justify-center rounded-none border-transparent bg-black"
      src={videoUrl}
      autoplay
      muted
    >
      <MediaOutlet />
    </MediaPlayer>
  );
}

export function YoutubeVideoPlayer() {
  return (
    <iframe
      className="relative inset-0 h-full w-full"
      src="https://www.youtube.com/embed/HatqJALPPdo"
      allow="autoplay; encrypted-media"
    />
  );
}

export { MuxPlayer };
