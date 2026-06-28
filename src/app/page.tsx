import SearchBar from "@/components/SearchBar";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_28%),linear-gradient(180deg,#020617,_#0f172a)] px-4 py-16 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 rounded-[2rem] border border-slate-700/70 bg-slate-950/85 p-10 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.9)] backdrop-blur-xl">
        <div className="space-y-6">
          <span className="inline-flex rounded-full bg-sky-500/15 px-4 py-1 text-sm font-medium text-sky-300">
            Discover GitHub profiles
          </span>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Search public GitHub users and repositories.
            </h1>
          </div>
        </div>

        <div className="w-full">
          <SearchBar />
        </div>
      </div>
    </main>
  );
}
