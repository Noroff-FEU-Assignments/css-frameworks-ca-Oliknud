import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import { Link } from "react-router-dom";

const navBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container className="nav-container">
       
          <Navbar.Brand href="#home">The YAY Company</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <div className="links">
              <Nav.Link to="/">Home</Nav.Link>
              <Link to="/news">News</Link>
              <Nav.Link to="/contact">Contact</Nav.Link>
            </div>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2 nav-search"
                aria-label="Search"
              />
              <Button variant="outline-success">Go</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default navBar;
