import styled from "styled-components";

import blueBg from "../../assets/bg-blue.svg";
import redBg from "../../assets/bg-red.svg";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 99.4rem;
  .slide-hero,
  .swiper {
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
        background-color: #eff3f6;
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
            color: #eff3f6;
            text-align: center;
            margin-bottom: 0.8rem;
            margin-top: 2.9rem;
          }
          > p {
            text-align: center;
            font-weight: 500;
            font-size: 1.8rem;
            line-height: 150%;
            color: #fff;
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
        background-color: #fff;
      }
    }
  }
  @media (max-width: 768px) {
    height: 95.4rem;
    .slide-hero {
      .swiper-slide {
        &.blue {
          .main-area {
            .text {
              h1 {
                max-width: 38.5rem;
                margin: 0 auto;
                margin-top: 2.9rem;
                margin-bottom: 8px;
              }
            }
          }
        }
        &::after {
          height: 25rem;
        }
        .main-area {
          .text {
            .image {
              margin-top: 8.2rem;
            }
          }
        }
      }
    }
  }
  @media (max-width: 560px) {
    overflow: hidden;
    height: 104.5rem;
    .slide-hero {
      .swiper-slide {
        &.blue {
          .main-area {
            .text {
              h1 {
                max-width: 25.4rem;
              }
            }
          }
        }
        .main-area {
          padding-top: 12rem;
          h1 {
            font-size: 4.8rem;
            line-height: 5.9rem;
          }
          .image {
            display: flex;
            align-items: center;
            justify-content: center;
            img {
              max-width: 720px;
            }
          }
        }
        &::after {
          height: 34rem;
        }
      }
    }
  }
`;

export const Tag = styled.span`
  width: 12.1rem;
  height: 3.4rem;
  padding: 0.4rem 0.6rem;
  display: flex;
  align-items: center;
  border-radius: 244px;
  background-color: #fff;
  margin: 0 auto;
  .image-tag {
    width: 2.6rem;
    height: 2.6rem;
    background-color: rgba(194, 0, 1, 0.2);
    border-radius: 50%;
    margin-right: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  p {
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 150%;
    color: #c20001;
  }
  &.blue {
    .image-tag {
      background-color: rgba(63, 103, 186, 0.2);
    }
    p {
      color: #3f67ba;
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
      background-color: #c90c0c;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        font-size: 2rem;
        color: #fff;
        transform: rotate(90deg);
      }
      &.blue {
        background-color: rgba(175, 192, 227, 0.3);
      }
    }
    span {
      font-family: "Inter", sans-serif;
      font-weight: 500;
      font-size: 1.3rem;
      line-height: 150%;
      color: #ffffff;
      margin-left: 3rem;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
