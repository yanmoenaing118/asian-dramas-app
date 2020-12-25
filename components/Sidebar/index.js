import Link from "next/link";
import React from "react";
import {
  SidebarContainer,
  SidebarBtnWrapper,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
} from "./SidebarElements";
export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarWrapper>
        <SidebarMenu>
          <Link href="/#korean" passHref>
            <SidebarLink onClick={(e) => toggleSidebar()}>Korean</SidebarLink>
          </Link>

          <Link href="/#chinese" passHref>
            <SidebarLink onClick={(e) => toggleSidebar()}>Chinese</SidebarLink>
          </Link>

          <Link href="/#thailand" passHref>
            <SidebarLink onClick={(e) => toggleSidebar()}>Thailand</SidebarLink>
          </Link>
        </SidebarMenu>
        <SidebarBtnWrapper>
          <Link href="/signin">
            <SidebarRoute>Sign in</SidebarRoute>
          </Link>
        </SidebarBtnWrapper>
      </SidebarWrapper>
    </SidebarContainer>
  );
}
