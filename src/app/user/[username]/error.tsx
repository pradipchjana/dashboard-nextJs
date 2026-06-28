"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main className="min-h-screen bg-slate-950/70 py-10 text-slate-100">
      <div className="mx-auto w-full max-w-3xl rounded-[2rem] border border-slate-700/70 bg-slate-950/85 p-10 text-center shadow-[0_30px_80px_-40px_rgba(15,23,42,0.9)] backdrop-blur-xl">
        <span className="mb-4 inline-flex rounded-full bg-sky-500/15 px-4 py-1 text-sm font-medium text-sky-300">
          Error
        </span>
        <h1 className="text-3xl font-semibold text-white sm:text-4xl">
          Something went wrong
        </h1>
        <p className="mt-4 text-slate-400">
          {error?.message ?? "Unable to load the profile. Please try again."}
        </p>
        <button
          className="mt-8 inline-flex rounded-3xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/50"
          onClick={() => reset()}
        >
          Try again
        </button>
      </div>
    </main>
  );
}
