import * as S from "./styles";
import logo from "../../assets/logo.svg";

export function Header() {
  return (
    <S.Container>
      <a href="/">
        <img alt="Logo escrito Pokémon" src={logo} />
      </a>
    </S.Container>
  );
}
