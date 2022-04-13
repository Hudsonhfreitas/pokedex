import { useModal } from "../../hooks/ModalContext";
import { ColorsType } from "../../styles/colors";
import * as S from "./styles";

type CardPokemonParams = {
  pokemonType: keyof ColorsType;
};

export function CardPokemon({ pokemonType }: CardPokemonParams) {

  const { setModalIsOpen } = useModal();

  function handleModal() {
    setModalIsOpen((modalIsOpen) => !modalIsOpen);
  };

  return (
    <S.Container onClick={handleModal}>
      <S.ImgContainer pokemonType={pokemonType}>
        <img />
      </S.ImgContainer>
      <S.Info>
        <div className="text">
          <span>#001</span>
          <h3>Bulbassauro</h3>
        </div>
        <div className="icon">
          <img src={require(`../../assets/filter_icons/dragon.svg`)} alt="pokemon"/>
        </div>
      </S.Info>
    </S.Container>
  );
}
