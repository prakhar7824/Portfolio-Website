import React from "react";
import "./TopNavbar.css";

const TopNavbar = () => {
  return (
    <nav className="top-navbar">
      <div className="logo">Prakhar Pandey</div>
      
      <div className="nav-links">
        <a 
          href="/Prakhar_Pandey_CV.pdf" // <-- Add your file name here
          download 
          className="download-cv-btn"
        >
          Download CV
        </a>
      </div>
    </nav>
  );
};

export default TopNavbar;
