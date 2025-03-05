import { Pokemon, ProcessedPokemon } from "@/types";

// Fonction pour récupérer les détails d'un Pokémon
async function getPokemonDetails(nameOrUrl: string): Promise<ProcessedPokemon> {
  try {
    let url = nameOrUrl;
    
    // Si c'est un nom et pas une URL
    if (!url.startsWith('http')) {
      url = `/api/pokemon?name=${encodeURIComponent(nameOrUrl.toLowerCase())}`;
    }
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Pokemon not found: ${nameOrUrl}`);
    }
    
    const pokemon: Pokemon = await response.json();
    
    return {
      name: pokemon.name,
      image: pokemon.sprites.front_default,
      types: pokemon.types.map(typeInfo => typeInfo.type.name)
    };
  } catch (error) {
    console.error(`Error fetching pokemon ${nameOrUrl}:`, error);
    throw error;
  }
}

// Fonction principale pour récupérer les Pokémons
export async function fetchPokemons(name?: string): Promise<ProcessedPokemon[]> {
  try {
    if (name) {
      // Recherche par nom
      const pokemonData = await getPokemonDetails(name);
      return [pokemonData];
    } else {
      // Liste des Pokémons
      const response = await fetch('/api/pokemon');
      
      if (!response.ok) {
        throw new Error('Failed to fetch Pokémon list');
      }
      
      const data = await response.json();
      const results = data.results || [];
      
      // Récupérer les détails pour chaque Pokémon
      const pokemonDetailsPromises = results.map((pokemon: { url: string }) => 
        getPokemonDetails(pokemon.url)
      );
      
      return await Promise.all(pokemonDetailsPromises);
    }
  } catch (error) {
    console.error('Error fetching Pokémons:', error);
    throw error;
  }
}