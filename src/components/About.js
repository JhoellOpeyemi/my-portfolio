import React, { useEffect } from "react";

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

import "../styles/about.css";
import myImage from "../assets/my-image.jpeg";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const { ref: aboutGridRef, inView: aboutGridInview } = useInView({
    threshold: 0.3,
  });

  const { ref: aboutImageRef, inView: aboutImageInview } = useInView({
    threshold: 0.3,
  });

  const { ref: skillRef, inView: skillInview } = useInView({
    threshold: 0.9,
  });

  const aboutSectionAnimation = useAnimation();
  const aboutTextAnimation = useAnimation();
  const aboutImageAnimation = useAnimation();
  const skillItemAnimation = useAnimation();

  const aboutSectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

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

  const aboutImageVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  const skillGroupVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.4 },
    },
  };

  const skillItem = {
    hidden: { opacity: 0, x: "-30%" },
    visible: { opacity: 1, x: "0%" },
  };

  useEffect(() => {
    if (inView) {
      aboutSectionAnimation.start(aboutSectionVariants.visible);
    } else {
      aboutSectionAnimation.start(aboutSectionVariants.hidden);
    }

    if (aboutGridInview) {
      aboutTextAnimation.start(aboutTextVariants.visible);
    } else {
      aboutTextAnimation.start(aboutTextVariants.hidden);
    }

    if (aboutImageInview) {
      aboutImageAnimation.start(aboutImageVariants.visible);
    } else {
      aboutImageAnimation.start(aboutImageVariants.hidden);
    }

    if (skillInview) {
      skillItemAnimation.start(skillItem.visible);
    } else {
      skillItemAnimation.start(skillItem.hidden);
    }
  });

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
              Hello! My name is Ogungbemi Oluwapelumi and I enjoy creating
              things that live on the web.{" "}
            </p>
            <p className="about-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              tempora! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit recusandae quisquam voluptas aperiam porro
              architecto sint dolorum obcaecati, eaque alias!
            </p>
          </motion.div>

          <motion.div
            className="image-wrapper"
            ref={aboutImageRef}
            variants={aboutImageVariants}
            animate={aboutImageAnimation}
          >
            <img src={myImage} alt="" className="about-image" />
          </motion.div>

          <motion.ul
            className="skills-group"
            ref={skillRef}
            variants={skillGroupVariants}
            initial="hidden"
            animate="visible"
          >
            <h4 className="skills-heading">Skills</h4>
            <p className="skills-intro">
              Here are a few technology I've been working with:
            </p>

            <motion.li
              className="skill"
              variants={skillItem}
              animate={skillItemAnimation}
            >
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
            </motion.li>

            <motion.li
              className="skill"
              variants={skillItem}
              animate={skillItemAnimation}
            >
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
            </motion.li>

            <motion.li
              className="skill"
              variants={skillItem}
              animate={skillItemAnimation}
            >
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
            </motion.li>

            <motion.li
              className="skill"
              variants={skillItem}
              animate={skillItemAnimation}
            >
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
            </motion.li>
          </motion.ul>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
