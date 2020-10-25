import React, { useState, useEffect } from "react";
import "./Rows.css";
import logo from "../src/net.jpg";
import Axios from "axios";
import axios from "./axios";
import requests from "./request";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import Details from "./Details";
const Base_URL = "https://image.tmdb.org/t/p/original/";

function Rows({ title, fetchUrl, isLargeRow, id }) {
  const [movies, setmovies] = useState([]);
  const [display, setdisplay] = useState(false);
  var [currentMovie, setcurrentMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setmovies(request.data.results);
      console.log(movies);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    setcurrentMovie((currentMovie = movie));
    setdisplay(true);
    console.log(currentMovie);
  };

  return (
    <div className="row" id={id}>
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${Base_URL}${
              isLargeRow ? movie.poster_path : movie.poster_path
            }`}
            alt={`${movie.title}`}
          ></img>
        ))}
      </div>
      <Details currentMovie={currentMovie} dis={display}></Details>
    </div>
  );
}

export default Rows;
