import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export function Header() {
  return (
    // const handleToggle = () => {

    // }
    <>
      <div className="header">
        <div className="heading">
          <h1>News Today</h1>
        </div>

        <ul className="navLinks">
          <li>
            <Link to="/" style={{ color: "black" }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/headline" style={{ color: "black" }}>
              Headline
            </Link>
          </li>
          <li>
            <Link to="/about" style={{ color: "black" }}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" style={{ color: "black" }}>
              Contact
            </Link>
          </li>
        </ul>

        <div className="theme">
          <i className="fa-regular fa-moon"></i>
        </div>
      </div>
    </>
  );
}
