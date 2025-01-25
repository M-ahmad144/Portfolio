import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectItems = ({ item }) => {
  if (!item) {
    console.error("ProjectItems: No item data provided");
    return null;
  }

  return (
    <div className="project-card">
      <div className="project-card-inner">
        {/* Front Side */}
        <div className="project-card-front">
          <div className="project-img-container">
            <div
              className="project-img"
              style={{
                backgroundImage: `url(${item.image || ""})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
          <div className="project-info">
            <h3 className="project-title">
              {item.title || "Untitled Project"}
            </h3>
            <div className="project-technologies">
              {item.technologies?.map((tech, index) => (
                <span key={index} className="project-tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Back Side (Links and Description) */}
        <div className="project-card-back">
          <p className="project-description">
            {item.description || "No description available"}
          </p>
          <div className="project-links">
            {item.demo && (
              <a
                href={item.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                aria-label="Live Demo"
              >
                <FaExternalLinkAlt className="project-icon" />
              </a>
            )}
            {item.github && (
              <a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                aria-label="GitHub Repository"
              >
                <FaGithub className="project-icon" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItems;
