export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-6 md:py-10 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl">
        {children}
      </div>
    </section>
  );
}