'use client'

import React, { useEffect, useState } from "react";
import PokemonList from "../components/Pokemon";
import { fetchPokemons } from "../lib/api";
import ImageSlider from '../components/ImageSlider'


export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchPokemons(page).then((data) => setPokemons((prev) => [...prev, ...data]));
  }, [page]);

  const filtered = pokemons.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="grid grid-cols-3 gap-4 p-4">
        <div className="col-span-2">
          <div className="relative w-full h-[400px] bg-gray-200 rounded-lg overflow-hidden">
            <ImageSlider />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="h-[190px] rounded-lg flex items-center justify-center text-white text-xl">
            <img src="/banner-1.jpg" className="h-full w-full object-cover" />
          </div>
          <div className="h-[190px] bg-white-400 rounded-lg flex items-center justify-center text-white text-xl">
            <img src="/pokemon-logo.png" className="h-full w-auto" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 h-screen">
        <aside className="col-span-2 bg-green-300 flex items-center justify-center">
          <img src="/left-banner.jpg" alt="Left Banner" className="h-full w-full object-cover" />
        </aside>

        <main className="col-span-8 overflow-y-auto">
          <div className="w-auto ml-3 mr-3 mb-4 sticky top-0 z-10 bg-white">
            <input
              type="text"
              placeholder="Search Pokémon..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border px-4 py-2 rounded-lg shadow"
            />
          </div>

          <div className="space-y-6 mt-4 p-3">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {filtered.map((p) => <PokemonList key={p.name} pokemon={p} />)}
            </div>

            <button
              onClick={() => setPage(page + 1)}
              className="mt-6 px-4 py-2 bg-blue-600 text-white rounded"
            >
              Load More
            </button>
          </div>
        </main>

        <aside className="col-span-2 bg-blue-300 flex items-center justify-center">
          <img src="/right-banner.jpg" alt="Right Banner" className="h-full w-full object-cover" />
        </aside>
      </div>
    </>
  );
}
