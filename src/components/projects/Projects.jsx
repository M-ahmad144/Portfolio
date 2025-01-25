import React, { useState, useEffect } from "react";
import { projectsData } from "./Data";
import { projectsNav } from "./Data";
import ProjectItems from "./ProjectItems";

const Projects = () => {
  const [category, setCategory] = useState("All"); // Change to just store category name
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    // Filter projects whenever the category is changed
    if (category === "All") {
      setFiltered(projectsData);
    } else {
      const newProjects = projectsData.filter(
        (project) => project.category === category
      );
      setFiltered(newProjects);
    }
  }, [category]);

  const handleCategoryChange = (categoryName) => {
    setCategory(categoryName);
  };

  return (
    <div className="">
      {/* Filters */}
      <div className="project-filters">
        {projectsNav.map((navItem, index) => (
          <button
            key={index}
            onClick={() => handleCategoryChange(navItem.name)}
            className={`project-filter-item ${
              category === navItem.name ? "active" : ""
            }`}
          >
            {navItem.name}
          </button>
        ))}
      </div>

      {/* Projects container */}
      <div className="project-container">
        {filtered.map((item) => (
          <div key={item.id} className="project-item">
            <ProjectItems item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
