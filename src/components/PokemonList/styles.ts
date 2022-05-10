import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3.2rem;
  margin-bottom: 6.8rem;
  @media (max-width: 1200px) {
    grid-gap: 2rem;
  }
  @media (max-width: 850px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2.5rem;
  }
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    gap: 1.6rem;
    max-width: 86%;
    margin: 0 auto;
    margin-bottom: 4.8rem;
  }
`;
