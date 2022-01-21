import React, { useState } from "react";

import Nav from "./Nav";

// stylesheet import
import "../styles/header.css";

const Header = () => {
  const [navState, setNavState] = useState(false);

  const openNav = () => {
    setNavState(!navState);
  };

  return (
    <header className="header">
      <div className="logo-nav-wrapper">
        <p className="logo">JhoellDevIt</p>

        <Nav navState={navState} closeNav={openNav} />

        <button className="hamburger" onClick={openNav}>
          <span
            className={navState ? "line line1 active" : "line line1"}
          ></span>
          <span
            className={navState ? "line line2 active" : "line line2"}
          ></span>
          <span
            className={navState ? "line line3 active" : "line line3"}
          ></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
