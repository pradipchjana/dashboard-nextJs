"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    const trimmed = username.trim();
    if (!trimmed) return;

    router.push(`/user/${trimmed}`);
  };

  return (
    <div className="flex w-full flex-col gap-3 sm:flex-row">
      <label className="sr-only" htmlFor="github-username">
        GitHub username
      </label>
      <input
        id="github-username"
        className="w-full rounded-3xl border border-slate-700/80 bg-slate-950/90 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/20"
        placeholder="GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") handleSearch();
        }}
      />

      <button
        className="inline-flex items-center justify-center rounded-3xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/50"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}
