import React from "react";

const Nav = ({ toggleNav }) => {
  return (
    <nav className="nav">
      <a
        href="#about"
        className="nav-link"
        onClick={() => {
          toggleNav("closeNav");
        }}
      >
        About
      </a>
      <a
        href="#projects"
        className="nav-link"
        onClick={() => {
          toggleNav("closeNav");
        }}
      >
        Projects
      </a>
      <a
        href="#contact"
        className="nav-link"
        onClick={() => {
          toggleNav("closeNav");
        }}
      >
        Contact
      </a>
      <button className="nav-link nav-link-btn">Resume</button>
    </nav>
  );
};

export default Nav;
