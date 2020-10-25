import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  position: fixed;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 1rem;
  top: 0;
  z-index: 10000;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavLogo = styled.img`
  width: 80px;
  height: 35px;
  justify-self: flex-start;
  display: flex;
  align-items: center;
  margin-left: 20px;
  cursor: pointer;
`;

export const MobileIcons = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 15px;
    transform: translate(-100%, 60%);
    font-size: 1.2rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-shadow: -1px -1px 3px black;

  &.active {
    border-top: 1.5px solid red;
  }
`;
