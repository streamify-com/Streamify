import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import { PortableTextBlock, VisualEditing, toPlainText } from "next-sanity";
import { Inter } from "next/font/google";
import { draftMode } from "next/headers";
import { Suspense } from "react";

import AlertBanner from "@shared-components/features/sanity/components/alert-banner";
import PortableText from "@shared-components/features/sanity/components/portable-text";

import * as demo from "@shared-components/features/sanity/lib/demo";
import { sanityFetch } from "@shared-components/features/sanity/lib/fetch";
import {
  SettingsQueryResponse,
  settingsQuery,
} from "@shared-components/features/sanity/lib/queries";
import { resolveOpenGraphImage } from "@shared-components/features/sanity/lib/utils";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await sanityFetch<SettingsQueryResponse>({
    query: settingsQuery,
    // Metadata should never contain stega
    stega: false,
  });
  const title = settings?.title || demo.title;
  const description = settings?.description || demo.description;

  const ogImage = resolveOpenGraphImage(settings?.ogImage);
  let metadataBase: URL | undefined = undefined;
  try {
    metadataBase = settings?.ogImage?.metadataBase
      ? new URL(settings.ogImage.metadataBase)
      : undefined;
  } catch {
    // ignore
  }
  return {
    metadataBase,
    title: {
      template: `%s | ${title}`,
      default: title,
    },
    description: toPlainText(description),
    openGraph: {
      images: ogImage ? [ogImage] : [],
    },
  };
}

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

async function Footer() {
  const data = await sanityFetch<SettingsQueryResponse>({
    query: settingsQuery,
  });
  const footer = data?.footer || ([] as PortableTextBlock[]);

  return (
    <footer className="bg-background border-separator border-t">
      <div className="container mx-auto px-5">
        <PortableText
          className="prose-sm text-primary bottom-0 w-full max-w-none bg-background py-12 text-center md:py-20"
          value={footer}
        />
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} bg-background text-primary`}>
      <body>
        <section className="min-h-screen">
          {draftMode().isEnabled && <AlertBanner />}
          <main>{children}</main>
          <Suspense>
            <Footer />
          </Suspense>
        </section>
        {draftMode().isEnabled && <VisualEditing />}
        <SpeedInsights />
      </body>
    </html>
  );
}
