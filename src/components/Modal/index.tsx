/* eslint-disable global-require */
/* eslint-disable react/jsx-no-bind */
import { MdOutlineClose } from "react-icons/md";

import { useModal } from "../../hooks/ModalContext";
import { ColorsType } from "../../styles/colors";
import { TagType } from "../TagType";
import * as S from "./styles";

export function Modal() {
  const { setModalIsOpen, modalIsOpen, pokemonModalDetails } = useModal();
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
  } = pokemonModalDetails;

  function handleCloseModal() {
    setModalIsOpen(false);
  }

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {types ? (
        <S.Container isVisible={modalIsOpen}>
          <div className="overlay" />
          <S.Box isVisible={modalIsOpen}>
            <S.CloseModal onClick={handleCloseModal}>
              <MdOutlineClose />
            </S.CloseModal>

            <S.LeftContainer type={types.length > 0 ? types[0] : "grass"}>
              <S.Icon>
                <img
                  // eslint-disable-next-line import/no-dynamic-require
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
                  {
                    // eslint-disable-next-line no-nested-ternary
                    id && id < 10 ? `#00${id}` : id < 100 ? `#0${id}` : `#${id}`
                  }
                </span>
              </div>
              <S.TypeList>
                {types &&
                  types.map((type) => (
                    <li key={type}>
                      <TagType type={type} color={type as keyof ColorsType} />
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
                          color={weakness as keyof ColorsType}
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
        </S.Container>
      ) : (
        ""
      )}
    </>
  );
}
