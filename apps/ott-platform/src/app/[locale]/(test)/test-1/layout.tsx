import { HeaderHome } from "@/components/header-home";
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
      <HeaderHome user={user} />
      <main className="w-screen flex-1 sm:my-20 my-10">{children}</main>
      <Cookie />
      <FooterWebsiteLayout />
    </div>
  );
}
