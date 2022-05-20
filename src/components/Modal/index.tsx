import { useEffect, useState } from "react";
import { MdOutlineClose } from "react-icons/md";

import { usePokemon } from "../../hooks/usePokemon";
import { getModalData } from "../../services/api";
import { colors } from "../../styles/colors";
import { PokemonDetails } from "../../types/types";
import { Loader } from "../Loader";
import { TagType } from "../TagType";
import * as S from "./styles";

export function Modal() {
  const { isModalOpen, handleModal } = usePokemon();
  const [isModalLoading, setIsModalLoading] = useState(false);
  const [pokemonModalData, setPokemonModalData] = useState(
    {} as PokemonDetails
  );
  const {
    id,
    image,
    name,
    types,
    abilities,
    height,
    weight,
    weaknesses,
    stats,
  } = pokemonModalData;

  useEffect(() => {
    const { status, pokemon_id } = isModalOpen;

    if (!status || pokemon_id === null) {
      return;
    }

    async function getPokemonModalInfo(id: number) {
      setIsModalLoading(true);
      const response = await getModalData(id);
      setPokemonModalData(response);
      setIsModalLoading(false);
    }

    getPokemonModalInfo(pokemon_id);
  }, [isModalOpen]);

  return (
    <>
      {types ? (
        <S.Container isVisible={isModalOpen.status}>
          <div
            className="overlay"
            onClick={() => handleModal({ status: false, pokemon_id: null })}
          />
          {isModalLoading ? (
            <Loader />
          ) : (
            <S.Box isVisible={isModalOpen.status}>
              <S.CloseModal
                onClick={() => handleModal({ status: false, pokemon_id: null })}
              >
                <MdOutlineClose />
              </S.CloseModal>

              <S.LeftContainer type={types.length > 0 ? types[0] : "grass"}>
                <S.Icon>
                  <img
                    src={require(`../../assets/filter_icons/${types[0]}.svg`)}
                    alt={types[0]}
                  />
                </S.Icon>
                <S.Image>
                  <img src={image} alt={name} />
                </S.Image>
              </S.LeftContainer>

              <S.RightContainer>
                <div className="name">
                  <h2>{name}</h2>
                  <span>
                    {id && id < 10
                      ? `#00${id}`
                      : id < 100
                      ? `#0${id}`
                      : `#${id}`}
                  </span>
                </div>
                <S.TypeList>
                  {types &&
                    types.map((type) => (
                      <li key={type}>
                        <TagType
                          type={type}
                          color={type as keyof typeof colors}
                        />
                      </li>
                    ))}
                </S.TypeList>

                <S.InfoList>
                  <li>
                    <span>Height</span>
                    <strong>{`${height / 10}m`}</strong>
                  </li>
                  <li>
                    <span>Weight</span>
                    <strong>{`${weight / 10}kg`}</strong>
                  </li>
                  <li className="ability">
                    <span>Abilities</span>
                    <strong>{abilities[0]}</strong>
                  </li>
                </S.InfoList>

                <S.Weaknesses>
                  <h4>Weaknesses</h4>
                  <ul>
                    {weaknesses &&
                      weaknesses.map((weakness) => (
                        <li key={weakness}>
                          <TagType
                            type={weakness}
                            color={weakness as keyof typeof colors}
                          />
                        </li>
                      ))}
                  </ul>
                </S.Weaknesses>

                <S.Stats>
                  <h5>Stats</h5>
                  <div className="all-stats">
                    {stats &&
                      stats.map((item) => (
                        <S.StatsItem key={item.name}>
                          <span>
                            {item.name.includes("special-")
                              ? item.name.replace("special-", "sp. ")
                              : item.name}
                          </span>
                          <S.BarStatus percentage={item.value}>
                            <div className="bar" />
                            <ul className="separator">
                              <li />
                              <li />
                              <li />
                              <li />
                            </ul>
                          </S.BarStatus>
                        </S.StatsItem>
                      ))}
                  </div>
                </S.Stats>
              </S.RightContainer>
            </S.Box>
          )}
        </S.Container>
      ) : (
        ""
      )}
    </>
  );
}
