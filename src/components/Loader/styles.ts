import styled from "styled-components";

export const Container = styled.div`
  width: 8rem;
  height: 8rem;
  border: 0.8rem solid #88a3d1;
  border-left: 0.8rem solid #2c6ac8;
  border-radius: 50%;
  position: relative;
  animation: spin 1s linear infinite;
  align-self: center;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
