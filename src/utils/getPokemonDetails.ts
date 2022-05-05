import { listingPokemons } from "../services/api";
import { PokemonResult } from "../types/types";

type PokemonType = {
  pokemon: PokemonResult;
  url: string;
};

export async function getPokemonsDetails(
  pokemons: Array<PokemonType> | Array<PokemonType>,
  isByType: boolean
) {
  const pokemonsPromise = pokemons.map(async function (pokemon: PokemonType) {
    const { name, id, sprites, types } = await listingPokemons(
      isByType ? pokemon.pokemon.url : pokemon.url
    );
    return {
      id,
      name,
      image:
        sprites.other.dream_world.front_default !== null
          ? sprites.other.dream_world.front_default
          : sprites.front_default,
      type: types[0].type.name,
    };
  });

  const results = Promise.all(pokemonsPromise);

  return results;
}
