import React from "react";
import MovieItem from "./MovieItem";
import { Row, Container, Col } from "react-bootstrap";
export default function MoviesGrid(props) {
  return (
    <Container>
      <Row xs={1} md={2}>
        {props.movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </Row>
    </Container>
  );
}
