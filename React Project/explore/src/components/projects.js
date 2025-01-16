import React, { useEffect, useRef } from "react";
import "./projects.css";
import StudyAId from "../images/studyaid.png";
import ChipsChallenge from "../images/chips_challenge.png";

const Projects = () => {
  const ProjectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    const bars = ProjectsRef.current.querySelectorAll(".ProjectsBar");
    bars.forEach((bar) => observer.observe(bar));

    return () => {
      bars.forEach((bar) => observer.unobserve(bar));
    };
  }, []);

  return (
    <section id="Projects" ref={ProjectsRef}>
      <span className="ProjectsTitle"> Personal Projects</span>
      <div className="ProjectsBars">
        {/* Modified PNNL Projects to match other Projectss */}
        <div className="ProjectsBar">
          <img src={StudyAId} alt="" className="ProjectsBarImg"></img>
          <div className="ProjectsBarText">
            <h2>StudyAId</h2>
            <p className="ProjectsDescription">
            • Pioneered a team of 4 to build an AI tool that processes PDFs and verbally responds to user queries at HackNC23 <br />
• Designed the UX/UI using Python and Streamlit to provide seamless user interaction <br />
• Integrated Langchain for advanced sequential text interpretation and HuggingFace to host the NLP model <br />

            </p>
            <div className="abstractLink">
              <button onClick={() => window.open('https://huggingface.co/spaces/hacknc23/hacknc23', '_blank')}>
                View Demo
              </button>
            </div>
          </div>
        </div>
        <div className="ProjectsBar">
          <img src={ChipsChallenge} alt="" className="ProjectsBarImg"></img>
          <div className="ProjectsBarText">
            <h2>Chips Challenge</h2>
            <p className="ProjectsDescription">
            • Developed autonomous functionality for a game called Chips Challenge using AI-based shortest path algorithms. • The goal of Chips challenge is to collect keys across the map to unlock doors to the final destination.
            </p>
            <p className="abstractInfo">
              Please feel free to reach out if you would like to view my codebase.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
