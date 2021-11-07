import React from "react";
import MovieItem from "./MovieItem";

export default function MoviesGrid(props) {
  return (
    <div>
      {props.movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
