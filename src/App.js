import React from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";

// import media queries
import "./styles/media.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <About />
      <Projects />
    </div>
  );
}

export default App;
