import Link from "next/link";
import styled from "styled-components";

export const Navbar = styled.div`
  color: #fff;
  // background-color: #470d0d;
  background-color: transparent;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  margin-top: -80px;
  z-index: 500;
`;

export const NavbarContainer = styled.nav`
  margin: auto;
  display: flex;
  align-items: center;
  max-width: 1440px;
  justify-content: space-between;
`;

export const Logo = styled.div`
  margin-left: 24px;
  height: 80px;
  display: flex;
  align-items: center;
  font-weight: bolder;
  cursor: pointer;
`;

export const NavbarItems = styled.ul`
  list-style: none;
  min-width: 48rem;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 780px) {
    display: none;
  }
`;

export const NavbarItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 1.7rem;
  &:hover {
    color: #d44a06;
  }
`;

export const NavbarLink = styled(Link)`
  display: block;
`;

export const MobileIcon = styled.div`
  display: none;
  margin-right: 24px;
  cursor: pointer;
  @media screen and (max-width: 780px) {
    display: block;
  }
`;

export const NavbarBtn = styled.div`
  display: block;
  @media screen and (max-width: 780px) {
    display: none;
  }
`;

export const Signup = styled.button`
  margin: 0 24px;
  background: #d44a06;
  padding: 12px 26px;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.1s ease-in-out;

  &:hover {
    background-color: #d4581b;
  }
`;
