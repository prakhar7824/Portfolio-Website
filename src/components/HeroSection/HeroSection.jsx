import React, { useEffect, useRef, useState } from "react";
import "./HeroSection.css";

const HeroSection = () => {
  const heroRef = useRef(null);
  const roles = ["FULL STACK", "FRONTEND", "BACKEND"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const currentRole = roles[currentRoleIndex];

  return (
    <section ref={heroRef} className="hero-section">
      <h1 className="title">WELCOME !</h1>
      <h3>TO MY PORTFOLIO</h3>

      <div className="background-text">
        <br />
        <h1>PRAKHAR</h1>
        <br />
        <h1>PANDEY</h1>
        <br />
      </div>

      <div className="profile-container">
        <img src="/personal/profile1.png" alt="Profile" className="profile-pic" />
      </div>

      <p className="description">
        I'M PRAKHAR PANDEY A{" "}
        <span className="role">{currentRole}</span> DEVELOPER
      </p>
    </section>
  );
};

export default HeroSection;
