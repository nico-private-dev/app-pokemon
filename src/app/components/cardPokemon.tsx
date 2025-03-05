import { ProcessedPokemon } from '@/types';

interface CardPokemonProps {
  pokemon: ProcessedPokemon;
}

export default function CardPokemon({ pokemon }: CardPokemonProps) {
  const getBackgroundColor = (types: string[]) => {
    const primaryType = types[0];
    return `bg-${primaryType}`;
  };

  return (
    <div className="relative rounded-lg shadow-lg hover:shadow-xl transition-shadow p-4">
        <div className={`border-circle-effect absolute bottom-0 left-0 right-0 top-0 z-0 ${getBackgroundColor(pokemon.types)}`}></div>
      <div className="aspect-square z-1 relative">
            <img
            src={pokemon.image}
            alt={pokemon.name}
            className="w-full h-full object-contain"
            />
      </div>
      <div className="mt-4 z-1 relative">
            <h2 className="text-xl font-bold capitalize text-center text-white">{pokemon.name}</h2>
            <div className="flex gap-2 justify-center mt-2">
            {pokemon.types.map((type) => (
                <span
                key={type}
                className="px-3 py-1 rounded-full text-sm capitalize bg-white/30 text-white"
                >
                {type}
                </span>
            ))}
            </div>
      </div>
    </div>
  );
}