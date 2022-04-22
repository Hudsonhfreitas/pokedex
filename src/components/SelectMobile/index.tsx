/* eslint-disable react/button-has-type */
import { Dispatch, SetStateAction } from "react";

import { types } from "../../utils/pokemonTypes";
import { FilterItem } from "../FilterItem";
import * as S from "./styles";

type SelectMobileProps = {
  currentType: string;
  setCurrentTypeFilter: Dispatch<SetStateAction<string>>;
  isSelectOpen: boolean;
  setIsSelectMobileOpen: Dispatch<SetStateAction<boolean>>;
};

export function SelectMobile({
  currentType,
  setCurrentTypeFilter,
  isSelectOpen,
  setIsSelectMobileOpen,
}: SelectMobileProps) {
  function handleFilter(type: string) {
    setCurrentTypeFilter(type);
    setIsSelectMobileOpen(false);
  }

  return (
    <S.Container isSelectOpen={isSelectOpen}>
      <button onClick={() => setIsSelectMobileOpen(!isSelectOpen)}>
        <span>Show</span>
        <strong>All</strong>
      </button>
      <ul>
        {types.map((type) => (
          <li key={type}>
            <FilterItem
              onClick={() => handleFilter(type)}
              name={type}
              currentType={currentType}
            />
          </li>
        ))}
      </ul>
    </S.Container>
  );
}
