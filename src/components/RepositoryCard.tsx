import { GithubRepository } from "@/types/github";

type RepositoryCardProps = {
  repo: GithubRepository;
};

export default function RepositoryCard({ repo }: RepositoryCardProps) {
  return (
    <article className="group rounded-[1.75rem] border border-slate-700/60 bg-slate-950/90 p-6 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.9)] transition duration-300 hover:-translate-y-1 hover:border-sky-500/70 hover:bg-slate-900/95">
      <div className="flex items-start justify-between gap-4">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className="text-xl font-semibold text-white transition hover:text-sky-300"
        >
          {repo.name}
        </a>
        <span className="rounded-full border border-slate-700/70 bg-slate-900/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
          {repo.language ?? "Unknown"}
        </span>
      </div>

      <p className="mt-4 min-h-[3rem] text-sm leading-6 text-slate-400">
        {repo.description ?? "No description available."}
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-300">
        <span className="inline-flex items-center gap-2 rounded-2xl bg-slate-900/80 px-3 py-2">
          ⭐ {repo.stargazers_count}
        </span>
        <span className="inline-flex items-center gap-2 rounded-2xl bg-slate-900/80 px-3 py-2">
          🍴 {repo.forks_count}
        </span>
        <span className="rounded-2xl bg-slate-900/80 px-3 py-2">
          Updated {new Date(repo.updated_at).toLocaleDateString()}
        </span>
      </div>
    </article>
  );
}
