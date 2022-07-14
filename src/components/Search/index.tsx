import { ChangeEvent, useState } from "react";
import { GoSearch } from "react-icons/go";

import { usePokemon } from "../../hooks/usePokemon";
import { listingPokemons } from "../../services/api";
import * as S from "./styles";

export function Search() {
  const {
    handleErrors,
    handleCurrentTypeFilter,
    handlePokemonsData,
    handleSearching,
  } = usePokemon();
  const [search, setSearch] = useState("");

  async function handleSearchPokemon(): Promise<void> {
    handleErrors("");
    handleCurrentTypeFilter("");
    handleSearching(true);
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
      handlePokemonsData({
        count: 1,
        next: "",
        pokemons: [info],
      });
    } catch (e) {
      handleErrors("Pokémon não encontrado. Tente novamente!");
      console.log(e);
    }
    setSearch("");
    handleSearching(false);
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
