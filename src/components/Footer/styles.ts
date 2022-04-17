import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.footer`
  width: 100%;
  background-color: ${colors["all"]};
  padding-top: 6.7rem;
  padding-bottom: 6.5rem;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media(max-width: 560px) {
    padding: 4rem 0;
    .container {
      flex-direction: column;
    }
  }
`;

export const Text = styled.div`
  h3 {
    color: #fff;
  }
  p {
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 180%;
    color: rgba(255, 255, 255, 0.37);
  }
  @media(max-width: 560px) {
    margin-bottom: 4.8rem;
    h3 {
      text-align: center;
    }
    p {
      text-align: center;
    }
  }
`;
