import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

interface SearchFormProps {
  onSearch: (name: string) => void;
}

export default function SearchForm({ onSearch }: SearchFormProps) {
  const [search, setSearch] = useState('');
  const [previousSearch, setPreviousSearch] = useState('');

  // Effet pour gérer le cas où l'utilisateur efface sa recherche
  useEffect(() => {
    // Si le champ est vide et qu'il y avait une recherche précédente
    if (search === '' && previousSearch !== '') {
      // Déclencher une recherche vide pour afficher tous les Pokémon
      onSearch('');
    }
    
    // Mettre à jour la recherche précédente
    setPreviousSearch(search);
  }, [search, previousSearch, onSearch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      onSearch(search.trim());
      // Ne pas effacer le champ après la recherche
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleClear = () => {
    setSearch('');
    onSearch('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center">
        <div className="flex items-center inset-shadow-lg rounded-3xl ring-2 ring-gray-200 w-full md:w-96">
          <input
            type="text"
            value={search}
            onChange={handleChange}
            placeholder="Pikachu, Bulbasaur..."
            className="w-full md:w-96 px-4 py-2 rounded-tl-full rounded-bl-full focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
          {search && (
            <button
              type="button"
              onClick={handleClear}
              className="px-4 py-2 bg-white text-gray-500 hover:text-red-500"
            >
              ✕
            </button>
          )}
          <button
            type="submit"
            className="px-4 py-2 bg-white text-red-500 rounded-tr-full rounded-br-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Search />
          </button>
        </div>
      </div>
    </form>
  );
}