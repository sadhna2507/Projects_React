import React from "react";
import "./Header.css";

export function Header() {
  return (
    <>
      <div className="header">
        <div className="heading">
          <h1>News Today</h1>
        </div>

        <ul className="navLinks">
          <li>Home</li>
          <li>Headline</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className="theme">
          <i className="fa-regular fa-moon"></i>
        </div>
      </div>
    </>
  );
}
