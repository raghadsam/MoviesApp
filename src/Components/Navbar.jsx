import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, NavDropdown, Spinner } from "react-bootstrap";
import movie from "./movie.svg";
import SearchBar from "./SearchBar";
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
            <Nav className="me-auto">
              <Nav.Link href="#features" id="navbarElements">
                Features
              </Nav.Link>
              <Nav.Link href="#pricing" id="navbarElements">
                Pricing
              </Nav.Link>
              <NavDropdown title="Dropdown" id="navbarElements">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            {loading && <BlockLoading color="#0dcaf0" id="Spinner" />}
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
