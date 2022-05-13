import { listingPokemons } from "../../services/api";
import { Ability, BaseStatus, Name, Type } from "../../types/types";

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
