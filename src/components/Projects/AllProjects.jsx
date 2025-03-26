import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import "./AllProjects.css";

const projectData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects, skills, and experience with a modern, responsive UI. Built with React.js, Tailwind CSS, and Framer Motion for smooth animations.",
    tags: ["frontend"],
    snapshot: "/websites/website1.png",
    github: "https://github.com/PrakharPandey1506/portfolio-website",
    hosted: "https://portfolio-six-gules-30.vercel.app/",
  },
  {
    id: 2,
    title: "VerdictIQ - AI-Powered Legal Assistance",
    description: "An AI-driven legal analytics platform to predict case outcomes and analyze legal documents using ML and NLP. Developed with the MERN stack and Explainable AI for transparency.",
    tags: ["fullstack"],
    snapshot: "/websites/website2.png",
    github: "https://github.com/PrakharPandey1506/verdictiq",
    hosted: "https://verdict-iq.vercel.app/",
  },
  {
    id: 3,
    title: "Plus9OneTours",
    description: "A travel website to explore destinations in India and beyond with a scenic design and engaging animations. Built with the MERN stack and Tailwind CSS.",
    tags: ["fullstack"],
    snapshot: "/websites/website3.png",
    github: "https://github.com/PrakharPandey1506/plus9onetours",
    hosted: "https://plus9onetours.vercel.app/",
  },
  {
    id: 4,
    title: "Hangout",
    description: "A real-time chat application with user registration, voice, and video calling features. Built with Next.js, Socket.io, and MongoDB for seamless communication.",
    tags: ["fullstack"],
    snapshot: "/websites/website4.png",
    github: "https://github.com/PrakharPandey1506/hangout",
    hosted: "Yet not hosted",
  },
  {
    id: 5,
    title: "user-auth-backend",
    description: "A secure authentication system implementing password hashing and JWT for user management. Developed with Node.js, Express, and MongoDB.",
    tags: ["backend"],
    snapshot: "/websites/website5.png",
    github: "https://github.com/PrakharPandey1506/user-auth-backend",
    hosted: "Yet not hosted",
  },
  {
    id: 6,
    title: "Roomify",
    description: "A frontend-only app for creating virtual rooms and scheduling online meetings with a responsive design. Built with React.js, Next.js, and Tailwind CSS.",
    tags: ["frontend"],
    snapshot: "/websites/website6.png",
    github: "https://github.com/PrakharPandey1506/roomify",
    hosted: "Yet not hosted",
  },
];

const AllProjects = () => {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState("All");

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const handleFilter = (tag) => {
    setActiveTag(tag);
  };

  const filteredProjects = projectData.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(search);
    const matchesTag =
      activeTag === "All" ||
      project.tags.includes(activeTag.toLowerCase()) ||
      (activeTag === "Frontend" && project.tags.includes("fullstack")) ||
      (activeTag === "Backend" && project.tags.includes("fullstack"));
    return matchesSearch && matchesTag;
  });

  return (
    <motion.div
      className="all-projects-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        All Projects
      </motion.h2>

      <motion.div
        className="controls"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <input
          type="text"
          placeholder="Search Projects..."
          value={search}
          onChange={handleSearch}
        />
        <div className="flags">
          {["All", "Full Stack", "Frontend", "Backend"].map((tag, index) => (
            <motion.button
              key={tag}
              className={`flag-button ${activeTag === tag ? "active" : ""}`}
              onClick={() => handleFilter(tag)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {tag}
            </motion.button>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="projects-grid"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {filteredProjects.map((project) => (
          <motion.div
            className="project-card-wrapper"
            key={project.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02}>
              <motion.div
                className="project-card"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={project.snapshot}
                  alt={`${project.title} Snapshot`}
                  className="project-snapshot"
                />
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub Repo
                    </a>
                    {project.hosted.startsWith("http") ? (
                      <a
                        href={project.hosted}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Site
                      </a>
                    ) : (
                      <div className="not-hosted">Yet not hosted</div>
                    )}
                  </div>
                </div>
              </motion.div>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default AllProjects;