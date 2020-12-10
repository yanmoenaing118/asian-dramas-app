import styled from "styled-components";

export const HomeContainer = styled.header`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.2) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%);
  }
`;

export const HeroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 200;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.1) 100%
  );
`;

export const HeroSection = styled.section`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  text-align: center;
  line-height: 1.2;
`;

export const HeroHeading = styled.h1`
  color: #fff;
  margin-bottom: 6rem;
  font-size: 7rem;
  text-transform: capitalize;
  font-weight: 400;

  @media screen and (max-width: 760px) {
    font-size: 5rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 3.8rem;
  }
`;

export const HeroPara = styled.p`
  max-width: 600px;
  color: #fff;
  font-size: 2.2rem;
  line-height: 1.6;

  @media screen and (max-width: 480px) {
    font-size: 1.6rem;
  }

  @media screen and (max-width: 760px) {
    font-size: 2rem;
  }
`;

export const HeroEnjoy = styled.span`
  font-size: 3rem;
  color: #fff;
  margin-bottom: 6rem;
  font-weight: 300;
  display: block;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -30px;
    left: 0;
    width: calc(100% + 20px);
    height: 8px;
    background-color: #d44a06;
    transition: transform 0.1s ease-in;
  }

  &:hover::after {
    transform: translateY(-10px);
  }

  @media screen and (max-width: 760px) {
    font-size: 1.8rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.4rem;
  }
`;
