import { ButtonHTMLAttributes } from "react";

import { usePokemon } from "../../hooks/usePokemon";
import { colors } from "../../styles/colors";
import * as S from "./styles";

interface AsideButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
}

export function FilterItem({ name, ...props }: AsideButton) {
  const { currentTypeFilter } = usePokemon();
  return (
    <S.Container
      filterColor={name as keyof typeof colors}
      className={currentTypeFilter === name ? "active" : ""}
      {...props}
    >
      <img src={require(`../../assets/filter_icons/${name}.svg`)} alt={name} />
      <span>{name}</span>
    </S.Container>
  );
}
