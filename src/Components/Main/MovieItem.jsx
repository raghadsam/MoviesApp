import React from "react";
import { Card, Button } from "react-bootstrap";
export default function MovieItem(props) {
  const IMG_API = "https://image.tmdb.org/t/p/w1280";
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={
          props.movie.poster_path
            ? IMG_API + props.movie.poster_path
            : "https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289__340.jpg"
        }
        alt={props.movie.title}
      />
      <Card.Body>
        <Card.Title>{props.movie.title}</Card.Title>
        <Card.Text>{props.movie.overview}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
