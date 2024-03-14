import OpengraphImage from "@shared-components/components/opengraph-image";

export const runtime = "edge";

// TODO: Generate generic OG image
export default async function Image() {
  return await OpengraphImage();
}
