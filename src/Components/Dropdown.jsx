import React, { useState, useEffect } from "react";
import { NavDropdown } from "react-bootstrap";
import { constructUrl } from "../App";
export default function Dropdown() {
  const [genres, setGenres] = useState([]);

  const handleGenres = (path) => {
    fetch(constructUrl("", path))
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(path);
        setGenres(data.genres);
        console.log(genres);
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
      {genres.length > 0
        ? genres.map((genre) => {
            return (
              <>
                <NavDropdown.Item href="#" key={genre.id}>
                  {genre.name}
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </>
            );
          })
        : "Length is equal to 0"}
    </NavDropdown>
  );
}
