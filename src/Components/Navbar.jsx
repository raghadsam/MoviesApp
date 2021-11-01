import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import movie from "./movie.svg";
export default function Navbarr() {
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

            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Grab some 🍿"
                className="me-2 Cursor"
                aria-label="Search"
              />
              <Button variant="outline-info" id="SearchButton" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
