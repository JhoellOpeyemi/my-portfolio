import React from "react";

import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import covidVideo from "../assets/covid-project-video.mp4";
import weatherVideo from "../assets/weather-project-video.mp4";
import movieVideo from "../assets/movie-project-video.mp4";

const ProjectDetails = ({ covidProject, weatherProject, movieProject }) => {
  const params = useParams();

  const {
    title: covidProjectTitle,
    desc: covidProjectDesc,
    githubLink: covidProjectGithubLink,
    siteLink: covidProjectSiteLink,
  } = covidProject;

  const {
    title: weatherProjectTitle,
    desc: weatherProjectDesc,
    githubLink: weatherProjectGithubLink,
    siteLink: weatherProjectSiteLink,
  } = weatherProject;

  const {
    title: movieProjectTitle,
    desc: movieProjectDesc,
    githubLink: movieProjectGithubLink,
    siteLink: movieProjectSiteLink,
  } = movieProject;

  const goBack = () => {
    window.history.back();
  };

  const projectDetailsVariants = {
    hidden: {
      opacity: 0,
      x: "100%",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
      },
    },
  };

  return (
    <>
      {params.project === covidProject.urlTitle() ? (
        <motion.div
          className="project-detail-section"
          variants={projectDetailsVariants}
          initial="hidden"
          animate="visible"
        >
          <button className="go-back-btn" onClick={goBack}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z" />
            </svg>
          </button>
          <h2 className="project-detail-title">{covidProjectTitle}</h2>
          <p className="project-detail-desc">{covidProjectDesc}</p>

          <div className="project-details-text">
            <h3>Main Aim</h3>
            <p>
              The main aim of this app is to provide a medium that helps users
              keep track of coronavirus by displaying data such as active cases,
              number of deaths, etc.
            </p>

            <h3>How It Works</h3>
            <p>
              The app includes three sections - Home, Search and News. The home
              section displays the world data. The search section help users
              gets the data of desired country by inputting the name of the
              country in a search box. As a user type characters into the search
              box, the UI get updated and display buttons that contain real time
              suggestions. The news section was added as an extra feature that
              connect users to correct, verifiable and up-to-date news derived
              from reliable sources.
            </p>
            <p>
              This project was inspired by the outbreak and spread of
              coronavirus in early 2020.
            </p>

            <h3>Technology Used</h3>
            <p>
              The web app was built and developed with{" "}
              <span className="tech-used">React</span> - which is a javaScript
              library for building user interfaces,{" "}
              <span className="tech-used">React Router</span> - a standard
              library for routing in React,{" "}
              <span className="tech-used">Chart.js</span> - javaScript library
              for drawing charts, and <span className="tech-used">CSS</span> for
              styling.
            </p>

            <h3>What I Learned</h3>
            <ul className="learned-group">
              <li>Developing reusable and simple code</li>
              <li>Integrating charts with existing data using Chart.js</li>
              <li>Fetching, manipulating and displaying data from an API</li>
              <li>
                Using React Router to link components thereby creating an
                app-like environment
              </li>
            </ul>

            <ul className="links-group">
              <h3 className="links-heading">Links:</h3>
              <li>
                <a
                  href={covidProjectSiteLink}
                  target={"_blank"}
                  rel="noreferrer"
                  className="project-details-link"
                >
                  Live Site
                </a>
              </li>
              <li>
                <a
                  href={covidProjectGithubLink}
                  target={"_blank"}
                  rel="noreferrer"
                  className="project-details-link"
                >
                  Github
                </a>
              </li>
            </ul>
            <p>Play the video below to see the app in action</p>

            <div className="project-video-container">
              <video className="project-video" controls loop>
                <source src={covidVideo} />
              </video>
            </div>

            <p>
              Please follow the coronavirus safety measures in your area, stay
              safe.
            </p>
          </div>
        </motion.div>
      ) : params.project === weatherProject.urlTitle() ? (
        <motion.div
          className="project-detail-section"
          variants={projectDetailsVariants}
          initial="hidden"
          animate="visible"
        >
          <button className="go-back-btn" onClick={goBack}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z" />
            </svg>
          </button>
          <h2 className="project-detail-title">{weatherProjectTitle}</h2>
          <p className="project-detail-desc">{weatherProjectDesc}</p>

          <div className="project-details-text">
            <h3>Main Aim</h3>
            <p>
              The main aim of this app is to provide weather information such as
              humidity, maximum and minimum temperature, wind speed etc, to
              users around the world
            </p>

            <h3>How It Works</h3>
            <p>
              It works by getting your location (which you can either allow or
              deny). When allowed to access location, it displays weather data
              particular to your current location along with a 7-day report.
              There is also a search functionality for viewing details of other
              cities
            </p>

            <h3>Technology Used</h3>
            <p>
              The web app was built and developed with{" "}
              <span className="tech-used">React</span> - which is a javaScript
              library for building user interfaces,{" "}
              <span className="tech-used">WeatherBit API</span> - an application
              programming interface for getting weather details and{" "}
              <span className="tech-used">CSS</span> for styling.
            </p>

            <h3>What I Learned</h3>
            <ul className="learned-group">
              <li>Getting users location using the Browser API</li>
              <li>
                Understanding and working with dates in JavaScript so as to
                provide a 7-day report
              </li>
              <li>More about flexbox in CSS</li>
            </ul>

            <ul className="links-group">
              <h3 className="links-heading">Links:</h3>
              <li>
                <a
                  href={covidProjectSiteLink}
                  target={"_blank"}
                  rel="noreferrer"
                  className="project-details-link"
                >
                  Live Site
                </a>
              </li>
              <li>
                <a
                  href={covidProjectGithubLink}
                  target={"_blank"}
                  rel="noreferrer"
                  className="project-details-link"
                >
                  Github
                </a>
              </li>
            </ul>

            <p>Play the video below to see the app in action</p>

            <div className="project-video-container">
              <video className="project-video" controls loop>
                <source src={weatherVideo} />
              </video>
            </div>
          </div>
        </motion.div>
      ) : params.project === movieProject.urlTitle() ? (
        <motion.div
          className="project-detail-section"
          variants={projectDetailsVariants}
          initial="hidden"
          animate="visible"
        >
          <button className="go-back-btn" onClick={goBack}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z" />
            </svg>
          </button>

          <h2 className="project-detail-title">{movieProjectTitle}</h2>
          <p className="project-detail-desc">{movieProjectDesc}</p>

          <div className="project-details-text">
            <h3>Main Aim</h3>
            <p>
              This project was made for movie lovers who love to view movie
              ratings and overview before watching a movie.{" "}
              <p> It was inspired by Netflix.</p>
            </p>

            <h3>How It Works</h3>
            <p>
              Though it is not a movie streaming app, it is a web app that allow
              users view movie ratings, overview and images under different
              categories such as trending, popular, top-rated, recommended and
              now playing. Once a category is clicked, a request is sent to the
              API to fetch data for the category clicked and the UI gets updated
              with the data received.
            </p>

            <h3>Technology Used</h3>
            <p>
              The web app was built and developed with{" "}
              <span className="tech-used">React</span> - which is a javaScript
              library for building user interfaces,{" "}
              <span className="tech-used">TMDB API</span> - an application
              programming interface for fetching details about movies and{" "}
              <span className="tech-used">CSS</span> for styling.
            </p>

            <h3>What I Learned</h3>
            <ul className="learned-group">
              <li>
                Understanding the need for reusable code and developing it
              </li>
              <li>Fetching, manipulating and displaying data from an API</li>
              <li>Understanding more about styling elements using flexbox</li>
            </ul>

            <ul className="links-group">
              <h5 className="links-heading">Links:</h5>
              <li>
                <a
                  href={movieProjectSiteLink}
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Live Site
                </a>
              </li>
              <li>
                <a
                  href={movieProjectGithubLink}
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
            </ul>

            <p>Play the video below to see the app in action</p>

            <div className="project-video-container">
              <video className="project-video" controls loop>
                <source src={movieVideo} />
              </video>
            </div>
          </div>
        </motion.div>
      ) : (
        ""
      )}
    </>
  );
};

export default ProjectDetails;
