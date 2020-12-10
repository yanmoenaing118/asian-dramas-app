import { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

import { Container } from "./LayoutElements";

export default function Layout(props) {
  let [sidebarOpen, setSidebarOpen] = useState(false);
  let toggleSidebar = () => {
    console.log("clicked");
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <Container>
      <Sidebar isOpen={sidebarOpen} closeSidebar={toggleSidebar} />
      <Navbar toggleSidebar={toggleSidebar} />

      {props.children}
    </Container>
  );
}
