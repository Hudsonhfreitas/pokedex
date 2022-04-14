import * as S from "./styles";
import logo from "../../assets/logo.svg";

export function Header() {
  return (
    <S.Container>
      <div className="container">
        <a href="/">
          <img src={logo} alt="Logo escrito Pokémon em amarelo e bordas azuis"/>
        </a>
        <p>Case Study  ➙  Code<strong>Boost</strong></p>
      </div>
    </S.Container>
  );
}
