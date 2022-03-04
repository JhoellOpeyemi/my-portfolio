import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Loader from "./components/Loader";
import ProjectDetails from "./components/ProjectDetails";

// import project images
import covidProjectImage from "./assets/covid-tracker.PNG";
import weatherProjectImage from "./assets/weather-app.PNG";
import moviesProjectImage from "./assets/movies-app.jpg";

import { motion } from "framer-motion";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4400);
  }, []);

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        type: "tween",
      },
    },
  };

  const covidProjectObject = {
    title: "Covid-19 Tracker",
    desc: "A web app for tracking the statistics of the coronavirus. Search different countries to view stats and also read coronavirus related news.",
    stack: ["React", "React-Router", "Chart.js", "CSS"],
    image: covidProjectImage,
    githubLink: "https://github.com/JhoellOpeyemi/covid-tracker-app",
    siteLink: "https://jhoell-track-covid.netlify.app/",
    urlTitle: function () {
      return this.title.split(" ").join("-").toLowerCase();
    },
  };

  const weatherProjectObject = {
    title: "Weather App",
    desc: "A web app for viewing weather details like humidity, minimum and maximum temperature and more based on location. Users can also search for other cities.",
    stack: ["React", "CSS", "WeatherBit API"],
    image: weatherProjectImage,
    githubLink: "https://github.com/JhoellOpeyemi/weather-app",
    siteLink: "https://jhoell-weather-app.netlify.app/",
    urlTitle: function () {
      return this.title.split(" ").join("-").toLowerCase();
    },
  };

  const movieProjectObject = {
    title: "Movies Information App",
    desc: "A website for getting movies recommendations, overview along with realtime ratings. Search feature also available.",
    stack: ["React", "TMDB API", "CSS"],
    image: moviesProjectImage,
    githubLink: "https://github.com/JhoellOpeyemi/movies-app",
    siteLink: "https://connectmovies.netlify.app/",
    urlTitle: function () {
      return this.title.split(" ").join("-").toLowerCase();
    },
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <motion.div
                  className="container"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Header />
                  <Hero />
                  <About />
                  <Projects
                    covidProject={covidProjectObject}
                    weatherProject={weatherProjectObject}
                    movieProject={movieProjectObject}
                  />
                  <Contact />
                </motion.div>
              }
            />{" "}
            <Route
              path="/:project"
              element={
                <ProjectDetails
                  covidProject={covidProjectObject}
                  weatherProject={weatherProjectObject}
                  movieProject={movieProjectObject}
                />
              }
            />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
