import { useEffect, useState } from "react";
import PokemonList from "@/components/PokemonList";
import SearchForm from "@/components/SearchForm";
import { fetchPokemons } from "@/lib/pokemon";

export default function PokemonPage() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPokemons = async () => {
      try {
        const data = await fetchPokemons();
        setPokemons(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadPokemons();
  }, []);

  const handleSearch = async (name) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchPokemons(name);
      setPokemons(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Pokémon Search</h1>
      <SearchForm onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <PokemonList pokemons={pokemons} />
    </div>
  );
}