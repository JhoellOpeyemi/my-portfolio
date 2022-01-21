import React from "react";

const Nav = ({ navState, closeNav }) => {
  return (
    <nav className={navState ? "nav open" : "nav"}>
      <a
        href="#about"
        className={navState ? "nav-link open" : "nav-link"}
        onClick={closeNav}
      >
        About
      </a>
      <a
        href="#projects"
        className={navState ? "nav-link open" : "nav-link"}
        onClick={closeNav}
      >
        Projects
      </a>
      <a
        href="#contacts"
        className={navState ? "nav-link open" : "nav-link"}
        onClick={closeNav}
      >
        Contact
      </a>
      <button className="nav-link nav-link-btn">Resume</button>
    </nav>
  );
};

export default Nav;
