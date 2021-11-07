import React from "react";
import MoviesGrid from "../MoviesGrid";

export default function Main(props) {
  return <MoviesGrid movies={props.movies} />;
}
