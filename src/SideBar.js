import React, { useState, useEffect } from "react";
import {
  SideBarContainer,
  Icons,
  CloseIcon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLinks,
  SideBarListLink,
} from "./SideBarStyle";
import { useAuth } from "./context/AuthContext";
import { useHistory } from "react-router-dom";

function SideBar({ isOpen, toggle }) {
  const { logOut } = useAuth();
  const history = useHistory();

  const handleSignOut = async () => {
    await logOut();
    history.push("/signUp");
  };
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icons>
        <CloseIcon onClick={toggle} />
      </Icons>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarListLink to="/myList" onClick={toggle}>
            My List
          </SideBarListLink>
          <SideBarLinks to="trending" onClick={toggle}>
            Trending
          </SideBarLinks>
          <SideBarLinks to="action" onClick={toggle}>
            Action
          </SideBarLinks>
          <SideBarLinks to="comedy" onClick={toggle}>
            Comedy
          </SideBarLinks>

          <SideBarLinks
            style={{ color: "red" }}
            onClick={() => handleSignOut()}
          >
            Log Out
          </SideBarLinks>
        </SideBarMenu>
      </SideBarWrapper>
    </SideBarContainer>
  );
}

export default SideBar;
