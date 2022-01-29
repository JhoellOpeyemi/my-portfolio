import React from "react";

import Nav from "./Nav";

// stylesheet import
import "../styles/header.css";

const Header = () => {
  const toggleNav = (par) => {
    const body = document.querySelector("body");
    const nav = document.querySelector("nav");
    const button = document.querySelector(".hamburger");

    if (par === "openNav") {
      body.classList.toggle("noscroll");
      nav.classList.toggle("active");
      button.classList.toggle("open");
    } else if (par === "closeNav") {
      body.classList.remove("noscroll");
      nav.classList.remove("active");
      button.classList.remove("open");
    }
  };

  return (
    <header className="header">
      <div className="logo-nav-wrapper">
        <a href="/" className="logo">
          JhoellDevIt
        </a>

        <Nav toggleNav={toggleNav} />

        <button
          className="hamburger"
          onClick={() => {
            toggleNav("openNav");
          }}
        >
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
