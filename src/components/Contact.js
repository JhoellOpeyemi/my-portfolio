import React, { useEffect } from "react";

// import useInView hook - used to monitor elements and know when they are in the viewport
import { useInView } from "react-intersection-observer";

// import motion -for animating elements, useAnimation - used with useInView for starting animations when elements are in the viewport
import { motion, useAnimation } from "framer-motion";

import "../styles/contact.css";

const Contact = () => {
  const { ref: contactRef, inView: contactInView } = useInView({
    threshold: 0.4,
  });

  const contactAnimation = useAnimation();

  const contactVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  useEffect(() => {
    if (contactInView) {
      contactAnimation.start(contactVariants.visible);
    } else {
      contactAnimation.start(contactVariants.hidden);
    }
  });
  return (
    <>
      <motion.section
        id="contact"
        ref={contactRef}
        variants={contactVariants}
        animate={contactAnimation}
      >
        <h3 className="contact-section-heading">Get in touch</h3>
        <p className="contact-text">
          You have a project you want us to work on or you just want us to grab
          a drink together? Click the button below to leave a message 😊{" "}
        </p>

        <a
          href="mailto:jhoellpelumi@gmail.com"
          target={"_blank"}
          rel="noreferrer"
          className="contact-btn nav-link-btn"
        >
          Leave A Message
        </a>
      </motion.section>

      <footer className="footer">
        <a
          href="https://github.com/JhoellOpeyemi"
          target={"_blank"}
          rel="noreferrer"
          className="footer-text"
        >
          Designed & Developed by <span>JhoellDevIt</span>
        </a>
      </footer>
    </>
  );
};

export default Contact;
