import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, NavDropdown, Spinner } from "react-bootstrap";
import movie from "./movie.svg";
import SearchBar from "./SearchBar";
import Dropdown from "./Dropdown";
import BlockLoading from "react-loadingg/lib/BlockLoading";
export default function Navbarr(props) {
  const [loading, setLoading] = useState(false);
  const onSearch = (bool) => {
    setLoading(bool);
  };
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark" id="navbar">
        <Container>
          <img src={movie} width="3%" />
          &nbsp; &nbsp;
          <Navbar.Brand href="#home">Movies App</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>

            {loading && <BlockLoading color="#0dcaf0" id="Spinner" />}
            <Dropdown />
            <SearchBar
              onSearch={onSearch}
              handleQuery={props.handleQuery}
              handleMovies={props.handleMovies}
            />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
