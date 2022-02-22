import React from "react";
import { motion } from "framer-motion";

import Nav from "./Nav";

// stylesheet import
import "../styles/header.css";

const headerVariants = {
  hidden: {},
  visible: {},
};

const hamburgerVariants = {
  hidden: {
    x: "200%",
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.3,
      delay: 0.5,
    },
  },
};

const Header = () => {
  const toggleNav = (par) => {
    const body = document.querySelector("body");
    const mobileNav = document.querySelector(".mobile-nav");
    const button = document.querySelector(".hamburger");

    if (par === "openNav") {
      body.classList.toggle("noscroll");
      mobileNav.classList.toggle("active");
      button.classList.toggle("open");
    } else if (par === "closeNav") {
      body.classList.remove("noscroll");
      mobileNav.classList.remove("active");
      button.classList.remove("open");
    }
  };

  return (
    <header className="header">
      <motion.div
        className="logo-nav-wrapper"
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <a href="/" className="logo">
          JhoellDevIt
        </a>

        <Nav toggleNav={toggleNav} />

        <motion.button
          className="hamburger"
          onClick={() => {
            toggleNav("openNav");
          }}
          variants={hamburgerVariants}
        >
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </motion.button>
      </motion.div>
    </header>
  );
};

export default Header;
