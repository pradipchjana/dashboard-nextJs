import { getUser, getRepositories } from "@/lib/github";
import RepositoryCard from "@/components/RepositoryCard";

type Props = {
  params: Promise<{
    username: string;
  }>;
};

export default async function UserPage({ params }: Props) {
  const { username } = await params;

  const user = await getUser(username);
  const repos = await getRepositories(username);

  return (
    <main>
      <img
        src={user.avatar_url}
        alt={user.login}
        width={100}
        height={100}
      />

      <h1>{user.name}</h1>
      <p>@{user.login}</p>

      <p>Followers: {user.followers}</p>
      <p>Following: {user.following}</p>
      <p>Repos: {user.public_repos}</p>
      <h2>Repositories</h2>

{repos.map((repo: any) => (
  <RepositoryCard
    key={repo.id}
    repo={repo}
  />
))}
    </main>
  );
}