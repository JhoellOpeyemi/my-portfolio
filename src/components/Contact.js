import React from "react";

import "../styles/contact.css";

const Contact = () => {
  return (
    <>
      <section id="contact">
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
      </section>

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
