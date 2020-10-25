import styled from "styled-components";

export const DetailContainer = styled.div`
  width: 100%;
  height: 500px;
  background-color: black;
  z-index: 10;
  position: relative;
  display: ${({ display }) => (display ? "" : "none")};

  @media screen and (max-width: 1100px) {
    height: 300px;
  }
`;

export const ButtonContainer = styled.div`
  background-color: none;
  margin: 20px;
  z-index: 1000;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
`;

export const DetailInfoBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
export const DetailImgBox = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  width: 60%;
  z-index: 100;
  right: 0;
  top: 0;

  @media screen and (max-width: 800px) {
    width: 100%;
    filter: brightness(50%);
  }
`;
export const ImageBox = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`;
export const DetailImg = styled.img`
  height: 100%;
  width: 100%;
`;

export const DetailInfo = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 40%;
  z-index: 1000;
  left: 0;
  top: 0;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
export const DetailH1 = styled.h1`
  font-size: 40px;
  color: #fff;
  text-transform: uppercase;
  padding: 40px;
  padding-top: 0px;

  @media screen and (max-width: 1100px) {
    font-size: 30px;
    padding-bottom: 10px;
  }
`;

export const DetailP = styled.p`
  color: #fff;
  padding: 10px 30px;
  padding-left: 40px;

  @media screen and (max-width: 1100px) {
    font-size: 10px;
    padding: 5px 30px;
  }
`;

export const Play = styled.div`
  background-color: none;
  width: 40%;
  padding: 10px 30px;
  padding-left: 40px;
  outline: none;

  @media screen and (max-width: 1100px) {
    padding: 10px 30px;
  }
`;

export const Title = styled.div`
  background-color: none;
  width: 40%;
  padding-top: 20px;
  padding-left: 0px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Nlogo = styled.img`
  height: 15px;
  width: 15px;

  @media screen and (max-width: 1100px) {
    height: 7px;
    width: 7px;
  }
`;

export const Ntitle = styled.h6`
  text-transform: uppercase;
  letter-spacing: 5px;
  color: #fff;
  font-size: 15px;

  @media screen and (max-width: 1100px) {
    font-size: 5px;
  }
`;

export const SmallDesc = styled.div`
  background-color: none;
  padding: 10px;
  padding-left: 0px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`;

export const Year = styled.p`
  color: rgb(151, 150, 150);
  font-size: 13px;
  @media screen and (max-width: 1100px) {
    font-size: 5px;
  }
`;

export const Adult = styled.p`
  border: 1px solid rgb(151, 150, 150);
  color: rgb(151, 150, 150);
  font-size: 13px;
  @media screen and (max-width: 1100px) {
    font-size: 5px;
  }
`;

export const Seasons = styled.p`
  color: rgb(151, 150, 150);
  font-size: 13px;
  @media screen and (max-width: 1100px) {
    font-size: 5px;
  }
`;
export const Rate = styled.p`
  color: rgb(151, 150, 150);
  font-size: 13px;
  @media screen and (max-width: 1100px) {
    font-size: 5px;
  }
`;

export const BorderRight = styled.p`
  padding-right: 20px;
  padding-left: 20px;
  color: rgb(151, 150, 150);
  font-size: 13px;
  @media screen and (max-width: 1100px) {
    font-size: 5px;
  }
`;
