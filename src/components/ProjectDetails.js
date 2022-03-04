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
            <p>
              This project was inspired by the outbreak and spread of
              coronavirus in early 2020.
            </p>
            <p>
              The web app was built and developed with React - which is a
              javaScript library for building user interfaces, React Router - a
              standard library for routing in React, Chart.js - javaScript
              library for drawing charts, and CSS for styling.
            </p>

            <ul className="links-group">
              <h5 className="links-heading">Links:</h5>
              <li>
                <a
                  href={covidProjectSiteLink}
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Live Site
                </a>
              </li>
              <li>
                <a
                  href={covidProjectGithubLink}
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
            <p>
              This project works like any other weather app but it has
              additional features like location-based weather details,
              comprehensive list of weather details aside temperature, 7-day
              weather report and theme switch.
            </p>
            <p>
              The web app was built and developed with React - which is a
              javaScript library for building user interfaces, WeatherBit API -
              an application programming interface for getting weather details
              and CSS for styling.
            </p>

            <ul className="links-group">
              <h5 className="links-heading">Links:</h5>
              <li>
                <a
                  href={weatherProjectSiteLink}
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Live Site
                </a>
              </li>
              <li>
                <a
                  href={weatherProjectGithubLink}
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
            <p>
              This project was inspired by Netflix. Though it is not a movie
              streaming app but a web app that allow users to view trending
              movies, popular movies, top-rated movies along with realtime
              rating and a brief overview of each movie
            </p>
            <p>
              The web app was built and developed with React - which is a
              javaScript library for building user interfaces, TMDB API - an
              application programming interface for fetching details about
              movies and CSS for styling.
            </p>

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
