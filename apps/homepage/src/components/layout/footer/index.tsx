"use client";

import {
  FacebookIcon,
  TwitterIcon,
  GithubIcon,
  ThreadsIcon,
  TwitchIcon,
  YoutubeIcon,
  LinkedinIcon,
  DiscordIcon,
  InstagramIcon,
  TiktokIcon,
} from "@shared-components/graphics/icons";
import { Button, buttonVariants } from "@shared-components/ui/button";
import { cn } from "@shared-components/lib/utils";
import { Icons } from "@shared-components/graphics/icons";
import { Input } from "@shared-components/ui/input";
import { PrimaryLogo } from "@shared-components/graphics/logo";
import { HomepageContainer } from "@shared-components/ui/container";
import {
  ModeSelection,
  ThemeModeIcon,
  ThemeModeSelector,
} from "@/components/mode-theme";
import Link from "next-intl/link";
import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@shared-components/ui/accordion";
import { LocaleChoose } from "@/components/locale-switcher";
import {
  ApplepayLogo,
  GooglepayLogo,
  KlarnaLogo,
  MastercardLogo,
  PaypalLogo,
  SofortLogo,
  VisaLogo,
} from "@shared-components/graphics/logo";
import { StripeClimateBadge } from "@shared-components/graphics/badge";
import { Separator } from "@shared-components/ui/separator";
import Newsletter from "@/components/newsletter";

interface IconProps extends JSX.IntrinsicAttributes {
  className?: string;
}

const navigationWebsite = {
  solutions: [
    { name: "Marketing", href: "#" },
    { name: "Analytics", href: "#" },
    { name: "Commerce", href: "#" },
    { name: "Insights", href: "#" },
  ],
  support: [
    { name: "Pricing", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Guides", href: "#" },
    { name: "API Status", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Partners", href: "#" },
  ],
  legal: [
    { name: "Cookie Policy", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Services", href: "#" },
    { name: "Imprint", href: "#" },
  ],
  social: [
    // {
    //   name: "Facebook",
    //   href: "#",
    //   icon: (props: JSX.IntrinsicAttributes) => <FacebookIcon {...props} />,
    // },
    {
      name: "Instagram",
      href: "#",
      icon: (props: JSX.IntrinsicAttributes) => <InstagramIcon {...props} />,
    },
    // {
    //   name: "Threads",
    //   href: "#",
    //   icon: (props: JSX.IntrinsicAttributes) => <ThreadsIcon {...props} />,
    // },
    {
      name: "Twitter",
      href: "#",
      icon: (props: JSX.IntrinsicAttributes) => <TwitterIcon {...props} />,
    },
    {
      name: "GitHub",
      href: "#",
      icon: (props: JSX.IntrinsicAttributes) => <GithubIcon {...props} />,
    },
    // {
    //   name: "YouTube",
    //   href: "#",
    //   icon: (props: JSX.IntrinsicAttributes) => <YoutubeIcon {...props} />,
    // },
    // {
    //   name: "LinkedIn",
    //   href: "#",
    //   icon: (props: JSX.IntrinsicAttributes) => <LinkedinIcon {...props} />,
    // },
    // {
    //   name: "Discrod",
    //   href: "#",
    //   icon: (props: JSX.IntrinsicAttributes) => <DiscordIcon {...props} />,
    // },
    // {
    //   name: "Twitch",
    //   href: "#",
    //   icon: (props: JSX.IntrinsicAttributes) => <TwitchIcon {...props} />,
    // },
    // {
    //   name: "TikTok",
    //   href: "#",
    //   icon: (props: JSX.IntrinsicAttributes) => <TiktokIcon {...props} />,
    // },
  ],
};

export function FooterHomepageLayout() {
  const t = useTranslations("footer-homepage");
  return (
    <footer
      className="border-separator bg-foreground bottom-0 z-0 border-t py-10 backdrop-blur-xl"
      aria-labelledby="footer-heading"
    >
      <HomepageContainer>
        <div className="my-4 flex items-center justify-center">
          <PrimaryLogo className="text-action h-10 w-auto" />
        </div>
        <div className="pb-2 pt-4 sm:pt-8">
          <div className="sm:grid sm:grid-cols-3 sm:gap-8">
            <div className="sm:grid grid-cols-2 gap-8 sm:col-span-2 hidden">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-md text-primary font-semibold leading-6 px-2">
                    {t("solutions.name")}
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <Link
                        href={t("solutions.studio.href")}
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-md",
                        )}
                      >
                        {t("solutions.studio.name")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={t("solutions.sports.href")}
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-md",
                        )}
                      >
                        {t("solutions.sports.name")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={t("solutions.analytics.href")}
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-md",
                        )}
                      >
                        {t("solutions.analytics.name")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={t("solutions.atlas.href")}
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-md",
                        )}
                      >
                        {t("solutions.atlas.name")}
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mt-10 sm:mt-0">
                  <h3 className="text-md text-primary font-semibold leading-6 px-2">
                    {t("support.name")}
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {/* {navigationWebsite.support.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="font-medium text-md text-primary sm:hover:text-primary leading-6 p-2 rounded-md bg-transparent sm:hover:bg-background-hover border border-transparent sm:hover:border-separator"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))} */}
                    <li>
                      <Link
                        href={t("support.pricing.href")}
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-md",
                        )}
                      >
                        {t("support.pricing.name")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={t("support.documentation.href")}
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-md",
                        )}
                      >
                        {t("support.documentation.name")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={t("support.guides.href")}
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-md",
                        )}
                      >
                        {t("support.guides.name")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={t("support.programs.href")}
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-md",
                        )}
                      >
                        {t("support.programs.name")}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="sm:grid sm:grid-cols-2 sm:gap-8">
                <div>
                  <h3 className="text-md text-primary font-semibold leading-6 px-2">
                    {t("company.name")}
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {/* {navigationWebsite.company.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="font-medium text-md text-primary sm:hover:text-primary leading-6 p-2 rounded-md bg-transparent sm:hover:bg-background-hover border border-transparent sm:hover:border-separator"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))} */}
                    <li>
                      <Link
                        href={t("company.about-us.href")}
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-md",
                        )}
                      >
                        {t("company.about-us.name")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={t("company.blog.href")}
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-md",
                        )}
                      >
                        {t("company.blog.name")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={t("company.jobs.href")}
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-md",
                        )}
                      >
                        {t("company.jobs.name")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={t("company.partners.href")}
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-md",
                        )}
                      >
                        {t("company.partners.name")}
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mt-10 sm:mt-0">
                  <h3 className="text-md text-primary font-semibold leading-6 px-2">
                    {t("legal.name")}
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {/* {navigationWebsite.legal.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="font-medium text-md text-primary sm:hover:text-primary leading-6 p-2 rounded-md bg-transparent sm:hover:bg-background-hover border border-transparent sm:hover:border-separator"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))} */}
                    <li>
                      <Link
                        href={t("legal.terms-of-services.href")}
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-md",
                        )}
                      >
                        {t("legal.terms-of-services.name")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={t("legal.privacy-policy.href")}
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-md",
                        )}
                      >
                        {t("legal.privacy-policy.name")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={t("legal.cookie-policy.href")}
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-md",
                        )}
                      >
                        {t("legal.cookie-policy.name")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={t("legal.imprint.href")}
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-md",
                        )}
                      >
                        {t("legal.imprint.name")}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <Accordion
              type="single"
              collapsible
              className="w-full sm:hidden block"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-md text-primary leading-6">
                  {t("solutions.name")}
                </AccordionTrigger>
                <AccordionContent>
                  <ul role="list">
                    <li>
                      <Link
                        href={t("solutions.studio.href")}
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-sm",
                        )}
                      >
                        {t("solutions.studio.name")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={t("solutions.sports.href")}
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-sm",
                        )}
                      >
                        {t("solutions.sports.name")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={t("solutions.analytics.href")}
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-sm",
                        )}
                      >
                        {t("solutions.analytics.name")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={t("solutions.atlas.href")}
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-sm",
                        )}
                      >
                        {t("solutions.atlas.name")}
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-md text-primary leading-6">
                  {t("support.name")}
                </AccordionTrigger>
                <AccordionContent>
                  <ul role="list">
                    {/* {navigationWebsite.support.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="font-medium text-md text-primary sm:hover:text-primary leading-6 p-2 rounded-md bg-transparent sm:hover:bg-background-hover border border-transparent sm:hover:border-separator"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))} */}
                    <li>
                      <Link
                        href={t("support.pricing.href")}
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-sm",
                        )}
                      >
                        {t("support.pricing.name")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={t("support.documentation.href")}
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-sm",
                        )}
                      >
                        {t("support.documentation.name")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={t("support.guides.href")}
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-sm",
                        )}
                      >
                        {t("support.guides.name")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={t("support.programs.href")}
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-sm",
                        )}
                      >
                        {t("support.programs.name")}
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-md text-primary leading-6">
                  {t("company.name")}
                </AccordionTrigger>
                <AccordionContent>
                  <ul role="list">
                    {/* {navigationWebsite.company.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="font-medium text-md text-primary sm:hover:text-primary leading-6 p-2 rounded-md bg-transparent sm:hover:bg-background-hover border border-transparent sm:hover:border-separator"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))} */}
                    <li>
                      <Link
                        href={t("company.about-us.href")}
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-sm",
                        )}
                      >
                        {t("company.about-us.name")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={t("company.blog.href")}
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-sm",
                        )}
                      >
                        {t("company.blog.name")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={t("company.jobs.href")}
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-sm",
                        )}
                      >
                        {t("company.jobs.name")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={t("company.partners.href")}
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-sm",
                        )}
                      >
                        {t("company.partners.name")}
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-transparent">
                <AccordionTrigger className="text-md text-primary leading-6">
                  {t("legal.name")}
                </AccordionTrigger>
                <AccordionContent>
                  <ul role="list">
                    {/* {navigationWebsite.legal.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="font-medium text-md text-primary sm:hover:text-primary leading-6 p-2 rounded-md bg-transparent sm:hover:bg-background-hover border border-transparent sm:hover:border-separator"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))} */}
                    <li>
                      <Link
                        href={t("legal.terms-of-services.href")}
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-sm",
                        )}
                      >
                        {t("legal.terms-of-services.name")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={t("legal.privacy-policy.href")}
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-sm",
                        )}
                      >
                        {t("legal.privacy-policy.name")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={t("legal.cookie-policy.href")}
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-sm",
                        )}
                      >
                        {t("legal.cookie-policy.name")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={t("legal.imprint.href")}
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-sm",
                        )}
                      >
                        {t("legal.imprint.name")}
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="mt-8 sm:mt-0 sm:border-l border-transparend sm:border-separator">
              <div className="sm:ml-8">
                {/* <h3 className="text-md text-primary sm:font-semibold ront-regular leading-6">
                  {t("newsletter.title")}
                </h3>
                <p className="text-md text-primary-muted my-2 leading-6">
                  {t("newsletter.description")}
                </p> */}
                <Newsletter />
                <form>
                  <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
                    {/* <Input
                      type="email"
                      autoComplete="on"
                      placeholder={t("newsletter.placeholder")}
                    />
                    <Button
                      className={cn(
                        buttonVariants({
                          variant: "primaryButton",
                          size: "defaultSize",
                        }),
                      )}
                    >
                      {t("newsletter.button")}
                    </Button> */}
                  </div>
                </form>
                {/* <Separator className="my-6" />
                <div className="hidden sm:block">
                  <h3 className="text-md text-primary sm:font-semibold ront-regular leading-6">
                    {t("we-support.title")}
                  </h3>
                  <div className="mt-2 flex items-center gap-4 flex-row">
                    <Link href="https://gdpr-info.eu/" target="_blank">
                      <Icons.GDPRIcon className="border-separator sm:hover:border-separator-hover h-10 w-10 rounded-full border bg-[#00349A] p-1 text-[#FFCC00]" />
                    </Link>
                    <Link
                      href="https://climate.stripe.com/s7VDJQ"
                      target="_blank"
                    >
                      <StripeClimateBadge className="border-separator text-standard bg-background sm:hover:border-separator-hover sm:hover:bg-hoverground h-10 w-10 rounded-full border p-2" />
                    </Link>
                  </div>
                </div> */}
              </div>
            </div>
            {/* <div className="block sm:hidden">
              <h3 className="text-md text-primary sm:font-semibold ront-regular leading-6">
                {t("we-support.title")}
              </h3>
              <div className="mt-4 flex items-center gap-4 flex-row">
                <Link href="https://gdpr-info.eu/" target="_blank">
                  <Icons.GDPRIcon className="border-separator sm:hover:border-separator-hover h-12 w-12 rounded-full border bg-[#00349A] p-2 text-[#FFCC00]" />
                </Link>
                <Link href="https://climate.stripe.com/s7VDJQ" target="_blank">
                  <StripeClimateBadge className="border-separator text-standard bg-background sm:hover:border-separator-hover sm:hover:bg-hoverground h-12 w-12 rounded-full border p-3" />
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </HomepageContainer>
    </footer>
  );
}

export function FooterDeclarationLayout() {
  const t = useTranslations("footer-declaration");
  return (
    <footer className="border-separator bg-foreground z-0 border-t py-6">
      <HomepageContainer>
        <div className="sm:flex sm:justify-between">
          <div className="w-full flex items-center justify-between">
            <p className="hidden font-medium text-primary-muted text-xs leading-5 sm:order-2 order-1 sm:absolute sm:flex sm:left-1/2 sm:-translate-x-1/2">
              &copy;&nbsp;{t("company")}&nbsp;{new Date().getFullYear()}.&nbsp;
              {t("all-rights-reserved")}
            </p>
            <p className="sm:hidden font-medium text-primary-muted text-xs leading-5 sm:order-2 order-1 sm:absolute flex sm:left-1/2 sm:-translate-x-1/2">
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
                className="text-primary-muted sm:hover:text-primary h-8 w-8 rounded-md bg-transparent sm:hover:bg-background-hover flex justify-center items-center border border-transparent sm:hover:border-separator"
              >
                <span className="sr-only">{item.name}</span>
                {item.icon({ className: "h-4 w-4 sm:h-5 sm:w-5" } as IconProps)}
              </Link>
            ))}
          </div>
        </div>
      </HomepageContainer>
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
    <footer className="bg-foreground border-t border-separator z-0 py-6">
      <HomepageContainer>
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
      </HomepageContainer>
    </footer>
  );
}
