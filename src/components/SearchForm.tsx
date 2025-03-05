import { useState } from "react";

const SearchForm = ({ onSearch }) => {
  const [pokemonName, setPokemonName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pokemonName.trim()) {
      onSearch(pokemonName.trim());
      setPokemonName("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mb-4">
      <input
        type="text"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
        placeholder="Enter Pokémon name"
        className="border rounded p-2 mr-2"
      />
      <button type="submit" className="bg-blue-500 text-white rounded p-2">
        Search
      </button>
    </form>
  );
};

export default SearchForm;