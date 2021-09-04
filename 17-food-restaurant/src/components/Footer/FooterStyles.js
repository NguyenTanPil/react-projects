import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: #0d0909;
`;

export const FooterWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 130rem;
  padding: 1.6rem 2.4rem;
`;

export const SocialMedia = styled.section`
  max-width: 130rem;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1.6rem auto 0 auto;
  max-width: 110rem;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-self: start;
  font-size: 2.4rem;
  font-weight: bold;
  margin-bottom: 1.6rem;
  text-decoration: none;
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 24rem;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 2.4rem;
  transition: all 0.2s linear;

  &:hover {
    color: #e31837;
  }
`;
