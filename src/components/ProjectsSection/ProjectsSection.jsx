// ///portfolio-website.png

// import React, { useState } from "react";
// import "./ProjectsSection.css";

// // Project data with multi-flags
// const projectsData = [
//   {
//     id: 1,
//     title: "Bard AI: The Ultimate AI Bot",
//     description: "Bard is a powerful and versatile bot that can make your life easier.",
//     image: "/portfolio-website.png",
//     techStack: ["React", "Node.js", "AI"],
//     types: ["Full Stack", "Frontend"],
//   },
//   {
//     id: 2,
//     title: "API Platform - Real-Time AI Web Search",
//     description: "A real-time search platform leveraging AI for quick data fetching.",
//     image: "/portfolio-website.png",
//     techStack: ["Node.js", "Express", "MongoDB", "AI"],
//     types: ["Backend"],
//   },
//   {
//     id: 3,
//     title: "Frontend Portfolio",
//     description: "A beautiful portfolio showcasing web design and frontend skills.",
//     image: "/portfolio-website.png",
//     techStack: ["React", "CSS", "HTML"],
//     types: ["Frontend"],
//   },
//   {
//     id: 4,
//     title: "E-commerce Backend API",
//     description: "Robust backend APIs for a scalable e-commerce platform.",
//     image: "/portfolio-website.png",
//     techStack: ["Node.js", "Express", "MongoDB", "JWT"],
//     types: ["Backend", "Full Stack"],
//   },
//   {
//     id: 5,
//     title: "Real-time Chat Application",
//     description: "A real-time chat app using Socket.io and React.",
//     image: "/portfolio-website.png",
//     techStack: ["React", "Socket.io", "Node.js"],
//     types: ["Full Stack", "Frontend"],
//   },
//   {
//     id: 6,
//     title: "Landing Page Website",
//     description: "A responsive landing page for a startup.",
//     image: "/portfolio-website.png",
//     techStack: ["HTML", "CSS", "JavaScript"],
//     types: ["Frontend"],
//   },
// ];

// const ProjectsSection = () => {
//   const [selectedTypes, setSelectedTypes] = useState(["Full Stack", "Frontend", "Backend"]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [hoveredProject, setHoveredProject] = useState(null);

//   const handleTypeToggle = (type) => {
//     if (selectedTypes.includes(type)) {
//       setSelectedTypes(selectedTypes.filter((t) => t !== type));
//     } else {
//       setSelectedTypes([...selectedTypes, type]);
//     }
//   };

//   const filteredProjects = projectsData.filter((project) => {
//     const matchesType = selectedTypes.some((type) => project.types.includes(type));
//     const matchesSearch = project.techStack.join(" ").toLowerCase().includes(searchTerm.toLowerCase());
//     return matchesType && matchesSearch;
//   });

//   return (
//     <section className="projects-section">
//       <h2 className="projects-heading">
//         Turning <span className="highlight">ideas</span> into Applications
//       </h2>

//       {/* FILTER & SEARCH */}
//       <div className="projects-controls">
//         <div className="filter-buttons">
//           {["Full Stack", "Frontend", "Backend"].map((type) => (
//             <button
//               key={type}
//               className={`filter-button ${selectedTypes.includes(type) ? "active" : ""}`}
//               onClick={() => handleTypeToggle(type)}
//             >
//               {type}
//             </button>
//           ))}
//         </div>

//         <input
//           type="text"
//           className="search-input"
//           placeholder="Search by technology..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       {/* PROJECT CARDS */}
//       <div className="projects-grid">
//         {filteredProjects.length > 0 ? (
//           filteredProjects.map((project) => (
//             <div
//               key={project.id}
//               className={`project-card ${
//                 hoveredProject === project.id ? "active" : hoveredProject !== null ? "blurred" : ""
//               }`}
//               onMouseEnter={() => setHoveredProject(project.id)}
//               onMouseLeave={() => setHoveredProject(null)}
//             >
//               <img src={project.image} alt={project.title} className="project-image" />
//               <div className="project-info">
//                 <h3>{project.title}</h3>
//                 <p>{project.description}</p>

//                 <div className="tech-tags">
//                   {project.techStack.map((tech, idx) => (
//                     <span key={idx} className="tech-tag">
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="project-flags">
//                   {project.types.map((type, idx) => (
//                     <span key={idx} className={`flag ${type.toLowerCase().replace(/\s+/g, '-')}`}>
//                       {type}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="no-projects">No projects found matching your search!</p>
//         )}
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;


import React, { useState } from "react";
import "./ProjectsSection.css";
import ProjectCard from "./ProjectCard";

// Project data with multi-flags
const projectsData = [
  {
    id: 1,
    title: "Bard AI: The Ultimate AI Bot",
    description: "Bard is a powerful and versatile bot that can make your life easier.",
    image: "/portfolio-website.png",
    techStack: ["React", "Node.js", "AI"],
    types: ["Full Stack", "Frontend"],
  },
  {
    id: 2,
    title: "API Platform - Real-Time AI Web Search",
    description: "A real-time search platform leveraging AI for quick data fetching.",
    image: "/portfolio-website.png",
    techStack: ["Node.js", "Express", "MongoDB", "AI"],
    types: ["Backend"],
  },
  {
    id: 3,
    title: "Frontend Portfolio",
    description: "A beautiful portfolio showcasing web design and frontend skills.",
    image: "/portfolio-website.png",
    techStack: ["React", "CSS", "HTML"],
    types: ["Frontend"],
  },
  {
    id: 4,
    title: "E-commerce Backend API",
    description: "Robust backend APIs for a scalable e-commerce platform.",
    image: "/portfolio-website.png",
    techStack: ["Node.js", "Express", "MongoDB", "JWT"],
    types: ["Backend", "Full Stack"],
  },
  {
    id: 5,
    title: "Real-time Chat Application",
    description: "A real-time chat app using Socket.io and React.",
    image: "/portfolio-website.png",
    techStack: ["React", "Socket.io", "Node.js"],
    types: ["Full Stack", "Frontend"],
  },
  {
    id: 6,
    title: "Landing Page Website",
    description: "A responsive landing page for a startup.",
    image: "/portfolio-website.png",
    techStack: ["HTML", "CSS", "JavaScript"],
    types: ["Frontend"],
  },
];

const ProjectsSection = () => {
  const [selectedTypes, setSelectedTypes] = useState(["Full Stack", "Frontend", "Backend"]);
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleTypeToggle = (type) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((t) => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const filteredProjects = projectsData.filter((project) => {
    const matchesType = selectedTypes.some((type) => project.types.includes(type));
    const matchesSearch = project.techStack.join(" ").toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <section className="projects-section">
      <h2 className="projects-heading">
        MY  <span className="highlight">PROJECT </span> WORKS
      </h2>

      <div className="projects-controls">
        <div className="filter-buttons">
          {["Full Stack", "Frontend", "Backend"].map((type) => (
            <button
              key={type}
              className={`filter-button ${selectedTypes.includes(type) ? "active" : ""}`}
              onClick={() => handleTypeToggle(type)}
            >
              {type}
            </button>
          ))}
        </div>

        <input
          type="text"
          className="search-input"
          placeholder="Search by technology..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="projects-grid">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              hoveredProject={hoveredProject}
              setHoveredProject={setHoveredProject}
            />
          ))
        ) : (
          <p className="no-projects">No projects found matching your search!</p>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;

