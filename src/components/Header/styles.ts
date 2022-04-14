import styled from "styled-components";

export const Container = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 11.2rem;
  display: flex;
  align-items: center;
  z-index: 98;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      font-size: 1.3rem;
      line-height: 1.6rem;
      color: #fff;
    }
  }
  @media (max-width: 560px) {
    height: 8.2rem;
    img {
      max-width: 129px;
    }
  }
`;
