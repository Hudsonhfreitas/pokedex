import { Dispatch, SetStateAction } from "react";
import { GoSearch } from "react-icons/go";

import * as S from "./styles";

type SearchParams = {
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
};

export function Search({ value, onChange }: SearchParams) {
  return (
    <S.Container>
      <input
        type="text"
        placeholder="Search name or code"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <S.SearchIcon>
        <GoSearch />
      </S.SearchIcon>
    </S.Container>
  );
}
