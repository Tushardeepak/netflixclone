import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { generateMedia } from "styled-media-query";

import pic1 from "../images/tab-tv.png";
import pic2 from "../images/tab-tablet.png";
import pic3 from "../images/tab-macbook.png";

function TabContentTwo() {
  return (
    <TabOneContainer>
      <TabTwoContent>
        <TabTop>
          <span>
            Watch TV shows and movies anytime, anywhere - personalized for you
          </span>
          <Button
            style={{
              background: "red",
              width: "15rem",
              gridColumn: "10/12",
              margin: "0 1.25rem 1.25rem",
              transform: "scale(0.7)",
            }}
            onClick={() =>
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              })
            }
          >
            try it now
          </Button>
        </TabTop>
        <TabBottom>
          <div>
            <img src={pic1} style={{ width: "18.75rem" }}></img>
            <h1 style={{ color: "#fff" }}>Watch on TV</h1>
            <p style={{ color: "grey" }}>
              Smart TVs, PlayStation, Xbox, ChromeCast, Apple TV, Blu-ray
              players and more.
            </p>
          </div>
          <div>
            <img
              src={pic2}
              style={{ width: "18.75", paddingTop: "0.625rem" }}
            ></img>
            <h1 style={{ color: "#fff" }}>Watch on Tablet</h1>
            <p style={{ color: "grey" }}>
              Smart TVs, PlayStation, Xbox, ChromeCast, Apple TV, Blu-ray
              players and more.
            </p>
          </div>
          <div>
            <img src={pic3} style={{ width: "18.75rem" }}></img>
            <h1 style={{ color: "#fff" }}>Watch on Laptop</h1>
            <p style={{ color: "grey" }}>
              Smart TVs, PlayStation, Xbox, ChromeCast, Apple TV, Blu-ray
              players and more.
            </p>
          </div>
        </TabBottom>
      </TabTwoContent>
    </TabOneContainer>
  );
}

export default TabContentTwo;

const customMedia = generateMedia({
  lgDesktop: "1350px",
  mdDesktop: "1150px",
  tablet: "960px",
  smTablet: "740px",
});

const TabOneContainer = styled.div`
  padding: 0 5rem;

  img {
    ${customMedia.lessThan("tablet")`
      transform:scale(0.8);
    `}
  }
  ${customMedia.lessThan("tablet")`
       padding: 0rem;
    `}
  p {
    ${customMedia.lessThan("tablet")`
       padding: 0 5rem;
    `}
  }
  span {
    grid-column: 1 / 8;
    color: #fff;
    font-size: 1.5rem;
    ${customMedia.lessThan("tablet")`
       padding: 0 2rem;
       text-align:center;
    `}
  }
`;
const TabTwoContent = styled.div`
  ${customMedia.lessThan("tablet")`
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
    `}
`;
const TabTop = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  justify-content: center;
  align-items: center;
  padding: 2.5rem 0;

  ${customMedia.lessThan("tablet")`
      display:flex;
      flex-direction:column;
      
    `}
`;
const TabBottom = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  text-align: center;
  margin-top: 2rem;

  ${customMedia.lessThan("tablet")`
     grid-template-columns: repeat(1, 1fr);
     grid-gap: 0rem;
     margin-left:0rem;
   
    `}
`;
