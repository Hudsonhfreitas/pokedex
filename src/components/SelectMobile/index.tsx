import { usePokemon } from "../../hooks/usePokemon";
import { types } from "../../utils/pokemonArrayTypes";
import { FilterItem } from "../FilterItem";
import * as S from "./styles";

type SelectMobileProps = {
  isSelectOpen: boolean;
  handleSelectMobile: (state: boolean) => void;
};

export function SelectMobile({
  isSelectOpen,
  handleSelectMobile,
}: SelectMobileProps) {
  const { currentTypeFilter, handleCurrentTypeFilter } = usePokemon();

  function changeFilter(type: string) {
    handleCurrentTypeFilter(type);
    handleSelectMobile(false);
  }

  return (
    <S.Container isSelectOpen={isSelectOpen}>
      <button type="button" onClick={() => handleSelectMobile(!isSelectOpen)}>
        <span>Show</span>
        <strong>{currentTypeFilter}</strong>
      </button>
      <ul>
        {types.map((type) => (
          <li key={type}>
            <FilterItem name={type} onClick={() => changeFilter(type)} />
          </li>
        ))}
      </ul>
    </S.Container>
  );
}
