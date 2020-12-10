import {
  SidebarWrapper,
  SidebarContainer,
  SidebarClose,
  CloseIcon,
  SidebarBtn,
  SidebarItems,
  SidebarItem,
  SidebarLink,
  SignupBtn,
} from "./SidebarElements";

export default function Sidebar(props) {
  console.log(props);
  return (
    <SidebarWrapper isOpen={props.isOpen}>
      <SidebarClose onClick={props.closeSidebar}>
        <CloseIcon size="lg" />
      </SidebarClose>
      <SidebarContainer>
        <SidebarItems>
          <SidebarItem>
            <SidebarLink href="/home">Home</SidebarLink>
          </SidebarItem>

          <SidebarItem>
            <SidebarLink href="/dramas">Dramas</SidebarLink>
          </SidebarItem>

          <SidebarItem>
            <SidebarLink href="/api">API</SidebarLink>
          </SidebarItem>

          <SidebarItem>
            <SidebarLink href="/about">About</SidebarLink>
          </SidebarItem>

          <SidebarItem>
            <SidebarLink href="/contact">Contact</SidebarLink>
          </SidebarItem>
        </SidebarItems>
        <SidebarBtn>
          <SignupBtn>Sign up</SignupBtn>
        </SidebarBtn>
      </SidebarContainer>
    </SidebarWrapper>
  );
}
