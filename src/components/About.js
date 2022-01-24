import React from "react";

import "../styles/about.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <h3 className="about-section-heading">About me</h3>
      <div className="about-section-grid">
        <div className="about-details">
          <p className="about-desc">
            Hello! My name is Ogungbemi Oluwapelumi Joel and I enjoy creating
            things that live on the internet.{" "}
          </p>
          <p className="about-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
            tempora! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit recusandae quisquam voluptas aperiam porro architecto
            sint dolorum obcaecati, eaque alias!
          </p>

          <ul className="skills-group">
            <h4 className="skills-heading">Skills</h4>

            <li className="skill">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="skill-arrow"
              >
                <path
                  d="M10.46 18C10.146 17.9982 9.83587 17.93 9.55 17.8C9.24083 17.6637 8.97741 17.4413 8.79122 17.1594C8.60503 16.8774 8.50393 16.5479 8.5 16.21V7.79001C8.50393 7.45215 8.60503 7.12257 8.79122 6.84063C8.97741 6.55868 9.24083 6.33629 9.55 6.20001C9.90574 6.03198 10.3015 5.96726 10.6923 6.01323C11.083 6.05919 11.453 6.214 11.76 6.46001L16.86 10.67C17.06 10.8292 17.2215 11.0315 17.3325 11.2618C17.4435 11.492 17.5012 11.7444 17.5012 12C17.5012 12.2556 17.4435 12.508 17.3325 12.7383C17.2215 12.9685 17.06 13.1708 16.86 13.33L11.76 17.54C11.3924 17.8381 10.9333 18.0006 10.46 18Z"
                  fill="#83EEFF"
                />
              </svg>
              JavaScript
            </li>
            <li className="skill">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="skill-arrow"
              >
                <path
                  d="M10.46 18C10.146 17.9982 9.83587 17.93 9.55 17.8C9.24083 17.6637 8.97741 17.4413 8.79122 17.1594C8.60503 16.8774 8.50393 16.5479 8.5 16.21V7.79001C8.50393 7.45215 8.60503 7.12257 8.79122 6.84063C8.97741 6.55868 9.24083 6.33629 9.55 6.20001C9.90574 6.03198 10.3015 5.96726 10.6923 6.01323C11.083 6.05919 11.453 6.214 11.76 6.46001L16.86 10.67C17.06 10.8292 17.2215 11.0315 17.3325 11.2618C17.4435 11.492 17.5012 11.7444 17.5012 12C17.5012 12.2556 17.4435 12.508 17.3325 12.7383C17.2215 12.9685 17.06 13.1708 16.86 13.33L11.76 17.54C11.3924 17.8381 10.9333 18.0006 10.46 18Z"
                  fill="#83EEFF"
                />
              </svg>
              React
            </li>
            <li className="skill">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="skill-arrow"
              >
                <path
                  d="M10.46 18C10.146 17.9982 9.83587 17.93 9.55 17.8C9.24083 17.6637 8.97741 17.4413 8.79122 17.1594C8.60503 16.8774 8.50393 16.5479 8.5 16.21V7.79001C8.50393 7.45215 8.60503 7.12257 8.79122 6.84063C8.97741 6.55868 9.24083 6.33629 9.55 6.20001C9.90574 6.03198 10.3015 5.96726 10.6923 6.01323C11.083 6.05919 11.453 6.214 11.76 6.46001L16.86 10.67C17.06 10.8292 17.2215 11.0315 17.3325 11.2618C17.4435 11.492 17.5012 11.7444 17.5012 12C17.5012 12.2556 17.4435 12.508 17.3325 12.7383C17.2215 12.9685 17.06 13.1708 16.86 13.33L11.76 17.54C11.3924 17.8381 10.9333 18.0006 10.46 18Z"
                  fill="#83EEFF"
                />
              </svg>
              CSS
            </li>
            <li className="skill">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="skill-arrow"
              >
                <path
                  d="M10.46 18C10.146 17.9982 9.83587 17.93 9.55 17.8C9.24083 17.6637 8.97741 17.4413 8.79122 17.1594C8.60503 16.8774 8.50393 16.5479 8.5 16.21V7.79001C8.50393 7.45215 8.60503 7.12257 8.79122 6.84063C8.97741 6.55868 9.24083 6.33629 9.55 6.20001C9.90574 6.03198 10.3015 5.96726 10.6923 6.01323C11.083 6.05919 11.453 6.214 11.76 6.46001L16.86 10.67C17.06 10.8292 17.2215 11.0315 17.3325 11.2618C17.4435 11.492 17.5012 11.7444 17.5012 12C17.5012 12.2556 17.4435 12.508 17.3325 12.7383C17.2215 12.9685 17.06 13.1708 16.86 13.33L11.76 17.54C11.3924 17.8381 10.9333 18.0006 10.46 18Z"
                  fill="#83EEFF"
                />
              </svg>
              HTML
            </li>
          </ul>
        </div>
        <div className="image-wrapper">
          <div className="about-image"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
