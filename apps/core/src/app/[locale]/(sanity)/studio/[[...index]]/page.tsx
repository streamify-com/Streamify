import { NextStudio } from "next-sanity/studio";

import config from "@shared-components/features/sanity/config/sanity.config";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
