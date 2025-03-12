import React, { useState, useEffect } from 'react';
import './AboutMe.css';
import { FaGithub, FaLinkedin, FaInstagram, FaHome } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import PhotoCarousel from './PhotoCarousel';

const AboutMe = () => {
  const birthDate = new Date(2002, 7, 10); // August is month 7 (zero-indexed)

  const calculateAge = () => {
    const now = new Date();
    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    return { years, months, days };
  };

  const [age, setAge] = useState(calculateAge());

  useEffect(() => {
    const interval = setInterval(() => {
      setAge(calculateAge());
    }, 1000 * 60); // Update every minute (you can change to 1000 for every second)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-container">
      {/* Left side */}
      <div className="about-left">
        <h1>Hello, I’m <span>Prakhar Pandey</span></h1>

        

        <p className="about-description">
          A passionate, solution-driven software engineer who loves building elegant, user-friendly web applications. Skilled in full-stack development with React, Express.js, Node.js, and MongoDB. I enjoy transforming ideas into functional and beautiful digital products.
          <br /><br />
          I’m also a football enthusiast, chess lover, and an avid traveler. Always learning, always coding, and occasionally celebrating when things work on the first try!
        </p>

        {/* Live Age Counter
        <p className="age-counter">
          Currently I’m <strong>{age.years} years {age.months} months {age.days} days</strong> old
        </p> */}

        {/* Social Links with Icons */}
        <div className="social-icons">
          <a href="https://github.com/prakhar7824" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://leetcode.com/u/prakhar7824/" target="_blank" rel="noopener noreferrer"><SiLeetcode /></a>
          <a href="https://linkedin.com/in/prakhar-pandey-akg" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://www.instagram.com/prakhar_pan.dey?igsh=MTBvdDRwdTJ1b2h6cg==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="/" target="_blank" rel="noopener noreferrer"><FaHome /></a>
        </div>
      </div>

      {/* Right side carousel */}
      <div className="about-right">
        <PhotoCarousel />
      </div>
    </div>
  );
};

export default AboutMe;
