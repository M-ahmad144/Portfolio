import React from "react";
import Projects from "./Projects";
import "./projects.css";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <div className="portfolio-header">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Recent Projects</span>
      </div>
      <Projects />
    </section>
  );
};

export default Portfolio;
