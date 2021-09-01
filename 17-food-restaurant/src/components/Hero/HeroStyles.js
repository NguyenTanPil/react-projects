import styled from 'styled-components';
import Banner from '../../images/banner.jpg';

export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${Banner});
  background-position: center;
  background-size: cover;

  height: 100vh;
`;

export const HeroContent = styled.div`
  height: calc(100vh - 8rem);
  max-height: 100vh;
  padding: 0rem calc((100vw - 130rem) / 2);
  width: 100%;
`;

export const HeroItems = styled.div`
  color: #fff;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  font-weight: 600;
  height: 100vh;

  line-height: 1;
  max-height: 100vh;
  padding: 0 3.2rem;
  text-transform: uppercase;
  width: 65rem;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroTitle = styled.h1`
  box-shadow: 3px 5px #e9ba23;
  font-size: clamp(6rem, 10vw, 8rem);
  letter-spacing: 3px;
  margin-bottom: 1.6rem;
`;

export const HeroText = styled.p`
  font-size: clamp(3.2rem, 2.5vw, 4.8rem);
  margin-bottom: 3.2rem;
`;

export const HeroBtn = styled.button`
  background-color: #e31837;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 2.25rem;
  padding: 1.6rem 6.4rem;
  transition: 0.2s ease;

  &:hover {
    background-color: #ffc500;
    color: #000;
  }
`;
