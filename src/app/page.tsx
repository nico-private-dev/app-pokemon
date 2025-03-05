"use client";
import { useEffect, useState } from "react";
import PokemonList from "@/app/components/PokemonList";
import SearchForm from "@/app/components/SearchForm";
import { fetchPokemons } from "@/lib/pokemon";
import { ProcessedPokemon } from "@/types";

export default function PokemonPage() {
  const [pokemons, setPokemons] = useState<ProcessedPokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPokemons = async () => {
      try {
        const data = await fetchPokemons();
        setPokemons(data);
      } catch (err) {
        setError("Failed to load Pokémon.");
      } finally {
        setLoading(false);
      }
    };

    loadPokemons();
  }, []);

  const handleSearch = async (name: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchPokemons(name);
      setPokemons(data);
    } catch (err) {
      setError("Pokémon not found. Please check the name.");
      setPokemons([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container relative rounded-3xl my-8 mx-auto pb-4">
      <div className="poligone-effect absolute inset-0 bg-[#DC0A2D]"></div>
      <div className="w-[70%] bg-white rounded-ss-3xl">
        <h1 className="text-3xl font-bold mb-4 text-center text-white">Pokémon Search</h1>
        <SearchForm onSearch={handleSearch} />
      </div>
      {loading && (
        <div className="text-center p-4">
          <p>Recherche en cours...</p>
        </div>
      )}
      <div className="px-16">
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {!loading && !error && <PokemonList pokemons={pokemons} />}
      </div>
    </div>
  );
}