import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaPizzaSlice } from 'react-icons/fa';

export const Nav = styled.nav`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  height: 8rem;
  padding: 0 3.2rem;
`;

export const NavLink = styled(Link)`
  color: #fff;
  cursor: pointer;
  display: block;
  align-items: center;
  font-size: 3.2rem;
  text-decoration: none;
`;

export const NavIcon = styled.div`
  color: #fff;
  cursor: pointer;

  p {
    display: inline-block;
    font-size: 2rem;
    font-weight: 700;
    margin-right: 0.5rem;
    text-transform: capitalize;
  }
`;

export const Bars = styled(FaPizzaSlice)`
  font-size: 2rem;
`;
