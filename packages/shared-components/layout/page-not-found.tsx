import Link from "next-intl/link";
import { cn } from "@shared-components/lib/utils";
import { buttonVariants } from "@shared-components/ui/button";

interface PageNotFoundLayoutProps {
  message: string;
  title: string;
  description: string;
  button_homepage_name: string;
  button_support_name: string;
}

export default function PageNotFoundLayout({
  message,
  title,
  description,
  button_homepage_name,
  button_support_name,
}: PageNotFoundLayoutProps) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="grid place-items-center text-center">
        <div className="text-action mx-auto mt-10 py-8 text-3xl">{message}</div>
        <div className="mx-auto text-center">
          <h1 className="text-primary text-4xl font-bold md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <div className="mx-auto my-6 px-8 text-center md:px-20 xl:px-44">
            <h3 className="text-md lg:text-lg">{description}</h3>
          </div>
        </div>
        <div className="mx-auto pb-20 text-center">
          <div className="flex-col gap-4 space-y-4 md:flex md:flex-row md:items-center md:justify-center md:space-x-4 md:space-y-0">
            <Link
              href="/"
              className={cn(
                buttonVariants({
                  variant: "primaryButton",
                  size: "fixedSize",
                }),
              )}
            >
              {button_homepage_name}
            </Link>
            <Link
              href="/support"
              className={cn(
                buttonVariants({
                  variant: "secondaryButton",
                  size: "fixedSize",
                }),
              )}
            >
              {button_support_name}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
