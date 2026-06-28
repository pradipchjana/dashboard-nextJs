type RepositoryCardProps = {
  repo: any;
};

export default function RepositoryCard({
  repo,
}: RepositoryCardProps) {
  return (
    <div>
      <h3>{repo.name}</h3>

      <p>{repo.description}</p>

      <p>{repo.language}</p>

      <p>⭐ {repo.stargazers_count}</p>

      <p>🍴 {repo.forks_count}</p>
    </div>
  );
}