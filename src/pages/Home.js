import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="Homepage">
      <h3>Welcome to HomePage</h3>
      <Button variant="secondary">
        <Link to="/ProductPage">
        Go to products
        </Link>
      </Button>
    </div>
  );
}
