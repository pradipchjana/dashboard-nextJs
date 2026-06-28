"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (!username.trim()) return;

    router.push(`/user/${username}`);
  };

  return (
    <div className="flex gap-3">
      <input
        className="border rounded-lg px-4 py-2 w-80"
        placeholder="GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button
        className="bg-black text-white px-4 py-2 rounded-lg"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}