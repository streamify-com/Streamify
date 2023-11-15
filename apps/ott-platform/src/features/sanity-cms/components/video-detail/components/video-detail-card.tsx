'use client';

import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url';
import { SanityDocument } from '@sanity/client';
import { PortableText } from '@portabletext/react';
import MuxPlayer from '@mux/mux-player-react';
import { client } from '@/features/sanity-cms/sanity/lib/sanity.client';

const builder = imageUrlBuilder(client);

export default function VideoDetailCard({ post }: { post: SanityDocument }) {
  const videoUrl = post?.playbackId
    ? `https://stream.mux.com/${post.playbackId}.m3u8`
    : '';

  return (
    <main className="prose prose-lg container mx-auto p-4">
      {post?.title ? <h1>{post.title}</h1> : null}
      {post?.mainImage ? (
        <Image
          className="relative rounded-md"
          src={builder.image(post.mainImage).width(300).height(300).url()}
          width={300}
          height={300}
          alt={post?.mainImage?.alt}
        />
      ) : null}
      {post?.playbackId ? (
        <MuxPlayer
          streamType="on-demand"
          src={videoUrl}
          className="relative inset-0"
          loop
          autoPlay
        />
      ) : null}
      {post?.fullStory ? <PortableText value={post.fullStory} /> : null}
    </main>
  );
}
