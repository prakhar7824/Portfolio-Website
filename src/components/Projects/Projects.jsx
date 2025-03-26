import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Projects.css";

const projectsData = [
  {
    title: "Portfolio Website",
    type: "Personal Project",
    description:
      "A personal portfolio website showcasing projects, skills, and experience with a modern, responsive UI. Built with React.js, Tailwind CSS, and Framer Motion for smooth animations.",
    image: "/websites/website1.png",
    githubLink: "https://github.com/PrakharPandey1506/portfolio-website", // Assumed GitHub link based on your username
    liveLink: "https://portfolio-six-gules-30.vercel.app/", // Not hosted yet, as per your resume
  },
  {
    title: "VerdictIQ - AI-Powered Legal Assistance",
    type: "Personal Project",
    description:
      "An AI-driven legal analytics platform to predict case outcomes and analyze legal documents using ML and NLP. Developed with the MERN stack and Explainable AI for transparency.",
    image: "/websites/website2.png",
    githubLink: "https://github.com/PrakharPandey1506/verdictiq", // Assumed GitHub link based on your username
    liveLink: "https://portfolio-six-gules-30.vercel.app/", // Live link mentioned in resume but not provided, assuming not hosted yet
  },
  {
    title: "Plus9OneTours",
    type: "Personal Project",
    description:
      "A travel website to explore destinations in India and beyond with a scenic design and engaging animations. Built with the MERN stack and Tailwind CSS.",
    image: "/websites/website3.png",
    githubLink: "https://github.com/PrakharPandey1506/plus9onetours", // Assumed GitHub link based on your username
    liveLink: "https://plus9onetours.vercel.app/", // Not hosted yet
  },
];

const Projects = () => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleSeeAllProjects = () => {
    navigate("/all-projects");
  };

  return (
    <div className="projects-container">
      <h2 className="projects-title">PROJECTS</h2>

      <div className="projects-horizontal-scroll">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className={`project-card ${hoveredIndex === index ? "active" : ""}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <div className="project-info">
              <h3>{project.title}</h3>
              <p className="project-type">{project.type}</p>
              <p className="project-description">{project.description}</p>

              <div className="project-links">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-button github"
                >
                  GitHub
                </a>

                {project.liveLink ? (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button live"
                  >
                    View Live
                  </a>
                ) : (
                  <button className="project-button disabled" disabled>
                    Yet Not Hosted
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="see-all-btn" onClick={handleSeeAllProjects}>
        See All Projects
      </button>
    </div>
  );
};

export default Projects;