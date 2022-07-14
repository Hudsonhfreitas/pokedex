import { lighten } from "polished";
import styled from "styled-components";

import { colors } from "../../styles/colors";

type CardPokemonParams = {
  pokemonType: keyof typeof colors;
};

export const Container = styled.button`
  width: 100%;
  max-width: 28rem;
  height: 30.4rem;
  background-color: #fff;
  box-shadow: 0px 10px 51px -5px rgba(183, 189, 193, 0.3);
  border-radius: 12px;
  position: relative;
  z-index: 1;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 12px 40px -5px rgba(90, 96, 100, 0.3);
  }
  @media (max-width: 1200px) {
    max-width: 100%;
  }
`;

export const ImgContainer = styled.div<CardPokemonParams>`
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 1.4rem;
  img {
    max-width: 160px;
  }
  &::after {
    content: "";
    width: 16.5rem;
    height: 16.5rem;
    z-index: -1;
    border-radius: 50%;
    background-color: ${(props) => lighten(0.2, colors[props.pokemonType])};
    position: absolute;
  }
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0 2.8rem;
  .text {
    h3 {
      text-transform: capitalize;
      color: #000;
    }
    span {
      text-align: left;
      display: block;
      font-size: 1.3rem;
      line-height: 150%;
      color: #7a7d80;
      margin-bottom: 6px;
    }
  }
  .icon {
    margin-bottom: 1rem;
  }
`;
