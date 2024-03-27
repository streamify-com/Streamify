import FooterDeclarationComponent from "@/components/footer-declaration-component";
import FooterHomeComponent from "@/components/footer-home-component";
import FooterPlatformComponent from "@/components/footer-platform-component";
import FooterWebsiteComponent from "@/components/footer-website-component";
import { FooterPaymentLayout } from "@shared-components/components/footer";
import { currentUser } from "@clerk/nextjs";
import HeaderWebsiteComponent from "@/components/header-website-component";

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
      <main className="flex-1 p-8 sm:p-12">{children}</main>
      <FooterPlatformComponent />
      <FooterWebsiteComponent />
      <FooterHomeComponent />
      <FooterPaymentLayout />
      <FooterDeclarationComponent />
    </div>
  );
}
