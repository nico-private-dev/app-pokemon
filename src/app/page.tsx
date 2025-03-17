"use client";
import { useEffect, useState } from "react";
import PokemonList from "@/app/components/PokemonList";
import SearchForm from "@/app/components/SearchForm";
import { fetchPokemons } from "@/lib/pokemon";
import { ProcessedPokemon } from "@/types";
import Image from "next/image";

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
    <>
      <div className="container my-8 mx-auto py-4">
        <div className="flex items-center justify-between mb-6">
          <Image src="/assets/logo-pokedex.svg" alt="Pokedex" width={200} height={200} />
          <h1 className="hidden md:block text-3xl font-bold text-center text-white">Pokémon Search</h1>
        </div>
        <div className="w-full mt-4">
          <SearchForm onSearch={handleSearch} />
        </div>
      </div>
      <div className="container relative rounded-3xl mx-auto py-4 bg-white">
        {loading && (
          <div className="text-center p-4">
            <p>Recherche en cours...</p>
          </div>
        )}
        <div className="px-4">
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          {!loading && !error && <PokemonList pokemons={pokemons} />}
        </div>
      </div>
    </>
  );
}