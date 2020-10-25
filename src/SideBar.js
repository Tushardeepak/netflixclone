import React, { useState, useEffect } from "react";
import {
  SideBarContainer,
  Icons,
  CloseIcon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLinks,
} from "./SideBarStyle";

function SideBar({ isOpen, toggle }) {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icons>
        <CloseIcon onClick={toggle} />
      </Icons>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLinks to="trending" onClick={toggle}>
            Trending
          </SideBarLinks>
          <SideBarLinks to="action" onClick={toggle}>
            Action
          </SideBarLinks>
          <SideBarLinks to="comedy" onClick={toggle}>
            Comedy
          </SideBarLinks>
          <SideBarLinks to="horror" onClick={toggle}>
            Horror
          </SideBarLinks>
          <SideBarLinks to="romance" onClick={toggle}>
            Romance
          </SideBarLinks>
          <SideBarLinks to="documentary" onClick={toggle}>
            Documentaries
          </SideBarLinks>
        </SideBarMenu>
      </SideBarWrapper>
    </SideBarContainer>
  );
}

export default SideBar;
