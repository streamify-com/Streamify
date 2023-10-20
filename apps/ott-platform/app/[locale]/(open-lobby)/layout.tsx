import Header from "@/components/layout/header";
import {
  FooterDeclarationLayout,
  FooterPaymentLayout,
  FooterPlatformLayout,
} from "@/components/layout/footer";
import { currentUser } from "@clerk/nextjs";
import Cookie from "@/components/feature/cookie";

interface PlatformLayoutProps {
  children: React.ReactNode;
}

export default async function PlatformLayout({
  children,
}: PlatformLayoutProps) {
  const user = await currentUser();

  return (
    <div className="flex min-h-screen flex-col">
      <Header user={user} />
      <main className="flex-1 my-10">{children}</main>
      <Cookie />
      <FooterPlatformLayout />
      <FooterPaymentLayout />
      <FooterDeclarationLayout />
    </div>
  );
}
