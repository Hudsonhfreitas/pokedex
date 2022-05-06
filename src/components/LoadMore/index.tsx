import { ButtonHTMLAttributes, ReactNode } from "react";

import * as S from "./styles";

interface LoadMoreParams extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function LoadMore({ children, ...props }: LoadMoreParams) {
  return <S.Container {...props}>{children}</S.Container>;
}
