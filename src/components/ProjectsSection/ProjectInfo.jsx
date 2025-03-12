import React from "react";
import "./ProjectInfo.css";

const ProjectInfo = ({ project }) => {
  return (
    <div className="project-info">
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <div className="tech-tags">
        {project.techStack.map((tech, idx) => (
          <span key={idx} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>

      <div className="project-flags">
        {project.types.map((type, idx) => (
          <span key={idx} className={`flag ${type.toLowerCase().replace(/\s+/g, "-")}`}>
            {type}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectInfo;
