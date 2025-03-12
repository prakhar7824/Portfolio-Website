import React from "react";
import "./ProjectCard.css";
import ProjectInfo from "./ProjectInfo";

const ProjectCard = ({ project, hoveredProject, setHoveredProject }) => {
  const handleMouseEnter = () => setHoveredProject(project.id);
  const handleMouseLeave = () => setHoveredProject(null);

  const isActive = hoveredProject === project.id;
  const isBlurred = hoveredProject !== null && !isActive;

  return (
    <div
      className={`project-card ${isActive ? "active" : ""} ${isBlurred ? "blurred" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={project.image} alt={project.title} className="project-image" />
      <ProjectInfo project={project} />
    </div>
  );
};

export default ProjectCard;
