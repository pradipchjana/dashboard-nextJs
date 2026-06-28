type Props = {
  params: Promise<{
    username: string;
  }>;
};

export default async function UserPage({ params }: Props) {
  const { username } = await params;

  return (
    <main>
      <h1>User: {username}</h1>
    </main>
  );
}