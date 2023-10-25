import "@shared-components/styles/globals.css";
import type { Metadata } from "next";
import { cn } from "@shared-components/lib/utils";

import { Analytics } from "@shared-components/components/vercel-analytics";
import { Toaster } from "@shared-components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs";
import { siteConfig } from "@/config/site";
import {
  fontBold,
  fontHeading,
  fontItalic,
  fontRegular,
} from "@shared-components/lib/fonts";
import { env } from "@/env.mjs";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { deDE } from "@clerk/localizations";
import { enUS } from "@clerk/localizations";
import { ThemeProvider } from "@shared-components/components/theme-provider";

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

async function getMessages(locale: string) {
  try {
    return (await import(`../../dictionaries/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export async function generateStaticParams() {
  return ["en", "de"].map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  viewport: "width=device-width, initial-scale=1.0",
  manifest: "../../../public/manifest.json",
  themeColor: "#000000",
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "All-in-One",
    "B2B",
    "Club TV",
    "Content Business",
    "Content Creators",
    "Content Monetization",
    "Creators Economy",
    "Fan Engagement",
    "Fan Loyalty",
    "Headless Streaming",
    "Live streaming",
    "OTT",
    "SaaS",
    "Sports Streaming",
    "Sports TV",
    "Streaming",
    "Streaming Platform",
    "Video CMS",
    "Video on demand",
    "Video Platform",
    "White Label",
  ],
  authors: [
    {
      name: "Tin Votan",
      url: "https://github.com/Vintotan",
    },
  ],
  creator: "streamify",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "https://assets.streamify.dev/card/streamify-card.png",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  const messages = await getMessages(locale);

  return (
    <>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <ClerkProvider localization={enUS}>
          <html lang={locale} suppressHydrationWarning={true}>
            <head />
            <link rel="manifest" href="/manifest.json" />
            <body
              className={cn(
                "bg-background font-regular min-h-screen antialiased",
                fontRegular.variable,
                fontItalic.variable,
                fontBold.variable,
                fontHeading.variable,
              )}
            >
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
              >
                {children}
              </ThemeProvider>
              <Toaster />
              <Analytics />
            </body>
          </html>
        </ClerkProvider>
      </NextIntlClientProvider>
    </>
  );
}
