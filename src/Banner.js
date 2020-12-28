import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./request";
import "./Banner.css";
import Video from "./Video";
import { useHistory } from "react-router-dom";

function Banner() {
  const [movie, setmovie] = useState([]);
  const [openVideo, setopenVideo] = useState(false);
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        requests.fetchNetflixOriginals || requests.fetchTopRated
      );
      setmovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const handleopenVideo = () => {
    setopenVideo(!openVideo);
  };

  const handleOpenList = () => {
    history.push("/myList");
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center top ",
      }}
    >
      <div className="banner_content">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button" onClick={() => handleopenVideo()}>
            <i className="fa fa-play" aria-hidden="true"></i>
            Play
          </button>
          <button className="banner_button" onClick={() => handleOpenList()}>
            <i class="fa fa-info-circle" aria-hidden="true"></i>
            My List
          </button>
        </div>
        <div className="banner_desc">{truncate(movie?.overview, 150)}</div>
      </div>
      <div className="banner_fade"></div>
      <Video isOpen={openVideo} toggle={handleopenVideo} id={movie.id}></Video>
    </header>
  );
}

export default Banner;
