export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-5xl mx-auto p-8">
      {children}
    </div>
  );
}