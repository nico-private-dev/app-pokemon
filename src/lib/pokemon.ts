import { ProcessedPokemon } from "@/types";

const BASE_URL = "https://pokeapi.co/api/v2";

export async function fetchPokemons(search?: string): Promise<ProcessedPokemon[]> {
  try {
    if (search) {
      const response = await fetch(`${BASE_URL}/pokemon/${search.toLowerCase()}`);
      if (!response.ok) throw new Error('Pokemon not found');
      const pokemon = await response.json();
      return [{
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.other['official-artwork'].front_default,
        types: pokemon.types.map((type: any) => type.type.name)
      }];
    }

    const response = await fetch(`${BASE_URL}/pokemon?limit=1300`);
    const data = await response.json();
    
    const pokemonDetails = await Promise.all(
      data.results.map(async (pokemon: any) => {
        const res = await fetch(pokemon.url);
        return res.json();
      })
    );

    return pokemonDetails.map((pokemon) => ({
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon.sprites.other['official-artwork'].front_default,
      types: pokemon.types.map((type: any) => type.type.name)
    }));
  } catch (error) {
    console.error('Error fetching pokemon:', error);
    throw error;
  }
}