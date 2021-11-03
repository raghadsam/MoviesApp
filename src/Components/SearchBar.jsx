import React, { useState, useEffect } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
export default function SearchBar(props) {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    props.onSearch(false);
    props.handleQuery(input);
  };
  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(input);
    props.onSearch(true);
  };

  return (
    <Form className="d-flex" onSubmit={handleSubmit}>
      <FormControl
        type="search"
        placeholder="Grab some 🍿"
        className="me-2 Cursor"
        aria-label="Search"
        value={input}
        onChange={handleChange}
      />
      <Button variant="outline-info" id="SearchButton" type="submit">
        Search
      </Button>
    </Form>
  );
}
