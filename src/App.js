import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Rows from "./Rows";
import requests from "./request";
import Banner from "./Banner";
import Nav from "./Nav";
import SideBar from "./SideBar";

function App() {
  return (
    <div className="App">
      <Router>
        <SideBar />
        <Nav />
      </Router>
      <Banner />
      <Rows
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Rows
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        id="trending"
      />
      <Rows title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Rows
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        id="action"
      />
      <Rows
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        id="comedy"
      />
      <Rows
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        id="horror"
      />
      <Rows
        title="Romance"
        fetchUrl={requests.fetchRomanceMovies}
        id="romance"
      />
      <Rows
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        id="documentary"
      />
    </div>
  );
}

export default App;
