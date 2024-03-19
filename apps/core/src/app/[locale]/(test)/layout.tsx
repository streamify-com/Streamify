interface PlatformLayoutProps {
  children: React.ReactNode;
}

export default async function PlatformLayout({
  children,
}: PlatformLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col p-8 sm:p-12">
      <main className="flex-1">{children}</main>
    </div>
  );
}
