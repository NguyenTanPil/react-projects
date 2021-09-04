import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
  background-color: #ffc500;
  display: grid;
  align-items: center;
  height: 100vh;
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-100rem')};
  transition: all 0.3s ease;
  width: 35rem;
  z-index: 1008;

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: #000;
`;

export const Icon = styled.div`
  background-color: transparent;
  border: transparent;
  cursor: pointer;
  font-size: 3.2rem;
  outline: none;
  position: absolute;
  top: 1.92rem;
  right: 2.5rem;
`;

export const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 8rem);
  text-align: center;

  @media screen and (max-width: 400px) {
    grid-template-rows: repeat(3, 6rem);
  }
`;

export const SidebarLink = styled(Link)`
  color: #000;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  list-style-type: none;
  transition: all 0.2s ease;
  text-decoration: none;

  &:hover {
    color: #e31837;
  }
`;

export const SidebarWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRouter = styled(Link)`
  background-color: #e31837;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 1.6rem;
  outline: none;
  padding: 1.6rem 6.4rem;
  text-decoration: none;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    background-color: #fff;
    color: #010606;
  }
`;
