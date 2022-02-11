import React, { useEffect } from "react";

// import useInView hook - used to monitor elements and know when they are in the viewport
import { useInView } from "react-intersection-observer";

// import motion -for animating elements, useAnimation - used with useInView for starting animations when elements are in the viewport
import { motion, useAnimation } from "framer-motion";

// import project component
import Project from "./Project";

// import  stylesheet
import "../styles/projects.css";

const Projects = ({ covidProject, weatherProject }) => {
  const { ref: projectSectionRef, inView: projectSectionInView } = useInView({
    threshold: 0.2,
  });

  const projectSectionAnimation = useAnimation();
  const projectSubtitleAnimation = useAnimation();

  const projectSectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const projectSubtitleVariants = {
    hidden: { opacity: 0, y: "20%" },
    visible: {
      opacity: 1,
      y: "0%",
      transition: { delay: 0.15 },
    },
  };

  useEffect(() => {
    if (projectSectionInView) {
      projectSectionAnimation.start(projectSectionVariants.visible);
      projectSubtitleAnimation.start(projectSubtitleVariants.visible);
    } else {
      projectSectionAnimation.start(projectSectionVariants.hidden);
      projectSubtitleAnimation.start(projectSubtitleVariants.hidden);
    }
  });

  return (
    <motion.section
      id="projects"
      ref={projectSectionRef}
      variants={projectSectionVariants}
      animate={projectSectionAnimation}
    >
      <div className="projects-heading-group">
        <h3 className="projects-section-heading">
          {" "}
          <span className="featured">Featured</span>{" "}
          <span className="projects">Projects</span>{" "}
        </h3>
        <div className="divider-line"></div>
      </div>

      <motion.p
        className="projects-subtitle"
        variants={projectSubtitleVariants}
        animate={projectSubtitleAnimation}
      >
        Some things i've built
      </motion.p>

      <Project {...covidProject} />

      <Project {...weatherProject} />
    </motion.section>
  );
};

export default Projects;
