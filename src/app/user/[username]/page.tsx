import { getUser, getRepositories } from "@/lib/github";
import RepositoryCard from "@/components/RepositoryCard";
import { GithubRepository } from "@/types/github";

type Props = {
  params: {
    username: string;
  };
};

export default async function UserPage({ params }: Props) {
  const { username } = await params;
  const [user, repos] = await Promise.all([
    getUser(username),
    getRepositories(username),
  ]);

  const sortedRepos = [...repos].sort(
    (a, b) => b.stargazers_count - a.stargazers_count
  );

  return (
    <main className="min-h-screen bg-slate-950/70 py-10 text-slate-100">
      <div className="mx-auto w-full max-w-6xl space-y-8 px-4 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] border border-slate-700/70 bg-slate-950/85 p-8 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.9)] backdrop-blur-xl sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-6">
              <img
                src={user.avatar_url}
                alt={user.name ?? user.login}
                width={120}
                height={120}
                className="h-28 w-28 rounded-full border-4 border-slate-800 object-cover shadow-lg"
              />
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-sky-300/80">
                  GitHub Profile
                </p>
                <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                  {user.name ?? user.login}
                </h1>
                <p className="mt-2 text-slate-400">@{user.login}</p>
              </div>
            </div>

            <div className="grid w-full grid-cols-3 gap-3 sm:w-auto">
              <div className="rounded-3xl bg-slate-900/90 px-5 py-4 text-center">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
                  Followers
                </p>
                <p className="mt-3 text-2xl font-semibold text-white">
                  {user.followers}
                </p>
              </div>
              <div className="rounded-3xl bg-slate-900/90 px-5 py-4 text-center">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
                  Following
                </p>
                <p className="mt-3 text-2xl font-semibold text-white">
                  {user.following}
                </p>
              </div>
              <div className="rounded-3xl bg-slate-900/90 px-5 py-4 text-center">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
                  Repos
                </p>
                <p className="mt-3 text-2xl font-semibold text-white">
                  {user.public_repos}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-sky-300/80">
                Repositories
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-white">
                Top repositories
              </h2>
            </div>
            <p className="text-sm text-slate-400">
              Sorted by stars for quick discovery.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {sortedRepos.map((repo: GithubRepository) => (
              <RepositoryCard key={repo.id} repo={repo} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
