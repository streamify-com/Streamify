import type { Metadata, ResolvingMetadata } from "next";
import { groq } from "next-sanity";
import { Link } from "@shared-components/ui/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import Avatar from "@shared-components/features/sanity/components/avatar";
import CoverImage from "@shared-components/features/sanity/components/cover-image";
import DateComponent from "@shared-components/features/sanity/components/date";
import MoreStories from "@shared-components/features/sanity/components/more-stories";
import PortableText from "@shared-components/features/sanity/components/portable-text";

import { sanityFetch } from "@shared-components/features/sanity/lib/fetch";
import {
  PostQueryResponse,
  SettingsQueryResponse,
  VideoPostQueryResponse,
  postQuery,
  settingsQuery,
  videoPostQuery,
} from "@shared-components/features/sanity/lib/queries";
import { resolveOpenGraphImage } from "@shared-components/features/sanity/lib/utils";
import * as demo from "@shared-components/features/sanity/lib/demo";
import MuxPlayer from "@mux/mux-player-react";

type Props = {
  params: { slug: string };
};

// export async function generateStaticParams() {
//   return sanityFetch<{ slug: string }[]>({
//     query: groq`*[_type == "videoPost" && defined(slug.current)]{"slug": slug.current}`,
//     perspective: "published",
//     stega: false,
//   });
// }

export default async function PostPage({ params }: Props) {
  const [videoPost, settings] = await Promise.all([
    sanityFetch<VideoPostQueryResponse>({
      query: videoPostQuery,
      params,
    }),
    sanityFetch<SettingsQueryResponse>({
      query: settingsQuery,
    }),
  ]);

  if (!videoPost?._id) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-5">
      <MuxPlayer
        streamType="on-demand"
        playbackId={videoPost.playbackId}
        className="relative z-10 h-[30rem]"
        loop
        autoPlay
      />
    </div>
  );
}
