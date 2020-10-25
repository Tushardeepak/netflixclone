import React, { useEffect, useState } from "react";
import axios from "./axios";
import {
  VideoContainer,
  Icons,
  CloseIcon,
  VideoBox,
  VideoPlayerBox,
  VideoPlayer,
} from "./VideoStyle";

function Video({ isOpen, toggle, id }) {
  const [key, setkey] = useState([]);

  const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=4acbe4fe4c03b3257b55ac56872d8440&language=en-US`;

  useEffect(() => {
    axios
      .get(url)
      .then((requests) => {
        setkey(requests.data.results[0].key);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return (
    <VideoContainer isOpen={isOpen}>
      <VideoBox>
        <Icons onClick={toggle}>
          <CloseIcon />
        </Icons>
        <VideoPlayerBox>
          <VideoPlayer
            src={`https://www.youtube.com/embed/${key}?rel=0`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></VideoPlayer>
        </VideoPlayerBox>
      </VideoBox>
    </VideoContainer>
  );
}

export default Video;
