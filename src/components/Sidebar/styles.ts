import styled from "styled-components";

export const Container = styled.aside`
  width: 100%;
  max-width: 32.9rem;
  border-right: 1px solid #eff3f6;
  padding: 7.1rem 0;
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
