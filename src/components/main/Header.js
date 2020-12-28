import React, { useState } from "react";
import logo from "../svg/logo.svg";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import "./style.css";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { generateMedia } from "styled-media-query";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function Header() {
  const [authToggle, setAuthToggle] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <div>
      {open ? (
        <HeaderComponent className="headerContainer">
          <div className="headerTopBar">
            <Button
              startIcon={<ArrowBackIosIcon style={{ fontSize: "1rem" }} />}
              className="signInBtn"
              onClick={() => setOpen(false)}
            >
              Back
            </Button>
          </div>
          <div className="headerContent">
            {authToggle ? (
              <SignUp setAuthToggle={setAuthToggle} />
            ) : (
              <SignIn setAuthToggle={setAuthToggle} />
            )}
          </div>
        </HeaderComponent>
      ) : (
        <HeaderComponent className="headerContainer">
          <div className="headerTopBar">
            <Logo src={logo} alt={"Netflix"} />
            <Button className="signInBtn" onClick={() => setOpen(true)}>
              Sign in
            </Button>
          </div>
          <div className="headerContent">
            <Title>See what's next.</Title>
            <SubTitle>WATCH ANYWHERE. CANCEL ANYTIME.</SubTitle>
            <Button
              className="tryItNowBtn"
              endIcon={<ChevronRightIcon style={{ fontSize: "2rem" }} />}
              onClick={() => {
                setOpen(true);
                setAuthToggle(true);
              }}
            >
              try it now
            </Button>
          </div>
        </HeaderComponent>
      )}
    </div>
  );
}

export default Header;

const customMedia = generateMedia({
  lgDesktop: "1350px",
  mdDesktop: "1150px",
  tablet: "960px",
  smTablet: "740px",
});

const HeaderComponent = styled.div`
  .signInBtn {
    height: 2.5rem;
    top: 0;
    right: 0;
    margin: 1.25rem 3% 0;
    padding: 0.4375rem 1.0625rem;
    font-weight: 400;
    line-height: normal;
    border-radius: 0.1875;
    font-size: 1rem;
    background: red;
    color: #fff;
    position: absolute;
    z-index: 100;
    translate: transform(-50%, 50%);
    cursor: pointer;
    transition: background 0.2s ease-in;

    &:hover {
      background: red;
    }

    ${customMedia.lessThan("smTablet")`
      margin-top:1.25rem;
      height: 2rem;
    `}
  }
  .headerTopBar {
    position: relative;
    height: 10rem;
    z-index: 1;
  }

  .headerContent {
    width: 65%;
    position: relative;
    margin: 4.5rem auto 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 1;
  }

  .tryItNowBtn {
    background: red;
    color: #fff;
    margin: 0 33%;
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.5);
    transition: background 0.2s ease-in;
    &:hover {
      background: red;
    }
    ${customMedia.lessThan("mdDesktop")`
      margin: 0 25%;
      transform:scale(0.8);
      width:20rem;
    `}

    ${customMedia.lessThan("tablet")`
      margin: 0 20%;
      font-size: 1.3rem;
      transform:scale(0.6);
      width:17rem;
    `}
  }
`;

const Logo = styled.img`
  width: 10rem;
  height: 3.5rem;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${customMedia.lessThan("tablet")`
  left:20%;
  width: 8rem;
  height: 2.5rem;
  `}
`;

const Title = styled.h1`
  margin: 0 0 1.2rem;
  font-size: 5rem;
  font-weight: 700;
  line-height: 1.1rem;
  color: #fff;

  ${customMedia.lessThan("tablet")`
    margin: 0 0 1rem;
    font-size: 4.1rem;
    font-weight: 700;
    line-height: 2.7rem;
    text-align:center;
  `}

  ${customMedia.lessThan("smTablet")`
    line-height: 3.5rem;
    text-align:left;
    `}
`;

const SubTitle = styled.h2`
  margin: 0 0 1.875rem;
  font-size: 1.875rem;
  font-weight: 400;
  line-height: 1.25rem;
  color: #fff;
  margin-top: 3rem;

  ${customMedia.lessThan("tablet")`
    margin: 0 0 1.875rem;
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.25rem;
  color: #fff;
  margin-top: 1.5rem;
  `}
`;
