import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  padding-top: 11.9rem;
  margin-top: -28.8rem;
  z-index: 2;
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
      margin-top: 2.2rem
  }
`;

export const AreaAll = styled.div`
  display: flex;
`;

export const Aside = styled.aside`
  width: 100%;
  max-width: 32.9rem;
  border-right: 1px solid #EFF3F6;
  padding-top: 7.1rem;
  ul {
      li {
          &:not(:last-child) {
              margin-bottom: 4rem;
          }
      }
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
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 1.8rem;
        line-height: 150%;
        color: #4D5053;
        margin-left: .6rem;
      }
    }
  }
  & > button {
      display: table;
      margin: 0 auto;
  }
`;

export const AllPokemons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3.2rem;
  margin-bottom:  6.8rem;
`