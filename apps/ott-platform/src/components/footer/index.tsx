"use client";

import {
  FacebookIcon,
  TwitterIcon,
  ThreadsIcon,
  GithubIcon,
  TwitchIcon,
  YoutubeIcon,
  LinkedinIcon,
  DiscordIcon,
  InstagramIcon,
  TiktokIcon,
} from "@shared-components/graphics/icons";
import { PlatformContainer } from "@shared-components/ui/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@shared-components/ui/accordion";
import {
  LocaleChoose,
  LocaleChooseIcon,
  LocaleSwitcher,
} from "@/components/locale-switcher";
import Link from "next-intl/link";
import { useTranslations } from "next-intl";
import {
  ApplepayLogo,
  GooglepayLogo,
  KlarnaLogo,
  MastercardLogo,
  PaypalLogo,
  SofortLogo,
  VisaLogo,
} from "@shared-components/graphics/logo";
import { cn } from "@shared-components/lib/utils";
import { buttonVariants } from "@shared-components/ui/button";
import { ThemeModeIcon, ThemeModeSelector } from "@/components/mode-theme";
import { Separator } from "@shared-components/ui/separator";

interface IconProps extends JSX.IntrinsicAttributes {
  className?: string;
}

const navigationWebsite = {
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: (props: JSX.IntrinsicAttributes) => <FacebookIcon {...props} />,
    },
    {
      name: "Instagram",
      href: "#",
      icon: (props: JSX.IntrinsicAttributes) => <InstagramIcon {...props} />,
    },
    {
      name: "Threads",
      href: "#",
      icon: (props: JSX.IntrinsicAttributes) => <ThreadsIcon {...props} />,
    },
    // {
    //   name: "GitHub",
    //   href: "#",
    //   icon: (props: JSX.IntrinsicAttributes) => <GithubIcon {...props} />,
    // },
    {
      name: "YouTube",
      href: "#",
      icon: (props: JSX.IntrinsicAttributes) => <YoutubeIcon {...props} />,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: (props: JSX.IntrinsicAttributes) => <LinkedinIcon {...props} />,
    },
    // {
    //   name: "Discord",
    //   href: "#",
    //   icon: (props: JSX.IntrinsicAttributes) => <DiscordIcon {...props} />,
    // },
    {
      name: "Twitch",
      href: "#",
      icon: (props: JSX.IntrinsicAttributes) => <TwitchIcon {...props} />,
    },
    {
      name: "TikTok",
      href: "#",
      icon: (props: JSX.IntrinsicAttributes) => <TiktokIcon {...props} />,
    },
  ],
};

export function FooterDeclarationLayout() {
  const t = useTranslations("footer-declaration");
  return (
    <footer className="border-separator bg-background/75 z-0 border-t py-6 backdrop-blur-xl">
      <PlatformContainer>
        <div className="sm:flex sm:justify-between">
          <div className="w-full flex items-center justify-between">
            <p className="hidden font-regular text-primary-muted text-xs leading-5 sm:order-2 order-1 sm:absolute sm:flex sm:left-1/2 sm:-translate-x-1/2">
              &copy;&nbsp;{t("company")}&nbsp;{new Date().getFullYear()}.&nbsp;
              {t("all-rights-reserved")}
            </p>
            <p className="sm:hidden font-regular text-primary text-xs leading-5 sm:order-2 order-1 sm:absolute flex sm:left-1/2 sm:-translate-x-1/2">
              &copy;&nbsp;{t("company")}&nbsp;{new Date().getFullYear()}
            </p>
            <div className="sm:order-1 order-2 sm:hidden block">
              <ThemeModeIcon />
            </div>
            <div className="sm:order-1 order-2 hidden sm:block">
              <ThemeModeSelector />
            </div>
          </div>
          <div className="flex justify-center sm:justify-end space-x-2 sm:order-3 order-1 w-full mt-4 sm:mt-0">
            {navigationWebsite.social.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-primary sm:hover:text-primary h-8 w-8 rounded-md bg-transparent sm:hover:bg-background-hover flex justify-center items-center border border-transparent sm:hover:border-separator"
              >
                <span className="sr-only">{item.name}</span>
                {item.icon({ className: "h-4 w-4 sm:h-5 sm:w-5" } as IconProps)}
              </Link>
            ))}
          </div>
        </div>
      </PlatformContainer>
    </footer>
  );
}

export function FooterPlatformLayout() {
  const t = useTranslations("footer-platform");
  return (
    <footer className="border-separator bg-background/75 z-0 border-t backdrop-blur-xl">
      <PlatformContainer>
        <div className="mx-auto sm:flex sm:items-center sm:justify-between">
          <nav
            className="text-center my-6 sm:flex sm:justify-center sm:space-x-10"
            aria-label="Footer"
          >
            <div className="my-4 sm:my-0 sm:space-x-8 sm:flex hidden">
              <Link
                href={t("terms-of-services.href")}
                className={cn(
                  buttonVariants({
                    variant: "ghostButton",
                    size: "footerSize",
                  }),
                  "sm:text-sm",
                )}
              >
                {t("terms-of-services.name")}
              </Link>
              <Link
                href={t("privacy-policy.href")}
                className={cn(
                  buttonVariants({
                    variant: "ghostButton",
                    size: "footerSize",
                  }),
                  "sm:text-sm",
                )}
              >
                {t("privacy-policy.name")}
              </Link>
              <Link
                href={t("cookie-policy.href")}
                className={cn(
                  buttonVariants({
                    variant: "ghostButton",
                    size: "footerSize",
                  }),
                  "sm:text-sm",
                )}
              >
                {t("cookie-policy.name")}
              </Link>
              <Link
                href={t("imprint.href")}
                className={cn(
                  buttonVariants({
                    variant: "ghostButton",
                    size: "footerSize",
                  }),
                  "sm:text-sm",
                )}
              >
                {t("imprint.name")}
              </Link>
              <Link
                href={t("cancel-subscription.href")}
                className={cn(
                  buttonVariants({
                    variant: "ghostButton",
                    size: "footerSize",
                  }),
                  "sm:text-sm",
                )}
              >
                {t("cancel-subscription.name")}
              </Link>
            </div>
            <Accordion
              type="single"
              collapsible
              className="w-full sm:hidden block"
            >
              <AccordionItem value="item-1" className="border-transparent">
                <AccordionTrigger className="text-md text-primary leading-6">
                  {t("sitemap.name")}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col items-start">
                    <Link
                      href={t("terms-of-services.href")}
                      className={cn(
                        buttonVariants({
                          variant: "ghostButton",
                          size: "footerSize",
                        }),
                        "sm:text-sm",
                      )}
                    >
                      {t("terms-of-services.name")}
                    </Link>
                    <Link
                      href={t("privacy-policy.href")}
                      className={cn(
                        buttonVariants({
                          variant: "ghostButton",
                          size: "footerSize",
                        }),
                        "sm:text-sm",
                      )}
                    >
                      {t("privacy-policy.name")}
                    </Link>
                    <Link
                      href={t("cookie-policy.href")}
                      className={cn(
                        buttonVariants({
                          variant: "ghostButton",
                          size: "footerSize",
                        }),
                        "sm:text-sm",
                      )}
                    >
                      {t("cookie-policy.name")}
                    </Link>
                    <Link
                      href={t("imprint.href")}
                      className={cn(
                        buttonVariants({
                          variant: "ghostButton",
                          size: "footerSize",
                        }),
                        "sm:text-sm",
                      )}
                    >
                      {t("imprint.name")}
                    </Link>
                    <Link
                      href={t("cancel-subscription.href")}
                      className={cn(
                        buttonVariants({
                          variant: "ghostButton",
                          size: "footerSize",
                        }),
                        "sm:text-sm",
                      )}
                    >
                      {t("cancel-subscription.name")}
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </nav>
          <div className="mb-6 sm:mb-0">
            <Link
              href={t("support.href")}
              className={cn(
                buttonVariants({
                  variant: "primaryButton",
                  size: "headerSize",
                }),
              )}
            >
              {t("support.name")}
            </Link>
          </div>
        </div>
      </PlatformContainer>
    </footer>
  );
}

export function FooterPaymentLayout() {
  const t = useTranslations("footer-payment");

  const logos = [
    { logo: VisaLogo, className: "h-6 sm:h-8 w-auto" },
    { logo: MastercardLogo, className: "h-4 sm:h-6 w-auto" },
    { logo: PaypalLogo, className: "h-8 sm:h-10 w-auto" },
    { logo: SofortLogo, className: "h-3 sm:h-4 w-auto" },
    // { logo: KlarnaLogo, className: 'h-3 sm:h-4 w-auto' },
    { logo: ApplepayLogo, className: "h-6 sm:h-8 w-auto" },
    { logo: GooglepayLogo, className: "h-6 sm:h-8 w-auto" },
  ];

  return (
    <footer className="bg-background/75 border-t border-separator z-0 py-6 backdrop-blur-xl">
      <PlatformContainer>
        <div className="mx-auto sm:flex sm:items-center sm:justify-between">
          <div className="sm:order-1 sm:mt-0">
            <LocaleChoose />
          </div>
          <div className="flex gap-x-2 justify-between sm:order-2 mt-4 sm:mt-0">
            {logos.map((logoData, index) => (
              <div
                key={index}
                className="flex items-center h-10 w-20 rounded-md border border-separator bg-background-hover text-primary-muted justify-center sm:order-2"
              >
                <logoData.logo
                  className={logoData.className}
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        </div>
      </PlatformContainer>
    </footer>
  );
}
