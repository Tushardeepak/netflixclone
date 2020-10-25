import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import "./Nav.css";
import { Nav, NavLogo, NavMenu, NavLinks, MobileIcons } from "./NavStyle";
import logo from "./logo.png";
import SideBar from "./SideBar";

function NavBar() {
  const [show, handleShow] = useState(false);
  const [open, setopen] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  const openSidebar = () => {
    setopen(!open);
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <Nav className={`nav ${show && "nav_black"}`}>
      <NavLogo src={logo} onClick={toggleHome}></NavLogo>
      <MobileIcons>
        <FaBars onClick={() => openSidebar()}></FaBars>
      </MobileIcons>
      <SideBar isOpen={open} toggle={openSidebar}></SideBar>
      <NavMenu>
        <NavLinks
          to="trending"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          Trending
        </NavLinks>
        <NavLinks
          to="action"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          Action
        </NavLinks>
        <NavLinks
          to="comedy"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          Comedy
        </NavLinks>
        <NavLinks
          to="horror"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          Horror
        </NavLinks>
        <NavLinks
          to="romance"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          Romance
        </NavLinks>
        <NavLinks
          to="documentary"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          Documentaries
        </NavLinks>
      </NavMenu>
    </Nav>
  );
}

export default NavBar;
