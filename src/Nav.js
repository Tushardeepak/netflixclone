import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import "./Nav.css";
import {
  Nav,
  NavLogo,
  NavMenu,
  NavLinks,
  MobileIcons,
  MyListLink,
  LogOutDiv,
} from "./NavStyle";
import logo from "./logo.png";
import SideBar from "./SideBar";
import { useAuth } from "./context/AuthContext";
import { useHistory } from "react-router-dom";

function NavBar() {
  const [show, handleShow] = useState(false);
  const [open, setopen] = useState(false);
  const { logOut } = useAuth();
  const history = useHistory();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", handleShow);
    };
  }, []);

  const openSidebar = () => {
    setopen(!open);
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const handleSignOut = async () => {
    await logOut();
    history.push("/signUp");
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
      <div
        style={{
          position: "fixed",
          right: "2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "8rem",
        }}
      >
        <MyListLink to="/myList">My List</MyListLink>
        <LogOutDiv onClick={() => handleSignOut()}>Log Out</LogOutDiv>
      </div>
    </Nav>
  );
}

export default NavBar;
