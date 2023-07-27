"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect, FormEvent } from "react";

type proops = {
  products: Product;
};
function SearchBar() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/${search}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search"></label>

      <input
        className="px-5 py-1 w-2/3 sm:px-5 sm:py-3 
        flex-1 text-zinc-20
          bg-cyan-50 focus:bg-slate-200 rounded-full 
         focus:outline-none focus:ring-[1px]
          focus:ring-green-700 placeholder:text-zinc-400"
        placeholder="Search for product"
        type="text"
        name="search"
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
}
export default SearchBar;
