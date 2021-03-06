import React from "react";
import "./navBar.css";

const NavBar = () => {
  return (
    <nav>
      <label htmlFor="toggle">☰</label>
      <input type="checkbox" id="toggle" />
      <ul>
        <a href="#HOME" className="active">
          HOME
        </a>
        <a href="#ABOUT">ABOUT</a>
        <a href="#SKILLS">SKILLS</a>
        <a href="#CONTACT">CONTACT</a>
        <a href="https://goeun-woo.github.io/">BLOG</a>
      </ul>
    </nav>
  );
};

export default NavBar;
