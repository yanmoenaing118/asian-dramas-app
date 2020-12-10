import Link from "next/link";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export const SidebarWrapper = styled.div`
  background-color: #d44a06;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2000;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transform: ${({ isOpen }) =>
    isOpen ? " translateY(0)" : "translateY(-100%)"};
  transition: transform 0.2s ease-in-out;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SidebarClose = styled.div`
  position: absolute;
  top: 1.8rem;
  right: 1.8rem;
  width: 26px;
  height: 26px;
`;

export const CloseIcon = styled(AiOutlineClose)`
  color: #000;
`;

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  min-height: 60vh;
`;

export const SidebarItems = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SidebarItem = styled.li`
  min-width: 150px;
  height: 66px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: green;
    color: #fff;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
    padding: 0;
  }
`;

export const SidebarLink = styled(Link)``;

export const SidebarBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SignupBtn = styled.button`
  padding: 16px 68px;
  background-color: green;
  border: none;
  outline: none;
  border-radius: 10px;
  color: #fff;
  font-size: 19px;

  @media screen and (max-width: 480px) {
    font-size: 16px;
    padding: 14px 48px;
  }
`;
