import { groq } from "next-sanity";

// Get all posts
export const postsQuery = groq`*[_type == "post" && defined(slug.current)]{
    _id, 
    title, 
    slug, 
    mainImage, 
    category->, 
    tier->, 
    author->,
    publishedAt,
    shortStory,
    fullStory,
    "playbackId": video.asset->playbackId,
    "playbackDuration": video.asset->data.duration,
    "playbackResolution": video.asset->data.max_stored_resolution,
  }`;

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ 
    title, 
    slug, 
    mainImage, 
    category->, 
    tier->, 
    author->,
    publishedAt,
    shortStory,
    fullStory,
    "playbackId": video.asset->playbackId,
    "playbackDuration": video.asset->data.duration,
    "playbackResolution": video.asset->data.max_stored_resolution,
  }`;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;

// Get all livestreams
export const livestreamQuery = groq`*[_type == "livestream" && defined(slug.current)]{
    title, 
    published->, 
  }`;
