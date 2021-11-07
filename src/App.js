import React, { useState, useEffect } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main";
import Navbarr from "./Components/Navbar";

const TMDB_BASE_URL = "https://api.themoviedb.org/3";
export const constructUrl = (query, path) => {
  return `${TMDB_BASE_URL}/${path}?api_key=${atob(
    "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
  )}&query=${query}`;
};
// const path = "search/movie";
//const genre="genre/movie/list"
function App() {
  const [movies, setMovies] = useState([]);

  const handleQuery = (query) => {
    console.log(query);
  };

  const handleMovies = (query, path) => {
    fetch(constructUrl(query, path))
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <Navbarr handleQuery={handleQuery} handleMovies={handleMovies} />
      <Main movies={movies} />
      <Footer />
    </div>
  );
}

export default App;
