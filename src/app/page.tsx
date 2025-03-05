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
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Pokémon Search</h1>
      <SearchForm onSearch={handleSearch} />
      {loading && (
        <div className="text-center p-4">
          <p>Loading Pokémon data...</p>
        </div>
      )}
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      {!loading && !error && <PokemonList pokemons={pokemons} />}
    </div>
  );
}