import React from "react";
import "./SkillsSection.css"; // This CSS file will handle the styling and animation.

const skills = [
  { name: "HTML", src: "/icons/html-icon.png" },
  { name: "CSS", src: "/icons/css-icon.png" },
  { name: "JavaScript", src: "/icons/javascript-icon.png" },
  { name: "C++", src: "/icons/cpp-icon.png" },
  { name: "MongoDB", src: "/icons/mongodb-icon.png" },
  { name: "SQL", src: "/icons/sql-icon.png" },
  { name: "C", src: "/icons/c-icon.png" },
  { name: "Git/Github", src: "/icons/git-icon.png" },
  { name: "Node.js", src: "/icons/nodejs-icon.png" },
  { name: "C#", src: "/icons/csharp-icon.png" },
  { name: "Next.js", src: "/icons/nextjs-icon.png" },
  { name: "React.js", src: "/icons/reactjs-icon.webp" },
  { name: "ASP.NET", src: "/icons/aspnet-icon.png" },
  { name: "TypeScript", src: "/icons/typescript-icon.png" },
];

const SkillsSection = () => {
    return (
      <section className="skills-section">
        <h2 className="skills-heading">SKILLS</h2>
        <div className="skills-slider">
          <div className="skills-track">
            {skills.concat(skills).map((skill, index) => (
              <div key={index} className="skill-item">
                <img src={skill.src} alt={skill.name} title={skill.name} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default SkillsSection;
