import styled from "styled-components";
import link from "next/link";

export const SidebarContainer = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 900;
  background-color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;

  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  top: ${({ isOpen }) => (isOpen ? `0` : `-100%`)};
`;

export const SidebarWrapper = styled.div`
  color: var(--white);
`;

export const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 60px);
  align-items: center;
`;

export const SidebarLink = styled.a`
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  letter-spacing: 2px;
  transition: transform 0.2s ease-in;
  cursor: pointer;

  &:hover {
    transform: scale(1.3);
  }
`;

export const SidebarBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled.a`
  text-decoration: none;
  border: none;
  background-color: var(--white);
  border-radius: 50px;
  color: var(--primary-color);
  padding: 8px 36px;
  font-size: 1.2rem;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
`;
