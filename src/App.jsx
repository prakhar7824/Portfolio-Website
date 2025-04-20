import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";

// Components Imports
import TopNavbar from "./components/TopNavbar/TopNavbar";
import HeroSection from "./components/HeroSection/HeroSection";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import BottomNavbar from "./components/BottomNavbar/BottomNavbar";
import Projects from "./components/Projects/Projects";
import AllProjects from "./components/Projects/AllProjects";
import AboutMe from "./components/AboutMe/AboutMe";
import ContactMe from "./components/ContactMe/ContactMe";
import EducationSection from "./components/EducationSection/EducationSection"; // Importing the new component

export default function App() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <div className={`main-container ${isMounted ? "mounted" : ""}`}>
          {/* Top Navigation Bar */}
          <TopNavbar />
          <br />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  {/* Home Section */}
                  <section id="home">
                    <HeroSection />
                  </section>
                  <br /><br />

                  {/* Education Section */}
                  <section id="education">
                    <EducationSection />
                  </section>

                  {/* About Me Section */}
                  <section id="about-me">
                    <AboutMe />
                  </section>

                  {/* Skills Section */}
                  <section id="skills">
                    <SkillsSection />
                  </section>

                  {/* Projects Section */}
                  <section id="projects">
                    <Projects />
                  </section>

                  {/* Contact Section */}
                  <section id="contact">
                    <ContactMe />
                  </section>
                </>
              }
            />

            {/* All Projects Separate Page */}
            <Route path="/all-projects" element={<AllProjects />} />
          </Routes>

          {/* Bottom Navigation Bar */}
          <BottomNavbar />
        </div>
      </Router>
    </ThemeProvider>
  );
}
