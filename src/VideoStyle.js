import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

export const VideoContainer = styled.div`
  position: fixed;
  z-index: 1000000000000000000000000000000000000000;
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  overflow: hidden;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
  top: ${({ isOpen }) => (isOpen ? "0%" : "-100%")};
`;
export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const VideoBox = styled.div`
  height: 400px;
  width: 600px;
  background-color: black;
  display: flex;
  flex-direction: column;
  position: relative;

  @media screen and (max-width: 768px) {
    margin:20px;
`;

export const Icons = styled.div`
  position: absolute;
  top: 0rem;
  right: 0rem;
  background: transparent;
  font-size: 1rem;
  cursor: pointer;
  outline: none;
`;

export const VideoPlayerBox = styled.div`
  height: 100%;
  width: 100%;
  background-color: red;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 20px;
  opacity: 1;
`;

export const VideoPlayer = styled.iframe`
  height: 100%;
  width: 100%;
  border: none;
`;
