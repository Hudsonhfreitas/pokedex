import { Dispatch, SetStateAction } from "react";

import { usePokemon } from "../../hooks/usePokemon";
import { types } from "../../utils/pokemonArrayTypes";
import { FilterItem } from "../FilterItem";
import * as S from "./styles";

type SelectMobileProps = {
  isSelectOpen: boolean;
  setIsSelectMobileOpen: Dispatch<SetStateAction<boolean>>;
};

export function SelectMobile({
  isSelectOpen,
  setIsSelectMobileOpen,
}: SelectMobileProps) {
  const { currentTypeFilter, handleCurrentTypeFilter } = usePokemon();

  function handleFilter(type: string) {
    handleCurrentTypeFilter(type);
    setIsSelectMobileOpen(false);
  }

  return (
    <S.Container isSelectOpen={isSelectOpen}>
      <button
        type="button"
        onClick={() => setIsSelectMobileOpen(!isSelectOpen)}
      >
        <span>Show</span>
        <strong>{currentTypeFilter}</strong>
      </button>
      <ul>
        {types.map((type) => (
          <li key={type}>
            <FilterItem onClick={() => handleFilter(type)} name={type} />
          </li>
        ))}
      </ul>
    </S.Container>
  );
}
