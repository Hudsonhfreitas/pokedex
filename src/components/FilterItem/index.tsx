/* eslint-disable global-require */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import { ButtonHTMLAttributes } from "react";

import { ColorsType } from "../../styles/colors";
import * as S from "./styles";

interface AsideButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  currentType?: string;
}

export function FilterItem({ name, currentType, ...props }: AsideButton) {
  return (
    <S.Container
      filterColor={name as keyof ColorsType}
      className={currentType === name ? "active" : ""}
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
