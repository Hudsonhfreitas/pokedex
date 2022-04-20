import styled from "styled-components";

type LeftContainerProps = {
    type: string;
}

type ModalProps = {
    isVisible: boolean;
}

type BarStatusProps = {
  percentage: number
}

export const Container = styled.div<ModalProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
  opacity: ${(props) => props.isVisible ? '1' : '0'};
  pointer-events: ${(props) => props.isVisible ? 'all' : 'none'};
  transition: all .3s;
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const Box = styled.div<ModalProps>`
  position: relative;
  width: 100%;
  max-width: 71rem;
  height: 53.8rem;
  background-color: #FFF;
  z-index: auto;
  border-radius: 16px;
  box-shadow: 0px 10px 40px rgba(13, 12, 71, 0.05);
  display: flex;
  transform: ${(props) => props.isVisible ? 'translateY(0)' : 'translateY(4rem)'};
  transition: transform .3s ease;
  @media(max-width:  560px) {
    height: 90%;
    flex-direction: column;
    align-self: flex-end;
    border-radius: 0;
  }
`;

export const CloseModal = styled.button`
  position: absolute;
  top: -4.4rem;
  right: 0;
  width: 3.6rem;
  height: 3.6rem;
  background-color: #FFF;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    font-size: 2rem;
  }
  @media(max-width:  560px) {
    top: -4.9rem;
    height: 5rem;
    border-radius: 8px 8px 0 0;
    width: 5rem;
    svg {
      font-size: 2.5rem;
    }
  }
`;

export const LeftContainer = styled.div<LeftContainerProps>`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 19.1rem;
  background-image: ${(props) => `url(${require(`../../assets/modal_bg/${props.type}_bg.svg`)})`};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  border-radius: 16px 0 0 16px;
  @media(max-width:  560px) {
    max-width: 100%;
    height: 12.5rem;
    background-size: cover;
    border-radius: 0;
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 3.4rem;
  height: 3.4rem;
  background-color: #FFF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.div`
  position: absolute;
  left: 1.4rem;
  bottom: 13.1rem;
  width: 20.2rem;
  @media(max-width:  560px) {
    left: 50%;
    bottom: -2.5rem;
    width: 12rem;
    margin-left: -6rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const RightContainer = styled.div`
  padding: 3.5rem 7.2rem 2.9rem 7.4rem;
  width: 100%;
  .name {
    display:flex;
    align-items: flex-end;
    margin-bottom: 1rem;
    h2 {
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        font-size: 2.8rem;
        line-height: 3.4rem;
        letter-spacing: -0.01em;
        color: #2F3133;
        text-transform: capitalize;
    }
    span {
        position: relative;
        font-family: 'Montserrat', sans-serif;
        font-size: 1.6rem;
        line-height: 2rem;
        letter-spacing: -0.01em;
        color: #7a7d80;
        top: -3px;
        margin-left: 8px;
    }
  }
  @media(max-width:  560px) {
    padding: 4rem 2.4rem;
    .name {
      justify-content: center;
    }
  }
`;

export const TypeList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 3.2rem;
  li {
    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
  @media(max-width:  560px) {
    justify-content: center;
  }
`;

export const InfoList = styled.ul`
  display: flex;
  align-items: flex-start;
  margin-bottom: 3.2rem;
  li {
    &:not(:last-child) {
      margin-right: 4.8rem;
    }
    &.ability {
      strong {
        text-transform: capitalize;
      }
    }
    span {
      display: block;
      font-family: 'Inter';
      font-weight: 400;   
      font-size: 1.3rem;
      letter-spacing: -0.01em;
      color: #7A7D80;
      margin-bottom: .4rem;
    }
    strong {
      font-family: 'Montserrat';
      font-weight: 600;
      font-size: 1.4rem;
      line-height: 1.7rem;
      letter-spacing: -0.01em;
      color: #2F3133;    
    }
  }
  @media(max-width:  560px) {
    justify-content: center;
  }
`;

export const Weaknesses = styled.div`
  margin-bottom: 3.2rem;
  h4 {
    font-family: 'Inter';
    font-weight: 600;
    font-size: 1.3rem;
    line-height: 1.6rem;
    letter-spacing: -0.01em;
    color: #4D5053;
    margin-bottom: 1.6rem;
  }
  ul {
    display: flex;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
      li {
        &:not(:last-child) {
            margin-right: 1rem;
        }
      }
  }
  @media(max-width:  560px) {
    h4 {
      text-align: center
    }
    ul {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1rem;
      li {
        margin: 0;
        &:not(:last-child) {
            margin-right: 0;
        }
        span {
          width: 100%;
          text-align: center;
        }
      }
    }
  }
`;


export const Stats = styled.div`
  h5 {
    font-family: 'Inter';
    font-weight: 600;
    font-size: 1.3rem;
    line-height: 1.6rem;
    letter-spacing: -0.01em;
    color: #4D5053;
    margin-bottom: 1.6rem;
  }
`;

export const StatsItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:not(:last-child) {
      margin-bottom: 1.3rem;
  }
  span {
    display: block;
    width: 7rem;
    font-size: 1.2rem;
    line-height: 1.5rem;
    color: #7a7d80;
    text-transform: capitalize;
  }
`;

export const BarStatus = styled.div<BarStatusProps>`
  position: relative;
  width: 100%;
  height: 3px;
  max-width: 28.3rem;
  background-color: #EFF3F6;
  .bar {
      position: absolute;
      top: 0;
      left: 0;
      width: ${(props) => props.percentage > 100 ? 100 : props.percentage}%;
      height: 100%;
      background-color: #C20001;
      z-index: 0;
    }
    .separator {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
       li {
           width: 4px;
           height: 4px;
           background-color: #FFF;
           &:not(:first-child) {
               margin-left: 5.4rem;
           }
       }
  }
  @media(max-width:  560px) {
    width: 75%;
    .separator {
      li {
           &:not(:first-child) {
               margin-left: 19%;
           }
       }
    }
  }
`