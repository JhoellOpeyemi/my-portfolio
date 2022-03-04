import React, { useEffect } from "react";

// import useInView hook - used to monitor elements and know when they are in the viewport
import { useInView } from "react-intersection-observer";

// import motion -for animating elements, useAnimation - used with useInView for starting animations when elements are in the viewport
import { motion, useAnimation } from "framer-motion";

import resume from "../assets/resume.pdf";

const Nav = ({ toggleNav }) => {
  const { ref, inView } = useInView();

  const spanAnimation = useAnimation();

  const mobileSpanVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
      },
    },
  };

  useEffect(() => {
    if (inView) {
      spanAnimation.start(mobileSpanVariants.visible);
    } else {
      spanAnimation.start(mobileSpanVariants.hidden);
    }
  });

  return (
    <nav className="nav">
      <div className="desktop-nav">
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
        <a
          href={resume}
          target={"_blank"}
          rel="noreferrer"
          className="nav-link nav-link-btn"
        >
          Resume
        </a>
      </div>

      <div className="mobile-nav">
        <motion.p ref={ref}>
          <motion.span
            className="mobile-nav-span"
            variants={mobileSpanVariants}
            animate={spanAnimation}
          >
            Learn more{" "}
            <a
              href="#about"
              className="mobile-nav-link"
              onClick={() => {
                toggleNav("closeNav");
              }}
            >
              about&nbsp;me,
            </a>
          </motion.span>{" "}
          <motion.span
            className="mobile-nav-span"
            variants={mobileSpanVariants}
            animate={spanAnimation}
          >
            check out{" "}
            <a
              href="#projects"
              className="mobile-nav-link"
              onClick={() => {
                toggleNav("closeNav");
              }}
            >
              my&nbsp;projects
            </a>
          </motion.span>{" "}
          <motion.span
            className="mobile-nav-span"
            variants={mobileSpanVariants}
            animate={spanAnimation}
          >
            and{" "}
            <a
              href="#contact"
              className="mobile-nav-link"
              onClick={() => {
                toggleNav("closeNav");
              }}
            >
              contact&nbsp;me.
            </a>
          </motion.span>{" "}
          <motion.span
            className="mobile-nav-span"
            variants={mobileSpanVariants}
            animate={spanAnimation}
          >
            view my{" "}
            <a
              href={resume}
              target={"_blank"}
              rel="noreferrer"
              className="mobile-nav-link"
              onClick={() => {
                toggleNav("closeNav");
              }}
            >
              resume
            </a>
          </motion.span>
        </motion.p>
      </div>
    </nav>
  );
};

export default Nav;
