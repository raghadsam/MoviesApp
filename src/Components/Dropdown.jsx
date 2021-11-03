import React, { useState, useEffect } from "react";
import { NavDropdown } from "react-bootstrap";
import { constructUrl } from "../App";
export default function Dropdown(props) {
  const [genres, setGenres] = useState([]);

  const handleGenres = (path) => {
    fetch(constructUrl("", path))
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(path);
        setGenres(data.genres);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    handleGenres("genre/movie/list");
  }, []);

  return (
    <NavDropdown title="Genres" id="navbarElements">
      <NavDropdown.Item href="#action/3.4">Hi1</NavDropdown.Item>
      {genres.length > 0
        ? genres.map((genre) => {
            <NavDropdown.Item href="#" key={genre.id}>
              {genre.name}
            </NavDropdown.Item>;
            console.log("hi");
          })
        : "Length is equal to 0"}

      <NavDropdown.Divider />
      <NavDropdown.Item href="#action/3.4">Hi2</NavDropdown.Item>
    </NavDropdown>
  );
}
