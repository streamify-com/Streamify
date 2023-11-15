import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { muxInput } from "sanity-plugin-mux-input";
import { apiVersion, projectId, dataset } from "./sanity/lib/sanity.api";
import schemaTypes from "./sanity/schemas";
import { scheduledPublishing } from "@sanity/scheduled-publishing";
import { myTheme } from "./sanity/themes/basic-theme";

import { SanityHeader } from "./components/sanity-header";
import { PrimaryIcon } from "@shared-components/graphics/icons";
import { PrimaryLogo } from "@shared-components/graphics/logo";

export default defineConfig({
  basePath: "/studio",
  title: "Streamify Studio",
  subtitle: "Login to Streamify Studio",
  icon: PrimaryIcon,
  logo: PrimaryLogo,
  projectId,
  dataset,
  useCdn: true,
  withCredentials: false,
  apiVersion,
  theme: myTheme,
  schema: { types: schemaTypes },
  // studio: {
  //   components: {
  //     navbar: SanityHeader,
  //   },
  // },
  plugins: [
    deskTool(),
    scheduledPublishing(),
    muxInput({ mp4_support: "standard" }),
  ],
});
