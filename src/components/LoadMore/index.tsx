import { ButtonHTMLAttributes } from "react";

import * as S from "./styles";

type LoadMoreParams = ButtonHTMLAttributes<HTMLButtonElement>;

export function LoadMore({ ...props }: LoadMoreParams) {
  return <S.Container {...props}>Load more Pokémons</S.Container>;
}
