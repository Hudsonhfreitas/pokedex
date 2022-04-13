import { ColorsType } from "../../styles/colors";

import * as S from "./styles";

type AsideButton = {
  name: string;
  filterColor: keyof ColorsType;
};

export function FilterItem({ name, filterColor }: AsideButton) {
  return (
    <S.Container filterColor={filterColor}>
      <img src={require(`../../assets/filter_icons/${name}.svg`)} />
      {name}
    </S.Container>
  );
}
