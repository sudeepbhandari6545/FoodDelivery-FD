import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import './navbar.css';

const Navbarcom = () => {
  return (
    <>
      <Navbar expand="lg" bg="dark" className="navbar-dark fixed-top">
        <Navbar.Brand
          className="text-warning font-weight-bold text-center"
          href="#home"
        >
          Food Delivery FD
        </Navbar.Brand>
        <Navbar.Toggle
          type="button"
          aria-label="Toggle navigation"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link className="text-white my-nav-item" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="text-white my-nav-item" href="#home">
              About Us
            </Nav.Link>
            <Nav.Link className="text-white my-nav-item" href="#home">
              New Item
            </Nav.Link>
            <Nav.Link className="text-white my-nav-item" href="#home">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navbarcom;
