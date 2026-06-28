export async function getUser(username: string) {
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