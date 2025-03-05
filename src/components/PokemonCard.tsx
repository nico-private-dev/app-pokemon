import React from 'react';

interface PokemonCardProps {
  name: string;
  image: string;
  types: string[];
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, image, types }) => {
  return (
    <div className="border rounded-lg shadow-md p-4">
      <img src={image} alt={name} className="w-full h-auto" />
      <h2 className="text-lg font-bold mt-2">{name}</h2>
      <div className="flex flex-wrap mt-1">
        {types.map((type) => (
          <span key={type} className="bg-gray-200 text-gray-800 rounded-full px-2 py-1 text-sm mr-2">
            {type}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;