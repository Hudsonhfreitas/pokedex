import { ButtonHTMLAttributes } from "react";
import { ColorsType } from "../../styles/colors";
import * as S from "./styles";

interface CardPokemonParams extends ButtonHTMLAttributes<HTMLButtonElement> {
  pokemonId: number;
  name: string;
  pokemonType: keyof ColorsType;
  image: string;
};

export function CardPokemon({ pokemonId, pokemonType, name, image, ...props }: CardPokemonParams) {

  return (
    <S.Container {...props}>
      <S.ImgContainer pokemonType={pokemonType}>
        <img src={image} alt="" />
      </S.ImgContainer>
      <S.Info>
        <div className="text">
          <span>
            { pokemonId && pokemonId < 10 ? `#00${pokemonId}` : ( pokemonId < 100 ? `#0${pokemonId}` : `#${pokemonId}`) }
          </span>
          <h3>{name}</h3>
        </div>
        <div className="icon">
          <img src={require(`../../assets/filter_icons/${pokemonType}.svg`)} alt={name}/>
        </div>
      </S.Info>
    </S.Container>
  );
}
