import { ColorsType } from "../../styles/colors";
import * as S from "./styles";

type CardPokemonParams = {
  pokemonType: keyof ColorsType;
};

export function CardPokemon({ pokemonType }: CardPokemonParams) {
  return (
    <S.Container>
      <S.ImgContainer pokemonType={pokemonType}>
        <img />
      </S.ImgContainer>
      <S.Info>
        <div className="text">
          <span>#001</span>
          <h3>Bulbassauro</h3>
        </div>
        <div className="icon">
          <img src={require(`../../assets/filter_icons/dragon.svg`)} />
        </div>
      </S.Info>
    </S.Container>
  );
}
