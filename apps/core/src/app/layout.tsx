import "@shared-components/styles/globals.css";
import type { Metadata, Viewport } from "next";
import { cn } from "@shared-components/lib/utils";
import { Toaster } from "@shared-components/ui/sonner-toaster";
import { VercelPerformanceAnalytics } from "@shared-components/components/vercel-analytics";
import AdvertiseBadge from "@shared-components/components/advertise-badge";
import { ClerkProvider } from "@clerk/nextjs";
import { siteConfig } from "@/config/site";
import {
  fontBold,
  fontSemibold,
  fontSpecial,
  fontItalic,
  fontMedium,
} from "@shared-components/lib/fonts";
import { env } from "@/env.mjs";
import { LanguageProvider } from "@inlang/paraglide-js-adapter-next";
import { languageTag } from "@/paraglide/runtime";
import { deDE } from "@clerk/localizations";
import { enUS } from "@clerk/localizations";
import { ThemeProvider } from "@shared-components/components/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  manifest: "/manifest.json",
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
  creator: "Streamify",
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon-16x16.png",
    apple: "/favicon/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "https://ott.streamify.com/opengraph-image",
        alt: siteConfig.name,
      },
    ],
    // images: [
    //   {
    //     url: "https://d2fplzddl6myl4.cloudfront.net/card/streamify-card.png",
    //     width: 1200,
    //     height: 630,
    //     alt: siteConfig.name,
    //   },
    // ],
  },
};

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default async function LocaleLayout({ children }: RootLayoutProps) {
  return (
    <>
      <LanguageProvider>
        <ClerkProvider localization={enUS}>
          <html lang={languageTag()} suppressHydrationWarning>
            <head />
            <link rel="manifest" href="/manifest.json" />
            <body
              className={cn(
                "bg-background font-medium min-h-screen antialiased",
                fontMedium.variable,
                fontItalic.variable,
                fontSemibold.variable,
                fontBold.variable,
                fontSpecial.variable,
              )}
            >
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                {children}
              </ThemeProvider>
              <Toaster />
              <VercelPerformanceAnalytics />
              <SpeedInsights />
              {/* <AdvertiseBadge /> */}
            </body>
          </html>
        </ClerkProvider>
      </LanguageProvider>
    </>
  );
}
