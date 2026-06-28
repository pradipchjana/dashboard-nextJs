import { GithubRepository, GithubUser } from "@/types/github";

export async function getUser(username: string):Promise<GithubUser> {
    await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(
    `https://api.github.com/users/${username}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("User not found");
  }

  return response.json();
}

export async function getRepositories(username: string):Promise<GithubRepository[]> {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch repositories");
  }

  return response.json();
}