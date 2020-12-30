import React from "react";
import Rows from "./Rows";
import requests from "./request";
import Banner from "./Banner";
import SideBar from "./SideBar";
import Nav from "./Nav";
import { useAuth } from "./context/AuthContext";

function Home() {
  const { currentUser } = useAuth();

  return (
    <div style={{ background: "black" }}>
      <SideBar />
      <Nav />
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

export default Home;
