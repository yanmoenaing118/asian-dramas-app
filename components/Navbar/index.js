import {
  Navbar,
  NavbarContainer,
  Logo,
  NavbarItems,
  NavbarItem,
  NavbarLink,
  MobileIcon,
  NavbarBtn,
  Signup,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";

export default function index(props) {
  console.log(props);
  return (
    <Navbar>
      <NavbarContainer>
        <Logo>dramas</Logo>
        <NavbarItems>
          <NavbarItem>
            <NavbarLink href="/home">
              <a>Home</a>
            </NavbarLink>
          </NavbarItem>

          <NavbarItem>
            <NavbarLink href="/dramas">
              <a>Dramas</a>
            </NavbarLink>
          </NavbarItem>

          <NavbarItem>
            <NavbarLink href="/api">
              <a>API</a>
            </NavbarLink>
          </NavbarItem>

          <NavbarItem>
            <NavbarLink href="/about">
              <a>About</a>
            </NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink href="/contact">
              <a>Contact</a>
            </NavbarLink>
          </NavbarItem>
        </NavbarItems>
        <MobileIcon onClick={() => props.toggleSidebar()}>
          <FaBars />
        </MobileIcon>
        <NavbarBtn>
          <Signup>Signup</Signup>
        </NavbarBtn>
      </NavbarContainer>
    </Navbar>
  );
}
