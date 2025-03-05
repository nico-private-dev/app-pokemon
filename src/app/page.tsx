import { useState } from "react";
import SearchForm from "@/components/SearchForm";
import PokemonList from "@/components/PokemonList";

export default function Home() {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (name) => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(`/api/pokemon?name=${name}`);
      if (!response.ok) {
        throw new Error("Pokémon not found");
      }
      const data = await response.json();
      setPokemonData([data]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center">Pokémon Search</h1>
      <SearchForm onSearch={handleSearch} />
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}
      <PokemonList pokemon={pokemonData} />
    </div>
  );
}