// src/components/Header.js
import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css"

const Header = () => (
  <Navbar bg="light" expand="lg" >
    <Navbar.Brand as={Link} to="/"><img style={{width:"50px"}} src="./images/logo.png" alt="logo"/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/about">About Us</Nav.Link>
        <Nav.Link as={Link} to="/features">Features</Nav.Link>
        <Nav.Link as={Link} to="/services">Services</Nav.Link>
        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
       
      </Nav>
      <div className="d-flex">
  <Button variant="outline-success" as={Link} to="/signin">Sign In</Button>
  <Button variant="outline-primary" as={Link} to="/signup" className="ml-4" style={{marginLeft:'5px'}}>Sign Up</Button>
</div>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
