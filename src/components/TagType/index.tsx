import { colors } from "../../styles/colors";
import * as S from "./styles";

type TagTypeProps = {
  type: string;
  color: keyof typeof colors;
};

export function TagType({ type, color }: TagTypeProps) {
  return <S.Container color={color}>{type}</S.Container>;
}
