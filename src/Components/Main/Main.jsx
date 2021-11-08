import React from "react";
import MoviesGrid from "./MoviesGrid";

export default function Main(props) {
  return (
    <div id="main">
      <MoviesGrid movies={props.movies} />;
    </div>
  );
}
