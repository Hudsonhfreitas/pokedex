import { ChangeEvent, useState } from "react";
import { GoSearch } from "react-icons/go";

import { usePokemon } from "../../hooks/usePokemon";
import { listingPokemons } from "../../services/api";
import * as S from "./styles";

export function Search() {
  const { setErrors, setCurrentTypeFilter, setPokemonsData } = usePokemon();
  const [search, setSearch] = useState("");

  async function handleSearchPokemon() {
    setErrors("");
    setCurrentTypeFilter("");
    try {
      const { name, id, sprites, types } = await listingPokemons(
        `/pokemon/${search}`
      );
      const info = {
        id,
        name,
        image:
          sprites.other.dream_world.front_default !== null
            ? sprites.other.dream_world.front_default
            : sprites.front_default,
        type: types[0].type.name,
      };
      setPokemonsData({
        count: 1,
        next: "",
        pokemons: [info],
      });
    } catch (e) {
      setErrors("Pokémon não encontrado. Tente novamente!");
      console.log(e);
    }
    setSearch("");
  }

  return (
    <S.Container>
      <input
        type="text"
        placeholder="Search name or code"
        value={search}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value.toLowerCase())
        }
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === "Enter") {
            handleSearchPokemon();
          }
        }}
      />
      <S.SearchIcon>
        <GoSearch onClick={handleSearchPokemon} />
      </S.SearchIcon>
    </S.Container>
  );
}
