import React from "react";
import "./BottomNavbar.css";
import { FaHome, FaUserAlt, FaFolderOpen, FaStar, FaEnvelope } from "react-icons/fa";

const BottomNavbar = () => {
  return (
    <div className="bottom-navbar">
      {/* Home Button */}
      <a href="#home" className="nav-item" title="Home">
        <FaHome />
      </a>

      {/* About Me Button */}
      <a href="#about-me" className="nav-item" title="About Me">
        <FaUserAlt />
      </a>

      {/* Projects Button */}
      <a href="#projects" className="nav-item" title="Projects">
        <FaFolderOpen />
      </a>

      {/* Skills Button */}
      <a href="#skills" className="nav-item" title="Skills">
        <FaStar />
      </a>

      {/* Contact Button */}
      <a href="#contact" className="nav-item" title="Contact">
        <FaEnvelope />
      </a>
    </div>
  );
};

export default BottomNavbar;
