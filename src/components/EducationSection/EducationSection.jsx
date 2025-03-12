import React from "react";
import "./EducationSection.css";

const EducationSection = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science & Engineering (Data Science)",
      institution: "Ajay Kumar Garg Engineering College, Ghaziabad",
      duration: "2021 - 2025",
      score: "Current CGPA: 7.06/10",
    },
    {
      degree: "Higher Secondary (Class XII)",
      institution: "UP Kirana Seva Samiti Vidyalaya, Kanpur",
      duration: "2019 - 2020",
      score: "Percentage: 90%",
    },
    {
      degree: "Secondary (Class X)",
      institution: "UP Kirana Seva Samiti Vidyalaya, Kanpur",
      duration: "2017 - 2018",
      score: "Percentage: 93%",
    },
  ];

  return (
    <div className="education-section">
      <h2 className="section-title">Education</h2>

      <div className="education-container">
        {educationData.map((edu, index) => (
          <div className="education-card" key={index}>
            <h3 className="degree">{edu.degree}</h3>
            <p className="institution">{edu.institution}</p>
            <p className="duration">{edu.duration}</p>
            <p className="score">{edu.score}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
