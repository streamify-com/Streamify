import { Link } from "@shared-components/ui/link";
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
          <h1 className="text-primary text-4xl font-semibold sm:text-5xl">
            {title}
          </h1>
          <div className="mx-auto my-6 px-8 text-center sm:px-20 lg:px-44">
            <h3 className="text-md md:text-lg">{description}</h3>
          </div>
        </div>
        <div className="mx-auto pb-20 text-center">
          <div className="flex-col gap-4 space-y-4 sm:flex sm:flex-row sm:items-center sm:justify-center sm:space-x-4 sm:space-y-0">
            <Link
              href="/"
              className={cn(
                buttonVariants({
                  variant: "primaryButton",
                  size: "defaultSize",
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
                  size: "defaultSize",
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
