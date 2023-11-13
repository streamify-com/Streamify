import Header from "@/components/header";
import {
  FooterDeclarationLayout,
  FooterPaymentLayout,
  FooterPlatformLayout,
} from "@/components/footer";
import { currentUser } from "@clerk/nextjs";
import Cookie from "@/components/cookie";
import TopBar from "@/components/header/top-bar";

interface PlatformLayoutProps {
  children: React.ReactNode;
}

export default async function PlatformLayout({
  children,
}: PlatformLayoutProps) {
  const user = await currentUser();

  return (
    <div className="flex min-h-screen flex-col h-[2000px]">
      {/* <TopBar /> */}
      <Header user={user} />
      <main className="flex-1 my-10">{children}</main>
      <Cookie />
      <FooterPlatformLayout />
      <FooterPaymentLayout />
      <FooterDeclarationLayout />
    </div>
  );
}
