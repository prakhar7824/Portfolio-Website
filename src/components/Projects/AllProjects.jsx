import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import "./AllProjects.css";

const projectData = [
  {
    id: 1,
    title: "Connect and Meet",
    description: "A real-time chat app with video conferencing and messaging features. Users can collaborate efficiently with minimal latency and high security.",
    tags: ["fullstack"],
    snapshot: "/websites/portfolio-website.png",
    github: "https://github.com/username/connect-meet",
    hosted: "https://connect-meet.vercel.app",
  },
  {
    id: 2,
    title: "Kilogram Chat App",
    description: "A modern clone of Instagram chat, built with React and Firebase, supporting live messaging and image sharing with a sleek UI.",
    tags: ["frontend", "fullstack"],
    snapshot: "/websites/portfolio-website.png",
    github: "https://github.com/username/kilogram-chat",
    hosted: "Yet not hosted",
  },
  {
    id: 3,
    title: "Bloggers App",
    description: "A blogging platform enabling users to create, edit, and publish articles. Integrated with Markdown support and a powerful editor.",
    tags: ["backend"],
    snapshot: "/websites/portfolio-website.png",
    github: "https://github.com/username/bloggers-app",
    hosted: "https://bloggers-app.netlify.app",
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
