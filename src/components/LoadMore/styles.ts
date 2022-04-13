import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.button`
  background: rgba(63, 93, 179, 0.1);
  border-radius: 6px;
  padding: 1.4rem 2rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 1.4rem;
  letter-spacing: -0.01em;
  color: ${colors["all"]};
  transition: all 0.3s;
  &:hover {
    background-color: ${colors["all"]};
    color: #fff;
  }
`;
