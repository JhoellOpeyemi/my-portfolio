import React from "react";

import Project from "./Project";
import "../styles/projects.css";

import covidProjectImage from "../assets/covid-tracker.PNG";
import weatherProjectImage from "../assets/weather-app.PNG";

const Projects = () => {
  // Tech stack for projects
  const covidProject = ["React", "React-Router", "Chart.js", "CSS"];
  const weatherProject = ["React", "CSS", "WeatherBit API"];

  return (
    <section id="projects">
      <div className="projects-heading-group">
        <h3 className="projects-section-heading">
          {" "}
          <span className="featured">Featured</span>{" "}
          <span className="projects">Projects</span>{" "}
        </h3>
        <div className="divider-line"></div>
      </div>

      <p className="projects-subtitle">Some things i've built</p>

      <Project
        title={"Covid-19 Tracker"}
        desc={
          "A web app for tracking the statistics of the coronavirus. Search different countries to view stats and also read coronavirus related news..."
        }
        techStack={covidProject}
        githubLink={"https://github.com/JhoellOpeyemi/covid-tracker-app"}
        siteLink={"https://jhoell-track-covid.netlify.app/"}
        projectImage={covidProjectImage}
      />

      <Project
        title={"Weather App"}
        desc={
          "A web app for viewing weather details like humidity, minimum and maximum temperature and more based on location. Users can also search for other cities..."
        }
        techStack={weatherProject}
        githubLink={"https://github.com/JhoellOpeyemi/weather-app"}
        siteLink={"https://jhoell-weather-app.netlify.app/"}
        projectImage={weatherProjectImage}
      />
    </section>
  );
};

export default Projects;
