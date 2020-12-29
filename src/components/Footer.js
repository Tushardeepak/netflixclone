import React from "react";
import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";
import StarIcon from "@material-ui/icons/Star";
import { generateMedia } from "styled-media-query";

function Footer() {
  return (
    <FooterContainer>
      <span style={{ marginLeft: "15%", fontSize: "1.125rem" }}>
        Questions? Email: tushardeepak22@gmail.com
      </span>
      <div className="footerColumn">
        <ul>
          <li>FAQ</li>
          <li>Investor Relations</li>
          <li>Ways to Watch</li>
          <li>Corporate Information</li>
          <li>Netflix Originals</li>
        </ul>
        <ul>
          <li>Help Center</li>
          <li>Jobs</li>
          <li>Terms of Use</li>
          <li>Contact Us</li>
        </ul>
        <ul>
          <li>Amount</li>
          <li>Redeem Gft Card</li>
          <li>Privacy</li>
          <li>Speed Test</li>
        </ul>
        <ul>
          <li>Media Center</li>
          <li>Buy Gift Cards</li>
          <li>Cookie Preferences</li>
          <li>Legal Notices</li>
        </ul>
      </div>
      <div
        style={{
          position: "absolute",
          zIndex: "1000",
          bottom: 0,
          color: "#999",
          background: "rgb(27, 27, 27)",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1rem",
          padding: "0.5rem 0",
        }}
      >
        <p>
          Made by{" "}
          <a
            href="https://github.com/Tushardeepak/netflixclone"
            style={{ textDecoration: "none", color: "#999" }}
          >
            TUSHAR DEEPAK{" "}
            <GitHubIcon
              style={{
                color: "#999",
                fontSize: "1rem",
                padding: "0 0.2rem",
              }}
            />
          </a>{" "}
          (Give a star{" "}
          <StarIcon
            style={{ color: "gold", fontSize: "1rem", padding: "0 0.2rem" }}
          />
          )
        </p>
      </div>
    </FooterContainer>
  );
}

export default Footer;

const customMedia = generateMedia({
  lgDesktop: "1350px",
  mdDesktop: "1150px",
  tablet: "960px",
  smTablet: "740px",
});

const FooterContainer = styled.div`
  padding-top: 6rem;
  padding-bottom: 4rem;
  color: #999;
  position: relative;

  span {
    ${customMedia.lessThan("tablet")`
       font-size:0.8rem !important;
    `}
  }

  ${customMedia.lessThan("tablet")`
    padding-top: 3rem;
    padding-bottom: 3rem;
    `}

  li {
    text-decoration: none;
    list-style: none;
    line-height: 2.5;
  }
  .footerColumn li:hover {
    color: #999;
  }

  .footerColumn {
    width: 70%;
    margin: 1rem auto 0;
    font-size: 0.9rem;
    overflow: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    ${customMedia.lessThan("tablet")`
      width: 80%;
      margin: 0.7rem auto 0;
      font-size: 0.7rem;
      grid-template-columns: repeat(2, 1fr);
    `}
  }
`;
