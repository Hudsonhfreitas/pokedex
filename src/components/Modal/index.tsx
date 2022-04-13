import * as S from "./styles";
import { MdOutlineClose } from 'react-icons/md';
import grass from '../../assets/filter_icons/grass.svg';
import { TagType } from "../TagType";
import { useModal } from "../../hooks/ModalContext";

export function Modal() {

  const { setModalIsOpen, modalIsOpen } = useModal();

  function handleCloseModal() {
    setModalIsOpen(false);
  }

  return (
    <S.Container isVisible={modalIsOpen}>
      <div className="overlay" />
      <S.Box isVisible={modalIsOpen}>
        <S.CloseModal onClick={handleCloseModal}>
          <MdOutlineClose />
        </S.CloseModal>

        <S.LeftContainer type="grass">
          <S.Icon>
            <img src={grass} alt="grass" />
          </S.Icon>
          <S.Image>
            <img src="" alt=""/>
          </S.Image>
        </S.LeftContainer>

        <S.RightContainer>
          <div className="name">
            <h2>Bulbassaur</h2>
            <span>#001</span>
          </div>
            <S.TypeList>
              <li>
                <TagType type="grass" color="grass"/>
              </li>
              <li>
                <TagType type="poison" color="poison"/>
              </li>
            </S.TypeList>

            <S.InfoList>
              <li>
                <span>Height</span>
                <strong>0.7m</strong>
              </li>
              <li>
                <span>Weight</span>
                <strong>6.9kg</strong>
              </li>
              <li>
                <span>Abilities</span>
                <strong>Overgrow</strong>
              </li>
            </S.InfoList>

            <S.Weaknesses>
              <h4>Weaknesses</h4>
              <ul>
                <li>
                  <TagType type="poison" color="poison"/>
                </li>
                <li>
                  <TagType type="grass" color="grass"/>
                </li>
                <li>
                  <TagType type="poison" color="poison"/>
                </li>
                <li>
                  <TagType type="ice" color="ice"/>
                </li>
              </ul>
            </S.Weaknesses>
            
            <S.Stats>
              <h5>Stats</h5>
              <div className="all-stats">
                <S.StatsItem>
                  <span>HP</span>
                  <S.BarStatus>
                    <div className="bar" />
                    <ul className="separator">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </S.BarStatus>
                </S.StatsItem>
              </div>
            </S.Stats>
        </S.RightContainer>
      </S.Box>  
    </S.Container>
  );
}
