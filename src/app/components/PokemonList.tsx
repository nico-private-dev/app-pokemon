import { ProcessedPokemon } from '@/types';
import CardPokemon from '@/app/components/cardPokemon';

interface PokemonListProps {
  pokemons: ProcessedPokemon[];
}

export default function PokemonList({ pokemons }: PokemonListProps) {
  return (
    <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {pokemons.map((pokemon) => (
        <CardPokemon key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}