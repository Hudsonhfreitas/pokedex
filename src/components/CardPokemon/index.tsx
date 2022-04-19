import { useModal } from "../../hooks/ModalContext";
import { ColorsType } from "../../styles/colors";
import * as S from "./styles";

type CardPokemonParams = {
  id: number;
  name: string;
  pokemonType: keyof ColorsType;
  image: string;
};

export function CardPokemon({ id, pokemonType, name, image }: CardPokemonParams) {
  const { setModalIsOpen } = useModal();

  function handleModal() {
    setModalIsOpen((modalIsOpen) => !modalIsOpen);
  };

  return (
    <S.Container onClick={handleModal}>
      <S.ImgContainer pokemonType={pokemonType}>
        <img src={image} alt="" />
      </S.ImgContainer>
      <S.Info>
        <div className="text">
          <span>
            { id && id < 10 ? `#00${id}` : ( id < 100 ? `#0${id}` : `#${id}`) }
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
