import { ProcessedPokemon } from '@/types';

interface CardPokemonProps {
  pokemon: ProcessedPokemon;
}

export default function CardPokemon({ pokemon }: CardPokemonProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow">
      <div className="relative aspect-square">
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold capitalize text-center">{pokemon.name}</h2>
        <div className="flex gap-2 justify-center mt-2">
          {pokemon.types.map((type) => (
            <span
              key={type}
              className="px-3 py-1 rounded-full text-sm capitalize bg-gray-200"
            >
              {type}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}