export default function PokemonList({ pokemon }) {
  return (
    <div className="border border-gray-300 p-2 rounded-lg shadow grid grid-cols-2 gap-2">
      <div>
      <img src={pokemon.image} alt={pokemon.name} className="h-24 mx-auto" />
      </div>
      <div>
      <h3 className="text-lg font-bold text-center capitalize">{pokemon.name}</h3>
      <div className="flex justify-center gap-2 mt-2">
        {pokemon.types.map((type) => (
          <span key={type} className="px-2 py-1 text-xs bg-gray-200 rounded">
            {type}
          </span>
        ))}
      </div>
      </div>
    </div>
  );
}
