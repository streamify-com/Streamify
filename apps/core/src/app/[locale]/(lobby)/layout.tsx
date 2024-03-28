import FooterDeclarationComponent from "@/components/footer-declaration-component";
import FooterHomeComponent from "@/components/footer-home-component";
import { FooterPaymentLayout } from "@shared-components/components/footer";
import { currentUser } from "@clerk/nextjs";
import HeaderWebsiteComponent from "@/components/header-website-component";
import CookieBannerComponent from "@/components/cookie-banner-component";

interface PlatformLayoutProps {
  children: React.ReactNode;
}

export default async function OpenLobbyLayout({
  children,
}: PlatformLayoutProps) {
  const user = await currentUser();

  return (
    <div className="flex min-h-screen flex-col">
      <HeaderWebsiteComponent user={user} />
      <main className="flex-1 py-8 sm:py-24">{children}</main>
      <CookieBannerComponent />
      <FooterHomeComponent />
      <FooterPaymentLayout />
      <FooterDeclarationComponent />
    </div>
  );
}
