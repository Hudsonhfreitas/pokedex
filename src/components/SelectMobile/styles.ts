import styled from "styled-components";

import Arrow from "../../assets/arrow-down-select.svg";

type SelectMobileProps = {
  isSelectOpen: boolean;
};

export const Container = styled.div<SelectMobileProps>`
  position: relative;
  display: none;
  margin-bottom: 5.5rem;
  & > button {
    cursor: pointer;
    width: 100%;
    height: 5.6rem;
    border: 1px solid #a0afba;
    background: url(${Arrow}) no-repeat right 24px center;
    padding: 0 2rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    span {
      color: #7a7d80;
      opacity: 0.6;
      font-size: 1.4rem;
      margin-right: 4px;
    }
    strong {
      font-size: 1.4rem;
      color: #7a7d80;
      font-weight: 600;
      text-transform: capitalize;
    }
  }
  ul {
    position: absolute;
    width: 100%;
    height: 22.3rem;
    border: 1px solid #a0afba;
    background-color: #fff;
    border-top: 0;
    padding: 2.1rem;
    top: 5.6rem;
    z-index: 2;
    overflow-y: auto;
    opacity: ${(props) => (props.isSelectOpen ? 1 : 0)};
    pointer-events: ${(props) => (props.isSelectOpen ? "all" : "none")};
    transition: all 0.3s;
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
    &::-webkit-scrollbar {
      width: 5px;
      background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #3d75c2;
      border-radius: 5px;
    }
    li {
      &:first-child {
        button {
          padding-top: 0;
        }
      }
      button {
        padding: 1.2rem 0;
      }
    }
  }
  @media (max-width: 560px) {
    display: block;
  }
`;
