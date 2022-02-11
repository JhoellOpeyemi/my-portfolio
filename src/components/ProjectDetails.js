import React from "react";

import { useParams } from "react-router-dom";

import covidImage1 from "../assets/covid1.png";
import covidImage2 from "../assets/covid2.png";
import covidImage22 from "../assets/covid2-2.png";
import covidImage3 from "../assets/covid3.jpg";

import weatherImage1 from "../assets/weather1.PNG";
import weatherImage2 from "../assets/weather2.PNG";

const ProjectDetails = ({ covidProject, weatherProject }) => {
  const params = useParams();

  const {
    title: covidProjectTitle,
    desc: covidProjectDesc,
    stack: covidProjectStack,
    githubLink: covidProjectGithubLink,
    siteLink: covidProjectSiteLink,
  } = covidProject;

  const {
    title: weatherProjectTitle,
    desc: weatherProjectDesc,
    stack: weatherProjectStack,
    githubLink: weatherProjectGithubLink,
    siteLink: weatherProjectSiteLink,
  } = weatherProject;

  const goBack = () => {
    window.history.back();
  };
  return (
    <>
      <button className="go-back-btn" onClick={goBack}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z" />
        </svg>
      </button>

      {params.project === covidProject.urlTitle() ? (
        <div className="project-detail-section">
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
                  href={covidProject.siteLink}
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Live Site
                </a>
              </li>
              <li>
                <a
                  href={covidProject.githubLink}
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
            </ul>
            <p>Below are screenshots from the app.</p>

            <div className="project-detail-image-group">
              <img src={covidImage1} alt="" className="project-detail-image" />
              <img src={covidImage2} alt="" className="project-detail-image" />
              <img src={covidImage22} alt="" className="project-detail-image" />
              <img src={covidImage3} alt="" className="project-detail-image" />
            </div>

            <p>
              Please follow the coronavirus safety measures in your area, stay
              safe.
            </p>
          </div>
        </div>
      ) : params.project === weatherProject.urlTitle() ? (
        <div className="project-detail-section">
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
                  href={weatherProject.siteLink}
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Live Site
                </a>
              </li>
              <li>
                <a
                  href={weatherProject.githubLink}
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
            </ul>

            <p>Below are screenshots from the app.</p>

            <div className="project-detail-image-group">
              <img
                src={weatherImage1}
                alt=""
                className="project-detail-image"
              />
              <img
                src={weatherImage2}
                alt=""
                className="project-detail-image"
              />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ProjectDetails;
