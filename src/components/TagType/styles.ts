import { lighten } from "polished";
import styled from "styled-components";

import { colors } from "../../styles/colors";

type TagTypeProps = {
  color: keyof typeof colors;
};

export const Container = styled.span<TagTypeProps>`
  display: inline-block;
  padding: 0 2.5rem;
  line-height: 2.4rem;
  border-radius: 2px;
  font-weight: 600;
  font-size: 1.3rem;
  letter-spacing: -0.01em;
  font-family: "Montserrat", sans-serif;
  background-color: ${(props) => lighten(0.2, colors[props.color])};
  color: ${(props) => colors[props.color]};
  text-transform: capitalize;
  margin-top: 0.5rem;
`;
