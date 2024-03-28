"use client";

import {
  TwitterIcon,
  GithubIcon,
  YoutubeIcon,
  LinkedinIcon,
  InstagramIcon,
} from "@shared-components/graphics/icons";
import { buttonVariants } from "@shared-components/ui/button";
import { cn } from "@shared-components/lib/utils";
import { PrimaryLogo } from "@shared-components/graphics/streamify";
import { HomepageContainer } from "@shared-components/ui/container";
import {
  ThemeTextToggleTabs,
  ThemeIconToggleTabs,
} from "@shared-components/components/theme-switcher";
import { Link } from "@shared-components/ui/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@shared-components/ui/accordion";
import {
  ApplepayLogo,
  GooglepayLogo,
  KlarnaLogo,
  MastercardLogo,
  PaypalLogo,
  SofortLogo,
  VisaLogo,
} from "@shared-components/graphics/logo";
import Newsletter from "@shared-components/forms/email/newsletter";

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
    {
      name: "Instagram",
      href: "#",
      icon: (props: JSX.IntrinsicAttributes) => <InstagramIcon {...props} />,
    },
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
  ],
};

interface FooterHomepageLayoutProps {
  solutions: string;
  solution_2: string;
  solution_1: string;
  solution_3: string;
  solution_4: string;
  support: string;
  pricing: string;
  documentation: string;
  guides: string;
  programs: string;
  company: string;
  about_us: string;
  blog: string;
  jobs: string;
  partners: string;
  legal: string;
  terms_of_services: string;
  privacy_policy: string;
  cookie_policy: string;
  imprint: string;
  title: string;
  description: string;
  notification: string;
  placeholder: string;
  newsletterbutton: string;
}

export function FooterHomepageLayout({
  solutions,
  solution_2,
  solution_1,
  solution_3,
  solution_4,
  support,
  pricing,
  documentation,
  guides,
  programs,
  company,
  about_us,
  blog,
  jobs,
  partners,
  legal,
  terms_of_services,
  privacy_policy,
  cookie_policy,
  imprint,
  title,
  description,
  notification,
  placeholder,
  newsletterbutton,
}: FooterHomepageLayoutProps) {
  return (
    <footer
      className="border-separator bg-foreground bottom-0 z-0 border-t py-10 backdrop-blur-xl"
      aria-labelledby="footer-heading"
    >
      <HomepageContainer>
        <div className="sm:my-4 flex items-center justify-center">
          <PrimaryLogo className="text-action h-8 w-auto" />
        </div>
        <div className="pb-2 pt-4 sm:pt-8">
          <div className="sm:grid sm:grid-cols-3 sm:gap-8">
            <div className="sm:grid grid-cols-2 gap-8 sm:col-span-2 hidden">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-md text-primary font-semibold leading-6 px-2">
                    {solutions}
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <Link
                        href="/sports"
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-md",
                        )}
                      >
                        {solution_1}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/app"
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-md",
                        )}
                      >
                        {solution_2}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/app"
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-md",
                        )}
                      >
                        {solution_3}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/streamify-solution_4"
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-md",
                        )}
                      >
                        {solution_4}
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mt-10 sm:mt-0">
                  <h3 className="text-md text-primary font-semibold leading-6 px-2">
                    {support}
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <Link
                        href="/pricing"
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-md",
                        )}
                      >
                        {pricing}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/documentation"
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-md",
                        )}
                      >
                        {documentation}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/guides"
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-md",
                        )}
                      >
                        {guides}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/programs"
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-md",
                        )}
                      >
                        {programs}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="sm:grid sm:grid-cols-2 sm:gap-8">
                <div>
                  <h3 className="text-md text-primary font-semibold leading-6 px-2">
                    {company}
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <Link
                        href="/about-us"
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-md",
                        )}
                      >
                        {about_us}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog"
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-md",
                        )}
                      >
                        {blog}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/jobs"
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-md",
                        )}
                      >
                        {jobs}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/partners"
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-md",
                        )}
                      >
                        {partners}
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mt-10 sm:mt-0">
                  <h3 className="text-md text-primary font-semibold leading-6 px-2">
                    {legal}
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <Link
                        href="/terms-of-services"
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-md",
                        )}
                      >
                        {terms_of_services}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/privacy-policy"
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-md",
                        )}
                      >
                        {privacy_policy}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/cookie-policy"
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-md",
                        )}
                      >
                        {cookie_policy}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/imprint"
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-md",
                        )}
                      >
                        {imprint}
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
                  {solutions}
                </AccordionTrigger>
                <AccordionContent>
                  <ul role="list">
                    <li>
                      <Link
                        href="/streamify-ott-platform"
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-sm",
                        )}
                      >
                        {solution_1}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/app"
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-sm",
                        )}
                      >
                        {solution_2}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/analytics"
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-sm",
                        )}
                      >
                        {solution_3}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/streamify-solution_4"
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-sm",
                        )}
                      >
                        {solution_4}
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-md text-primary leading-6">
                  {support}
                </AccordionTrigger>
                <AccordionContent>
                  <ul role="list">
                    <li>
                      <Link
                        href="/pricing"
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-sm",
                        )}
                      >
                        {pricing}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/documentation"
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-sm",
                        )}
                      >
                        {documentation}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/guides"
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-sm",
                        )}
                      >
                        {guides}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/programs"
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-sm",
                        )}
                      >
                        {programs}
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-md text-primary leading-6">
                  {company}
                </AccordionTrigger>
                <AccordionContent>
                  <ul role="list">
                    <li>
                      <Link
                        href="/about-us"
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-sm",
                        )}
                      >
                        {about_us}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog"
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-sm",
                        )}
                      >
                        {blog}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/jobs"
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-sm",
                        )}
                      >
                        {jobs}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/partners"
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-sm",
                        )}
                      >
                        {partners}
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-transparent">
                <AccordionTrigger className="text-md text-primary leading-6">
                  {legal}
                </AccordionTrigger>
                <AccordionContent>
                  <ul role="list">
                    <li>
                      <Link
                        href="/terms-of-services"
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-sm",
                        )}
                      >
                        {terms_of_services}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/privacy-policy"
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-sm",
                        )}
                      >
                        {privacy_policy}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/cookie-policy"
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-sm",
                        )}
                      >
                        {cookie_policy}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/imprint"
                        className={cn(
                          buttonVariants({
                            variant: "ghostButton",
                            size: "footerSize",
                          }),
                          "sm:text-sm",
                        )}
                      >
                        {imprint}
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="mt-8 sm:mt-0 sm:border-l border-transparend sm:border-separator">
              <div className="sm:ml-8">
                <h3 className="text-md text-primary sm:font-semibold ront-regular leading-6">
                  {title}
                </h3>
                <p className="text-md text-primary-muted my-4 leading-6">
                  {description}
                </p>
                <Newsletter
                  notification={notification}
                  placeholder={placeholder}
                  newsletterbutton={newsletterbutton}
                />
              </div>
            </div>
          </div>
        </div>
      </HomepageContainer>
    </footer>
  );
}

interface FooterDeclarationLayoutProps {
  company: string;
  all_rights_reserved: string;
  light: string;
  dark: string;
  system: string;
}

export function FooterDeclarationLayout({
  company,
  all_rights_reserved,
  light,
  dark,
  system,
}: FooterDeclarationLayoutProps) {
  return (
    <footer className="border-separator bg-foreground z-0 border-t py-6">
      <HomepageContainer>
        <div className="sm:flex sm:justify-between">
          <div className="w-full flex items-center justify-between">
            <p className="hidden font-regular text-primary-muted text-xs leading-5 sm:order-2 order-1 sm:absolute sm:flex sm:left-1/2 sm:-translate-x-1/2">
              &copy;&nbsp;{company}&nbsp;{new Date().getFullYear()}.&nbsp;
              {all_rights_reserved}
            </p>
            <p className="sm:hidden font-regular text-primary-muted text-xs leading-5 sm:order-2 order-1 sm:absolute flex sm:left-1/2 sm:-translate-x-1/2">
              &copy;&nbsp;{company}&nbsp;{new Date().getFullYear()}
            </p>
            <div className="sm:order-1 order-2 sm:hidden block">
              <ThemeIconToggleTabs />
            </div>
            <div className="sm:order-1 order-2 hidden sm:block">
              <ThemeTextToggleTabs light={light} dark={dark} system={system} />
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
          {/* <div className="sm:order-1 sm:mt-0"><LocaleChoose /></div> */}
          <div className="flex gap-x-2 justify-between sm:order-2">
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

interface FooterPlatformLayoutProps {
  terms_of_services: string;
  privacy_policy: string;
  cookie_policy: string;
  imprint: string;
  cancel_subscription: string;
  support: string;
  sitemap: string;
}

export function FooterPlatformLayout({
  terms_of_services,
  privacy_policy,
  cookie_policy,
  imprint,
  cancel_subscription,
  support,
  sitemap,
}: FooterPlatformLayoutProps) {
  return (
    <footer className="border-separator bg-foreground z-0 border-t">
      <HomepageContainer>
        <div className="mx-auto sm:flex sm:items-center sm:justify-between">
          <nav
            className="text-center my-2 sm:my-4 sm:flex sm:justify-center sm:space-x-10"
            aria-label="Footer"
          >
            <div className="my-4 sm:my-0 sm:space-x-8 sm:flex hidden">
              <Link
                href="/terms-of-services"
                className={cn(
                  buttonVariants({
                    variant: "ghostButton",
                    size: "footerSize",
                  }),
                  "sm:text-sm",
                )}
              >
                {terms_of_services}
              </Link>
              <Link
                href="/privacy-policy"
                className={cn(
                  buttonVariants({
                    variant: "ghostButton",
                    size: "footerSize",
                  }),
                  "sm:text-sm",
                )}
              >
                {privacy_policy}
              </Link>
              <Link
                href="/cookie-policy"
                className={cn(
                  buttonVariants({
                    variant: "ghostButton",
                    size: "footerSize",
                  }),
                  "sm:text-sm",
                )}
              >
                {cookie_policy}
              </Link>
              <Link
                href="/imprint"
                className={cn(
                  buttonVariants({
                    variant: "ghostButton",
                    size: "footerSize",
                  }),
                  "sm:text-sm",
                )}
              >
                {imprint}
              </Link>
              <Link
                href="/cancel-subscription"
                className={cn(
                  buttonVariants({
                    variant: "ghostButton",
                    size: "footerSize",
                  }),
                  "sm:text-sm",
                )}
              >
                {cancel_subscription}
              </Link>
            </div>
            <Accordion
              type="single"
              collapsible
              className="w-full sm:hidden block"
            >
              <AccordionItem value="item-1" className="border-transparent">
                <AccordionTrigger className="text-sm text-primary leading-6">
                  {sitemap}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col items-start">
                    <Link
                      href="/terms-of-services"
                      className={cn(
                        buttonVariants({
                          variant: "ghostButton",
                          size: "footerSize",
                        }),
                        "sm:text-sm",
                      )}
                    >
                      {terms_of_services}
                    </Link>
                    <Link
                      href="/privacy-policy"
                      className={cn(
                        buttonVariants({
                          variant: "ghostButton",
                          size: "footerSize",
                        }),
                        "sm:text-sm",
                      )}
                    >
                      {privacy_policy}
                    </Link>
                    <Link
                      href="/cookie-policy"
                      className={cn(
                        buttonVariants({
                          variant: "ghostButton",
                          size: "footerSize",
                        }),
                        "sm:text-sm",
                      )}
                    >
                      {cookie_policy}
                    </Link>
                    <Link
                      href="/imprint"
                      className={cn(
                        buttonVariants({
                          variant: "ghostButton",
                          size: "footerSize",
                        }),
                        "sm:text-sm",
                      )}
                    >
                      {imprint}
                    </Link>
                    <Link
                      href="/cancel-subscription"
                      className={cn(
                        buttonVariants({
                          variant: "ghostButton",
                          size: "footerSize",
                        }),
                        "sm:text-sm",
                      )}
                    >
                      {cancel_subscription}
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </nav>
          <div className="mb-6 sm:mb-0">
            <Link
              href="/support"
              className={cn(
                buttonVariants({
                  variant: "tertiaryButton",
                  size: "defaultSize",
                }),
                "sm:h-8 sm:w-auto sm:text-sm",
              )}
            >
              {support}
            </Link>
          </div>
        </div>
      </HomepageContainer>
    </footer>
  );
}

interface FooterWebsiteLayoutProps {
  company: string;
  terms_of_services: string;
  privacy_policy: string;
  cookie_policy: string;
  imprint: string;
  cancel_subscription: string;
  sitemap: string;
  light: string;
  dark: string;
  system: string;
}

export function FooterWebsiteLayout({
  company,
  terms_of_services,
  privacy_policy,
  cookie_policy,
  imprint,
  cancel_subscription,
  sitemap,
  light,
  dark,
  system,
}: FooterWebsiteLayoutProps) {
  return (
    <footer className="border-separator bg-foreground z-0 border-t">
      <HomepageContainer>
        <div className="mx-auto sm:flex sm:items-center sm:justify-between">
          <nav
            className="text-center my-2 sm:my-3 sm:flex sm:justify-center sm:space-x-10"
            aria-label="Footer"
          >
            <div className="my-4 sm:my-0 sm:space-x-8 sm:flex hidden">
              <Link
                href="/terms-of-services"
                className={cn(
                  buttonVariants({
                    variant: "ghostButton",
                    size: "footerSize",
                  }),
                )}
              >
                {terms_of_services}
              </Link>
              <Link
                href="/privacy-policy"
                className={cn(
                  buttonVariants({
                    variant: "ghostButton",
                    size: "footerSize",
                  }),
                )}
              >
                {privacy_policy}
              </Link>
              <Link
                href="/cookie-policy"
                className={cn(
                  buttonVariants({
                    variant: "ghostButton",
                    size: "footerSize",
                  }),
                )}
              >
                {cookie_policy}
              </Link>
              <Link
                href="/imprint"
                className={cn(
                  buttonVariants({
                    variant: "ghostButton",
                    size: "footerSize",
                  }),
                )}
              >
                {imprint}
              </Link>
              <Link
                href="/cancel-subscription"
                className={cn(
                  buttonVariants({
                    variant: "ghostButton",
                    size: "footerSize",
                  }),
                )}
              >
                {cancel_subscription}
              </Link>
            </div>
            <Accordion
              type="single"
              collapsible
              className="w-full sm:hidden block"
            >
              <AccordionItem value="item-1" className="border-transparent">
                <AccordionTrigger className="text-sm text-primary-muted leading-6">
                  {sitemap}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col items-start">
                    <Link
                      href="/terms-of-services"
                      className={cn(
                        buttonVariants({
                          variant: "ghostButton",
                          size: "footerSize",
                        }),
                      )}
                    >
                      {terms_of_services}
                    </Link>
                    <Link
                      href="/privacy-policy"
                      className={cn(
                        buttonVariants({
                          variant: "ghostButton",
                          size: "footerSize",
                        }),
                      )}
                    >
                      {privacy_policy}
                    </Link>
                    <Link
                      href="/cookie-policy"
                      className={cn(
                        buttonVariants({
                          variant: "ghostButton",
                          size: "footerSize",
                        }),
                      )}
                    >
                      {cookie_policy}
                    </Link>
                    <Link
                      href="/imprint"
                      className={cn(
                        buttonVariants({
                          variant: "ghostButton",
                          size: "footerSize",
                        }),
                      )}
                    >
                      {imprint}
                    </Link>
                    <Link
                      href="/cancel-subscription"
                      className={cn(
                        buttonVariants({
                          variant: "ghostButton",
                          size: "footerSize",
                        }),
                        "sm:text-xs",
                      )}
                    >
                      {cancel_subscription}
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </nav>
          <div className="mb-6 sm:mb-0">
            <div className="sm:order-1 order-2 sm:hidden block">
              <div className="w-full flex items-center justify-between">
                <p className="sm:hidden font-regular text-primary-muted text-xs leading-5 sm:order-2 order-1 sm:absolute flex sm:left-1/2 sm:-translate-x-1/2">
                  &copy;&nbsp;{company}&nbsp;
                  {new Date().getFullYear()}
                </p>
                <div className="sm:order-1 order-2 sm:hidden block">
                  <ThemeIconToggleTabs />
                </div>
              </div>
            </div>
            <div className="sm:order-1 order-2 hidden sm:block">
              <ThemeTextToggleTabs light={light} dark={dark} system={system} />
            </div>
          </div>
        </div>
      </HomepageContainer>
    </footer>
  );
}
