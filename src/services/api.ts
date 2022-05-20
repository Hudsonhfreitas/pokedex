import axios from "axios";

import { Ability, BaseStatus, Name, PokemonResult, Type } from "../types/types";

type PokemonType = {
  pokemon: PokemonResult;
  url: string;
};

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export async function listingPokemons(endpoint: string) {
  const data = await api.get(endpoint);
  return data.data;
}

export async function getModalData(poke_id: number) {
  const { name, id, sprites, types, abilities, height, weight, stats } =
    await listingPokemons(`pokemon/${poke_id}`);
  const { damage_relations } = await listingPokemons(types[0].type.url);

  const details = {
    id,
    name,
    image:
      sprites.other.dream_world.front_default !== null
        ? sprites.other.dream_world.front_default
        : sprites.front_default,
    types: types.map((item: Type) => item.type.name),
    abilities: abilities.map((ability: Ability) => ability.ability.name),
    height,
    weight,
    weaknesses: damage_relations.double_damage_from.map(
      (item: Name) => item.name
    ),
    stats: stats.map((item: BaseStatus) => ({
      name: item.stat.name,
      value: item.base_stat,
    })),
  };

  return details;
}

export async function getPokemonsDetails(
  pokemons: Array<PokemonType>,
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
