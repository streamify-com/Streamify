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
  postQuery,
  settingsQuery,
} from "@shared-components/features/sanity/lib/queries";
import { resolveOpenGraphImage } from "@shared-components/features/sanity/lib/utils";
import * as demo from "@shared-components/features/sanity/lib/demo";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return sanityFetch<{ slug: string }[]>({
    query: groq`*[_type == "post" && defined(slug.current)]{"slug": slug.current}`,
    perspective: "published",
    stega: false,
  });
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const post = await sanityFetch<PostQueryResponse>({
    query: postQuery,
    params,
    stega: false,
  });
  const previousImages = (await parent).openGraph?.images || [];
  const ogImage = resolveOpenGraphImage(post?.coverImage);

  return {
    authors: post?.author?.name ? [{ name: post?.author?.name }] : [],
    title: post?.title,
    description: post?.excerpt,
    openGraph: {
      images: ogImage ? [ogImage, ...previousImages] : previousImages,
    },
  } satisfies Metadata;
}

export default async function PostPage({ params }: Props) {
  const [post, settings] = await Promise.all([
    sanityFetch<PostQueryResponse>({
      query: postQuery,
      params,
    }),
    sanityFetch<SettingsQueryResponse>({
      query: settingsQuery,
    }),
  ]);

  if (!post?._id) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-5">
      <h2 className="mb-16 mt-10 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
        <Link href="/" className="hover:underline">
          {settings?.title || demo.title}
        </Link>
      </h2>
      <article>
        <h1 className="text-balance mb-12 text-6xl font-bold leading-tight tracking-tighter md:text-7xl md:leading-none lg:text-8xl">
          {post.title}
        </h1>
        <div className="hidden md:mb-12 md:block">
          {post.author && (
            <Avatar name={post.author.name} picture={post.author.picture} />
          )}
        </div>
        <div className="mb-8 sm:mx-0 md:mb-16">
          <CoverImage image={post.coverImage} priority />
        </div>
        <div className="mx-auto max-w-2xl">
          <div className="mb-6 block md:hidden">
            {post.author && (
              <Avatar name={post.author.name} picture={post.author.picture} />
            )}
          </div>
          <div className="mb-6 text-lg text-primary">
            <div className="mb-4 text-lg text-primary-muted">
              <DateComponent dateString={post.date} />
            </div>
          </div>
        </div>
        {post.content?.length && (
          <PortableText
            className="mx-auto max-w-2xl text-primary"
            value={post.content}
          />
        )}
      </article>
      <aside>
        <hr className="border-separator border mb-24 mt-28" />
        <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl text-action">
          Recent Stories
        </h2>
        <Suspense>
          <MoreStories skip={post._id} limit={2} />
        </Suspense>
      </aside>
    </div>
  );
}
