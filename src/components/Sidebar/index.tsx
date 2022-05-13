import { RefObject } from "react";

import { usePokemon } from "../../hooks/usePokemon";
import { types } from "../../utils/pokemonArrayTypes";
import { FilterItem } from "../FilterItem";
import * as S from "./styles";

interface SidebarProps {
  topRef: RefObject<HTMLElement>;
}

export function Sidebar({ topRef }: SidebarProps) {
  const { handleCurrentTypeFilter, handleErrors } = usePokemon();

  function handleFilterItemClick(item: string) {
    handleErrors("");
    handleCurrentTypeFilter(item);
    if (topRef && topRef.current) {
      topRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  return (
    <S.Container>
      <ul>
        {types.map((item: string) => (
          <li key={item}>
            <FilterItem
              name={item}
              onClick={() => handleFilterItemClick(item)}
            />
          </li>
        ))}
      </ul>
    </S.Container>
  );
}
