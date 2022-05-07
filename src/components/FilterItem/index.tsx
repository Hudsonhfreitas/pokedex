import { ButtonHTMLAttributes, useContext } from "react";

import { PokemonContext } from "../../contexts/pokemonContext";
import { ColorsType } from "../../styles/colors";
import * as S from "./styles";

interface AsideButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
}

export function FilterItem({ name, ...props }: AsideButton) {
  const { currentTypeFilter } = useContext(PokemonContext);
  return (
    <S.Container
      filterColor={name as keyof ColorsType}
      className={currentTypeFilter === name ? "active" : ""}
      {...props}
    >
      <img
        // eslint-disable-next-line import/no-dynamic-require
        src={require(`../../assets/filter_icons/${name}.svg`)}
        alt={name}
      />
      {name}
    </S.Container>
  );
}
