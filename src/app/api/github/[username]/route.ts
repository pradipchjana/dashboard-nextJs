import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ username: string }> }
) {
  const { username } = await params;

  const response = await fetch(
    `https://api.github.com/users/${username}`
  );

  if (!response.ok) {
    return NextResponse.json(
      { message: "User not found" },
      { status: 404 }
    );
  }

  const user = await response.json();

  return NextResponse.json({
  login: user.login,
  name: user.name,
  avatarUrl: user.avatar_url,
  followers: user.followers,
  following: user.following,
  publicRepos: user.public_repos,
});
}