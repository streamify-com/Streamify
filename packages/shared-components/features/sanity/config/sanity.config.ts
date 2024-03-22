"use client";
/**
 * This config is used to set up Sanity Studio that's mounted on the `app/(sanity)/studio/[[...tool]]/page.tsx` route
 */
// import { visionTool } from "@sanity/vision";
import { PluginOptions, defineConfig } from "sanity";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import { presentationTool } from "sanity/presentation";
import { structureTool } from "sanity/structure";

import {
  dataset,
  projectId,
  studioUrl,
} from "@shared-components/features/sanity/lib/api";
import { locate } from "@shared-components/features/sanity/plugins/locate";
import {
  pageStructure,
  singletonPlugin,
} from "@shared-components/features/sanity/plugins/settings";
import { assistWithPresets } from "@shared-components/features/sanity/plugins/assist";
import author from "@shared-components/features/sanity/schemas/documents/author";
import post from "@shared-components/features/sanity/schemas/documents/post";
import video from "@shared-components/features/sanity/schemas/documents/video";
import blockContent from "@shared-components/features/sanity/schemas/documents/block-content";
import settings from "@shared-components/features/sanity/schemas/singletons/settings";
import {muxInput} from "sanity-plugin-mux-input";

export default defineConfig({
  basePath: studioUrl,
  projectId,
  dataset,
  schema: {
    types: [
      settings,
      post,
      author,
      video,
      blockContent
    ],
  },
  plugins: [
    structureTool({ structure: pageStructure([settings]) }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    singletonPlugin([settings.name]),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Sets up AI Assist with preset prompts
    // https://www.sanity.io/docs/ai-assist
    assistWithPresets(),
    muxInput({mp4_support: 'standard'}),
    presentationTool({
      locate,
      previewUrl: { previewMode: { enable: "/api/draft" } },
    }),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    // process.env.NODE_ENV === "development" &&
    //   visionTool({ defaultApiVersion: apiVersion }),
  ].filter(Boolean) as PluginOptions[],
});
