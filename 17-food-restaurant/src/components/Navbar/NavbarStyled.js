import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaPizzaSlice } from 'react-icons/fa';

export const Nav = styled.nav`
  background-color: transparent;
  display: flex;
  justify-content: center;
  font-weight: 700;
  height: 8rem;
`;

export const NavLink = styled(Link)`
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 3.2rem;
  text-decoration: none;

  @media screen and (max-width: 400px) {
    position: absolute;
    left: 2.5rem;
    top: 1rem;
  }
`;

export const NavIcon = styled.div`
  color: #fff;
  cursor: pointer;
  display: block;
  position: absolute;
  top: 0;
  right: 0;

  p {
    font-weight: 700;
    text-transform: capitalize;
    transform: translate(-175%, 100%);
  }
`;

export const Bars = styled(FaPizzaSlice)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;
