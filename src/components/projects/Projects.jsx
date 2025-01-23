import React, { useEffect, useState } from "react";
import { projectsData } from "./Data";
import { projectsNav } from "./Data";
import ProjectItems from "./ProjectItems";

const Projects = () => {
  const [item, setItem] = useState({ name: "MERN" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "MERN") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter(
        (project) => project.category === item.name
      );
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };

  return (
    <div>
      <div className="project__filters">
        {projectsNav.map((item, index) => (
          <span
            onClick={(e) => handleClick(e, index)}
            className={`${
              active === index ? "active-project" : ""
            } project__item`}
            key={index}
          >
            {item.name}
          </span>
        ))}
      </div>
      <div className="grid container project__container">
        {projects.map((project) => (
          <ProjectItems key={project.id} item={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
