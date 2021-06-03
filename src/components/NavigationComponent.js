import React, { useState } from "react";
import "./NavigationComponent.css";
import { Navbar, Nav, Button, Badge } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavigationComponent() {
  const { carts } = useSelector((state) => state.CartReducer);
  const history = useHistory()


  function navigateToDetail() {
    history.push('/login')
  }


  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">E-Commerce Haryo</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/ProductPage">Products</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/Cart">
              Cart <Badge variant="light">{carts.length}</Badge>
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/Histories">Histories</Link>
          </Nav.Link>
        </Nav>

        <Navbar.Collapse className="justify-content-end">
          <Button variant="secondary" onClick={navigateToDetail}>
            Login
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
