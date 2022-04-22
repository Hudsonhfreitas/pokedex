import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { GoSearch } from "react-icons/go";

import * as S from "./styles";

type SearchParams = {
  value: string;
  setSearch: Dispatch<SetStateAction<string>>;
  handleSearchPokemon: () => void;
};

export function Search({
  value,
  setSearch,
  handleSearchPokemon,
}: SearchParams) {
  return (
    <S.Container>
      <input
        type="text"
        placeholder="Search name or code"
        value={value}
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
