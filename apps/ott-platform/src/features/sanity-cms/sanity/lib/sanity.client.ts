import { apiVersion, dataset, projectId, useCdn } from "./sanity.api";
import { createClient, type SanityClient } from "@sanity/client";
import { cache } from "react";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});

export function getClient(preview?: { token?: string }): SanityClient {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    perspective: "published",
  });
  if (preview) {
    if (!preview.token) {
      throw new Error("You must provide a token to preview drafts");
    }
    return client.withConfig({
      token: preview.token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: "previewDrafts",
    });
  }
  return client;
}

export const getCachedClient = (preview?: { token?: string }) => {
  const client = getClient(preview);

  return cache(client.fetch.bind(client));
};

export const cachedClient = cache(client.fetch.bind(client));
