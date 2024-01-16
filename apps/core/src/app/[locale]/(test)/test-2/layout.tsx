import { currentUser } from "@clerk/nextjs";
import { FooterWebsiteLayout } from "@/components/footer";
import Cookie from "@/components/cookie";

interface PlatformLayoutProps {
  children: React.ReactNode;
}

export default async function PricingLayout({ children }: PlatformLayoutProps) {
  const user = await currentUser();

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 w-screen sm:my-20 my-10">{children}</main>
      <Cookie />
      <FooterWebsiteLayout />
    </div>
  );
}
