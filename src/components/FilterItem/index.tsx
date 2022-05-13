import { ButtonHTMLAttributes } from "react";

import { usePokemon } from "../../hooks/usePokemon";
import { ColorsType } from "../../styles/colors";
import * as S from "./styles";

interface AsideButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
}

export function FilterItem({ name, ...props }: AsideButton) {
  const { currentTypeFilter } = usePokemon();
  return (
    <S.Container
      filterColor={name as keyof ColorsType}
      className={currentTypeFilter === name ? "active" : ""}
      {...props}
    >
      <img src={require(`../../assets/filter_icons/${name}.svg`)} alt={name} />
      {name}
    </S.Container>
  );
}
