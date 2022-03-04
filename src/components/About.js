import React, { useEffect } from "react";

// import useInView hook - used to monitor elements and know when they are in the viewport
import { useInView } from "react-intersection-observer";

// import motion -for animating elements, useAnimation - used with useInView for starting animations when elements are in the viewport
import { motion, useAnimation } from "framer-motion";

// stylesheet import
import "../styles/about.css";

// image import
import myImage from "../assets/my-image.jpeg";

import Skill from "./Skill";

const About = () => {
  // destructure the useInView hook to get the ref and inView properties - this ref and inView is used the about section
  const { ref, inView } = useInView({
    threshold: 0.15,
  });

  // destructure the useInView hook to get the ref and inView properties, then rename the variables to aboutGridRef and aboutGridInview respectively - this aboutGridRef and aboutGridInview is used to the grid section in about section
  const { ref: aboutGridRef, inView: aboutGridInview } = useInView({
    threshold: 0.25,
  });

  // destructure the useInView hook to get the ref and inView properties, then rename the variables to aboutImageRef and aboutImageInview respectively - this aboutImageRef and aboutImageInview is used to monitor the image in grid section in about section
  const { ref: aboutImageRef, inView: aboutImageInview } = useInView({
    threshold: 0.3,
  });

  // destructure the useInView hook to get the ref and inView properties, then rename the variables to skillRef and skillInview respectively - this skillRef and skillInview is used to monitor the skills list in grid section in about section
  const { ref: skillRef, inView: skillInview } = useInView({
    threshold: 0.75,
  });

  // setting different variables to the useAnimation hook
  const aboutSectionAnimation = useAnimation();
  const aboutTextAnimation = useAnimation();
  const aboutImageAnimation = useAnimation();
  const skillItemAnimation = useAnimation();

  // create variants object for about section
  const aboutSectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // create variants object for the text in the grid section in the about section
  const aboutTextVariants = {
    hidden: { opacity: 0, y: "15%" },
    visible: {
      opacity: 1,
      y: "0%",
      transition: {
        type: "spring",
        stiffness: 60,
        delay: 0.2,
      },
    },
  };

  // create variants object for the image in the grid section in the about section
  const aboutImageVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: 0.35,
      },
    },
  };

  // create variants object for the skills list in the grid section in the about section
  const skillItem = {
    hidden: { opacity: 0, x: "-30%" },
    visible: {
      opacity: 1,
      x: "0%",
      transition: { type: "spring", duration: 0.8 },
    },
  };

  useEffect(() => {
    // check if about section is in the viewport
    if (inView) {
      aboutSectionAnimation.start(aboutSectionVariants.visible);
    } else {
      aboutSectionAnimation.start(aboutSectionVariants.hidden);
    }

    // check if grid section is in the viewport
    if (aboutGridInview) {
      aboutTextAnimation.start(aboutTextVariants.visible);
    } else {
      aboutTextAnimation.start(aboutTextVariants.hidden);
    }

    // check if the image in grid section is in the viewport
    if (aboutImageInview) {
      aboutImageAnimation.start(aboutImageVariants.visible);
    } else {
      aboutImageAnimation.start(aboutImageVariants.hidden);
    }

    // check if skill section in is in the viewport
    if (skillInview) {
      skillItemAnimation.start(skillItem.visible);
    } else {
      skillItemAnimation.start(skillItem.hidden);
    }
  });

  const skills = ["JavaScript", "React", "HTML", "CSS"];

  return (
    <section id="about" className="about-section">
      <motion.div
        className="about-section-container"
        ref={ref}
        variants={aboutSectionVariants}
        animate={aboutSectionAnimation}
      >
        <motion.h3
          className={
            inView ? "about-section-heading in-view" : "about-section-heading"
          }
        >
          About me
        </motion.h3>

        <motion.div className="about-section-grid" ref={aboutGridRef}>
          <motion.div
            className="about-details"
            variants={aboutTextVariants}
            animate={aboutTextAnimation}
          >
            <p className="about-desc">
              Hi there! My name is Ogungbemi Oluwapelumi and I enjoy creating
              things that live on the web.{" "}
            </p>
            <p className="about-desc">
              A frontend developer based in Lagos, Nigeria. I'm obsessed with
              making things and even more obsessed with making things better. My
              interest however extends beyond the web and I love helping people.
            </p>
            <p className="about-desc">
              When I'm not designing or developing, I'm probably reading,
              researching or hanging out with friends.
            </p>
            <p className="about-desc">
              My goal is to build fast, user-friendly, mobile-first web
              applications that clearly communicate with users
            </p>
          </motion.div>

          <motion.div
            className="image-wrapper"
            ref={aboutImageRef}
            variants={aboutImageVariants}
            animate={aboutImageAnimation}
          >
            <img
              src={myImage}
              alt=" Head shot of Oluwapelumi smiling"
              className="about-image"
            />
          </motion.div>

          <motion.ul className="skills-group" ref={skillRef}>
            <h4 className="skills-heading">Skills</h4>
            <p className="skills-intro">
              Here are a few technology I've been working with:
            </p>

            <Skill
              variants={skillItem}
              animate={skillItemAnimation}
              skills={skills}
            />
          </motion.ul>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
