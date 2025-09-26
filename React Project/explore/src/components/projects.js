import React, { useEffect, useRef } from "react";
import "./projects.css";
import StudyAId from "../images/studyaid.png";
import Insight from "../images/insight_projects.png"
import ChipsChallenge from "../images/chips_challenge.png";
import Snapbot from "../images/snap_chatbot_interface.png"

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
          <img src={Insight} alt="" className="ProjectsBarImg"></img>
          <div className="ProjectsBarText">
            <h2>Insight Lab</h2>
            <p className="ProjectsDescription">
            • The Insight Lab is part of UC San Diego’s Swartz Center for Computational Neuroscience, focusing on how everyday stressors can affect neurocognitive engagement. <br />
            • I analyze stress responses and cognitive disruptions in VR gameplay with EEG data to better understand human–AI teamwork dynamics. <br />
            </p>
            <div className="abstractLink">
              <button onClick={() => window.open('https://insight.ucsd.edu/', '_blank')}>
                View Lab Website
              </button>
            </div>
          </div>
        </div>
        <div className="ProjectsBar">
          <img src={StudyAId} alt="" className="ProjectsBarImg"></img>
          <div className="ProjectsBarText">
            <h2>StudyAId</h2>
            <p className="ProjectsDescription">
            • Led a team of four to build an AI tool that processes PDFs and verbally responds to user queries at HackNC23 <br />
• Designed an intuitive interface with Python and Streamlit for a smooth user experience. <br />
• Integrated LangChain for smart text interpretation and HuggingFace to host the NLP model. <br />

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
            • Developed autonomous functionality for a game called Chips Challenge using AI-based shortest path algorithms. <br/> 
            • The goal of Chips challenge is to collect keys across the map to unlock doors to the final destination.
            </p>
          </div>
        </div>
        <div className="ProjectsBar">
          <img src={Snapbot} alt="" className="ProjectsBarImg"></img>
          <div className="ProjectsBarText">
            <h2>Snapbot</h2>
            <p className="ProjectsDescription">
            • Created an LLM chatbot with a team of four engineers to aid K-12 students with block-based programming in Snap! <br/> 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
