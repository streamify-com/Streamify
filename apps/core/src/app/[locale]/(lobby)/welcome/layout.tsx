interface PlatformLayoutProps {
  children: React.ReactNode;
}

export default async function OpenLobbyLayout({
  children,
}: PlatformLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 py-8 sm:py-24">{children}</main>
    </div>
  );
}
