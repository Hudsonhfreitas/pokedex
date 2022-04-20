import styled from "styled-components";

import { colors, ColorsType } from "../../styles/colors";

type FilterItemsParams = {
  filterColor: keyof ColorsType;
};

export const Container = styled.button<FilterItemsParams>`
  filter: grayscale(100%);
  color: #acb9c1;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 150%;
  transition: all 0.3s;
  text-transform: capitalize;
  display: flex;
  align-items: center;

  img {
    padding-right: 2.5rem;
    width: 40px;
    height: 16px;
  }

  &:hover,
  &.active {
    color: ${(props) => colors[props.filterColor]};
    filter: grayscale(0%);
  }
`;
