
import styled from "styled-components";
import redBg from '../../assets/bg-red.svg';
import blueBg from '../../assets/bg-blue.svg';


export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 99.4rem;
  .slide-hero, .swiper {
    width: 100%;
    height: 100%;
    overflow: hidden;
    .swiper-slide {
      &.blue {
        .main-area {
          background: ${`url(${blueBg})`};
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
          .text {
            .image {
              .pokeball {
                position: relative;
                top: -6.5rem;
                left: 1rem;
              }
            }
          }
        }
      }
      &::after {
        content: "";
        width: 100%;
        height: 28.8rem;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: #EFF3F6;
        z-index: 0;
        pointer-events: none;
      }
      .main-area {
        position: relative;
        background: ${`url(${redBg})`};
        width: 100%;
        height: 70.6rem;
        padding-top: 13.3rem;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        .container {
          position: relative;
          height: 100%;
        }
        .text {
          h1 {
            color: #EFF3F6;
            text-align: center;
            margin-bottom: .8rem;
            margin-top:  2.9rem;
          }
          > p {
            text-align: center;
            font-weight: 500;
            font-size: 1.8rem;
            line-height: 150%;
            color: #FFF;
          }
          .image {
            position: relative;
            z-index: 1;
            width: 100%;
            max-width: 79.8rem;
            margin: 0 auto;
            margin-top: 13.2rem;
            .lights {
              position: absolute;
              left: 50%;
              top: -4.9rem;
              margin-left: -8.5rem;
            }
          }
        }
      }  
    }
    .swiper-pagination {
      position: absolute;
      right: 1.5rem;
      left: unset;
      width: max-content;
      bottom: 36.6rem;
      .swiper-pagination-bullet {
        background-color: rgba(255, 255, 255, 0.9);
      }
      .swiper-pagination-bullet-active {
        background-color: #FFF;
      }
    }
  }
  
`;

export const Tag = styled.span`
    width: 12.1rem;
    height: 3.4rem;
    padding: .4rem .6rem;
    display: flex;
    align-items: center;
    border-radius: 244px;
    background-color: #FFF;
    margin: 0 auto;
    .image-tag {
        width: 2.6rem;
        height: 2.6rem;
        background-color: rgba(194, 0, 1, .2);
        border-radius: 50%;
        margin-right: .8rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    p {
      font-family: 'Inter', sans-serif;
      font-weight: 600;
      font-size: 1.5rem;
      line-height: 150%;
      color: #C20001;
    }
    &.blue {
      .image-tag {
        background-color: rgba(63, 103, 186, .2);
      }
      p {
        color: #3F67BA;
      }
    }
`;

export const AreaExplore = styled.div`
  position: absolute;
  bottom: 8rem;
  left: 0;
  width: 100%;
  z-index: 10;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  .txt {
    position: relative;
    display: flex;
    align-items: center;
    transform: rotate(-90deg);
    top: -3.9rem;
    left: -2.4rem;
    .icon {
      width: 40px;
      height: 40px;
      background-color: #C90C0C;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        font-size: 2rem;
        color: #FFF;
        transform: rotate(90deg);
      }
      &.blue {
        background-color: rgba(175, 192, 227, .3);
      }
    }
    span {
      font-family: 'Inter', sans-serif;
      font-weight: 500;
      font-size: 1.3rem;
      line-height: 150%;
      color: #FFFFFF;
      margin-left: 3rem;
    }
  }
`