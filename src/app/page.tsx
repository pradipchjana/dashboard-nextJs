import SearchBar from "@/components/SearchBar";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">
        GitHub Dashboard
      </h1>

      <SearchBar />
    </main>
  );
}
