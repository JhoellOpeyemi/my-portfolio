import React, { useEffect } from "react";

// import useInView hook - used to monitor elements and know when they are in the viewport
import { useInView } from "react-intersection-observer";

// import motion -for animating elements, useAnimation - used with useInView for starting animations when elements are in the viewport
import { motion, useAnimation } from "framer-motion";

import { Link } from "react-router-dom";

const Project = ({ title, desc, stack, githubLink, siteLink, image }) => {
  const { ref: projectRef, inView: projectInView } = useInView({
    threshold: 0.42,
  });

  const projectDetailAnimation = useAnimation();
  const projectImageAnimation = useAnimation();

  const projectDetailVariants = {
    hidden: { opacity: 0, y: "20%" },
    visible: {
      opacity: 1,
      y: "0%",
      transition: { delay: 0.2, duration: 0.4 },
    },
  };

  const projectImageVariants = {
    hidden: { opacity: 0, x: "70%" },
    visible: {
      opacity: 1,
      x: "0%",
      transition: { delay: 0.4, duration: 0.5 },
    },
  };

  useEffect(() => {
    if (projectInView) {
      projectDetailAnimation.start(projectDetailVariants.visible);
      projectImageAnimation.start(projectImageVariants.visible);
    } else {
      projectDetailAnimation.start(projectDetailVariants.hidden);
      projectImageAnimation.start(projectImageVariants.hidden);
    }
  });

  const urlTitle = title.split(" ").join("-").toLowerCase();

  return (
    <div className="project-wrapper" ref={projectRef}>
      <motion.div
        className="project-details-group"
        animate={projectDetailAnimation}
      >
        <img src={image} alt="Project" className="project-details-image" />
        <div className="projects-details-image-overlay"></div>
        <div className="project-details">
          <h4 className="project-title">
            <a href={siteLink} target={"_blank"} rel="noreferrer">
              {title}
            </a>
          </h4>
          <p className="project-desc">{desc}</p>
          <Link to={`/${urlTitle}`} className="read-more-btn">
            Read More
          </Link>

          <div className="tech-stack">
            {stack.map((tech) => {
              return <span key={tech}>{tech}</span>;
            })}
          </div>

          <div className="project-links">
            <a
              href={githubLink}
              target={"_blank"}
              rel="noreferrer"
              className="social-link github"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15 0C6.7125 0 0 6.7125 0 15C0 21.6375 4.29375 27.2437 10.2563 29.2312C11.0063 29.3625 11.2875 28.9125 11.2875 28.5187C11.2875 28.1625 11.2688 26.9812 11.2688 25.725C7.5 26.4187 6.525 24.8062 6.225 23.9625C6.05625 23.5312 5.325 22.2 4.6875 21.8437C4.1625 21.5625 3.4125 20.8687 4.66875 20.85C5.85 20.8312 6.69375 21.9375 6.975 22.3875C8.325 24.6562 10.4812 24.0187 11.3438 23.625C11.475 22.65 11.8688 21.9937 12.3 21.6187C8.9625 21.2437 5.475 19.95 5.475 14.2125C5.475 12.5812 6.05625 11.2312 7.0125 10.1812C6.8625 9.80625 6.3375 8.26875 7.1625 6.20625C7.1625 6.20625 8.41875 5.8125 11.2875 7.74375C12.4875 7.40625 13.7625 7.2375 15.0375 7.2375C16.3125 7.2375 17.5875 7.40625 18.7875 7.74375C21.6562 5.79375 22.9125 6.20625 22.9125 6.20625C23.7375 8.26875 23.2125 9.80625 23.0625 10.1812C24.0188 11.2312 24.6 12.5625 24.6 14.2125C24.6 19.9687 21.0938 21.2437 17.7563 21.6187C18.3 22.0875 18.7688 22.9875 18.7688 24.3937C18.7688 26.4 18.75 28.0125 18.75 28.5187C18.75 28.9125 19.0312 29.3812 19.7812 29.2312C22.759 28.2259 25.3465 26.3121 27.1796 23.7592C29.0127 21.2063 29.9991 18.1429 30 15C30 6.7125 23.2875 0 15 0Z"
                  fill="#BFBFBF"
                />
              </svg>
            </a>

            <a
              href={siteLink}
              target={"_blank"}
              rel="noreferrer"
              className="social-link live-link"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
                  stroke="#BFBFBF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 3H21V9"
                  stroke="#BFBFBF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 14L21 3"
                  stroke="#BFBFBF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div className="project-image" animate={projectImageAnimation}>
        <div className="project-image-overlay"></div>
        <img src={image} alt="Project" />
      </motion.div>
    </div>
  );
};

export default Project;
