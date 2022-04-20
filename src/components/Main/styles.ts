import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  padding-top: 11.9rem;
  margin-top: -28.8rem;
  z-index: 2;
  @media (max-width: 768px) {
    margin-top: -25.8rem;
  }
  @media (max-width: 560px) {
    margin-top: -34rem;
    padding-top: 12rem;
    padding-bottom: 4rem;
  }
`;

export const Top = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  height: 16.8rem;
  h2 {
    width: 100%;
    max-width: 26.5rem;
  }
  > div {
    margin-top: 2.2rem;
  }
  @media (max-width: 1200px) {
    & > div {
      max-width: 32.3rem;
    }
  }
  @media (max-width: 768px) {
    margin-bottom: 3.4rem;
  }
  @media (max-width: 560px) {
    display: block;
    margin-bottom: 4.7rem;
    h2 {
      max-width: 100%;
      text-align: center;
      margin: 0 auto;
    }
    & > div {
      margin: 0 auto;
      margin-top: 4.1rem;
    }
  }
`;

export const AreaAll = styled.div`
  display: flex;
`;

export const Aside = styled.aside`
  width: 100%;
  max-width: 32.9rem;
  border-right: 1px solid #eff3f6;
  padding-top: 7.1rem;
  ul {
    li {
      &:not(:last-child) {
        margin-bottom: 4rem;
      }
    }
  }
  @media (max-width: 1200px) {
    max-width: 15.9rem;
    padding-top: 4rem;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const RightContainer = styled.div`
  width: 100%;
  padding-top: 7.1rem;
  padding-left: 7.5rem;
  padding-bottom: 7.5rem;
  .top-container {
    & > div {
      display: flex;
      align-items: center;
      margin-bottom: 6.3rem;
      span {
        font-family: "Montserrat", sans-serif;
        font-weight: 600;
        font-size: 1.8rem;
        line-height: 150%;
        color: #4d5053;
        margin-left: 0.6rem;
      }
    }
  }
  & > button {
    display: table;
    margin: 0 auto;
  }
  @media (max-width: 1200px) {
    padding-top: 4rem;
    padding-left: 2.5rem;
    padding-bottom: 4rem;
    .top-container {
      margin-top: 4rem;
    }
  }
  @media (max-width: 768px) {
    padding-left: 0px;
  }
`;

export const AllPokemons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3.2rem;
  margin-bottom: 6.8rem;
  @media (max-width: 1200px) {
    grid-gap: 2rem;
  }
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    gap: 1.6rem;
    max-width: 86%;
    margin: 0 auto;
    margin-bottom: 4.8rem;
  }
`;
