import React, { useState, useEffect } from "react";
import "./Details.css";
import nLogo from "./N.png";
import Video from "./Video";
import {
  DetailContainer,
  ButtonContainer,
  DetailInfoBox,
  DetailInfo,
  DetailImgBox,
  DetailImg,
  ImageBox,
  DetailP,
  DetailH1,
  Play,
  Title,
  Nlogo,
  Ntitle,
  SmallDesc,
  Year,
  Adult,
  Seasons,
  Rate,
  BorderRight,
} from "./Details-style";
const Base_URL = "https://image.tmdb.org/t/p/original/";
function Details({ currentMovie, dis }) {
  const [display, setdisplay] = useState();
  const [openVideo, setopenVideo] = useState(false);
  useEffect(() => {
    setdisplay(dis);
  }, [dis]);

  function handleClose() {
    setdisplay(!dis);
  }
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  function truncate1(str, n) {
    return str?.length > n ? str.substr(0, n - 1) : str;
  }
  function seasons(obj) {
    return obj?.length;
  }

  const handleopenVideo = () => {
    setopenVideo(!openVideo);
  };

  return (
    <DetailContainer className="details" display={display}>
      <DetailInfoBox>
        <DetailInfo>
          <DetailH1>
            <Title>
              <Nlogo src={nLogo}></Nlogo>
              <Ntitle>{currentMovie.genre_ids ? "SERIES" : "MOVIE"}</Ntitle>
            </Title>
            {currentMovie.name || currentMovie.title}
          </DetailH1>
          <DetailP>
            <SmallDesc>
              <Year>
                {truncate1(currentMovie.first_air_date, 5) ||
                  truncate1(currentMovie.release_date, 5)}
              </Year>
              <BorderRight>|</BorderRight>
              <Adult>{currentMovie.adult ? "10+" : "18+"}</Adult>
              <BorderRight>|</BorderRight>
              <Seasons>{seasons(currentMovie.genre_ids)} Seasons</Seasons>
              <BorderRight>|</BorderRight>
              <Rate>{currentMovie.vote_average}</Rate>
            </SmallDesc>

            {truncate(currentMovie?.overview, 300)}
          </DetailP>
          <div style={{ display: "flex" }}>
            <Play onClick={() => handleopenVideo()}>
              <button className="banner_button_details">
                <i className="fa fa-play" aria-hidden="true"></i>
                Play
              </button>
            </Play>
            <Play style={{ marginLeft: "-7rem" }}>
              <button className="banner_button_details">
                <i className="fa fa-bookmark" aria-hidden="true"></i>
                Save
              </button>
            </Play>
          </div>
        </DetailInfo>
        <DetailImgBox>
          <div className="banner_fade_detail"></div>
          <ImageBox>
            <DetailImg
              src={`${Base_URL}${currentMovie.backdrop_path}`}
              alt={currentMovie.name}
            ></DetailImg>
          </ImageBox>
        </DetailImgBox>
      </DetailInfoBox>
      <ButtonContainer onClick={handleClose}>
        <i class="fa fa-window-close" aria-hidden="true"></i>
      </ButtonContainer>
      <Video
        isOpen={openVideo}
        toggle={handleopenVideo}
        id={currentMovie.id}
      ></Video>
    </DetailContainer>
  );
}

export default Details;
