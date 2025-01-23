import React from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";

const ProjectItems = ({ item }) => {
  return (
    <div className="project__card">
      <div className="project__card-header">
        <img className="project__logo" src={item.image} alt={item.title} />
      </div>
      <div className="project__card-body">
        <h3 className="project__title">{item.title}</h3>
        <p className="project__description">{item.description}</p>
        <div className="project__tags">
          {item.technologies.map((tech, index) => (
            <span key={index} className="project__tag">
              {tech}
            </span>
          ))}
        </div>
        <div className="project__links">
          <a
            href={item.github}
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <i className="fa-github fab"></i> GitHub
          </a>
          <a
            href={item.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="live-demo-link"
          >
            <HiOutlineArrowSmRight /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItems;
