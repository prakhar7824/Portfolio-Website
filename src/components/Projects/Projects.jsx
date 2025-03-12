import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Projects.css";

const projectsData = [
  {
    title: "Connect and Meet",
    type: "Personal Project",
    description:
      "A social platform that connects people through video calls and chats. Built using Next.js and MongoDB for seamless real-time communication.",
    image: "/websites/portfolio-website.png",
    githubLink: "https://github.com/PrakharPandey1506/connect-and-meet",
    liveLink: "",
  },
  {
    title: "Kilogram Chat App",
    type: "Personal Project",
    description:
      "A modern chat app with real-time messaging, media sharing, and user authentication. Developed using React and Firebase.",
    image: "/websites/portfolio-website.png",
    githubLink: "https://github.com/PrakharPandey1506/kilogram-chat-app",
    liveLink: "", // Not hosted yet
  },
  {
    title: "Bloggers App",
    type: "Personal Project",
    description:
      "A blogging platform where users can create, edit, and publish blogs. Includes a rich text editor and SEO features.",
    image: "/websites/portfolio-website.png",
    githubLink: "https://github.com/PrakharPandey1506/bloggers-app",
    liveLink: "",
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
