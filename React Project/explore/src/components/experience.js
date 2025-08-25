import React, { useEffect, useRef } from "react";
import "./experience.css";
import UIDesign from "../images/pnnl.png";
import WebDesign from "../images/siemens healthineers.jpg";
import AppDesign from "../images/ncsu_research.png";
import CycLogo from "../images/cyc_logo.png";
import CiscoLogo from "../images/cisco_logo.png";

const Experience = () => {
  const experienceRef = useRef(null);

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

    const bars = experienceRef.current.querySelectorAll(".experienceBar");
    bars.forEach((bar) => observer.observe(bar));

    return () => {
      bars.forEach((bar) => observer.unobserve(bar));
    };
  }, []);

  return (
    <section id="experience" ref={experienceRef}>
      <span className="experienceTitle"> My Internship Experience</span>
      <div className="experienceBars">
        <div className="experienceBar">
          <img src={CiscoLogo} alt="" className="CiscoImg"></img>
          <div className="experienceBarText">
            <h2>Cisco Systems</h2>
            <p className="experienceRole">Software Engineer Intern</p>
            <p className="experienceDescription">
            Developed a REST API visualization for testing internal employee API keys and built a metrics dashboard to evaluate usage of Cisco’s Sales AI Assistant.
            </p>
            
          </div>
        </div>
        <div className="experienceBar">
          <img src={UIDesign} alt="" className="experienceBarImg"></img>
          <div className="experienceBarText">
            <h2>Pacific Northwest National Laboratory</h2>
            <p className="experienceRole">AI Software Engineer Intern</p>
            <p className="experienceDescription">
            Enhanced a RAG-based system by designing one-to-one mappings between MITRE's CVE, CWE, CAPEC, and ATT&CK frameworks with LlamaIndex.
            </p>
            <p className="abstractInfo">
              Check out the abstract for the project I worked on!
            </p>
            <div className="abstractLink">
              <button onClick={() => window.open('https://www.pnnl.gov/publications/retrieval-augmented-generation-robust-cyber-defense', '_blank')} classname="abstractLink">
                View Publication
              </button>
            </div>
          </div>
        </div>
        <div className="experienceBar">
          <img src={WebDesign} alt="" className="experienceBarImg"></img>
          <div className="experienceBarText">
            <h2>Siemens Healthineers</h2>
            <p className="experienceRole">Data Science Intern</p>
            <p className="experienceDescription">
            Applied process intelligence insights with Celonis and created detailed dashboards in PowerBI to improve resolution speeds for over 90,000 medical instrument issues.
            </p>
          </div>
        </div>
        <div className="experienceBar">
          <img src={AppDesign} alt="" className="experienceBarImg"></img>
          <div className="experienceBarText">
            <h2>NCSU AI Assisted Learning Lab</h2>
            <p className="experienceRole">Machine Learning Researcher</p>
            <p className="experienceDescription">
            Evaluate a Subtree-based Attention Neural Network (SANN) for debugging student code in Java and C by
            identifying patterns in abstract syntax trees (ASTs).
            </p>
            <div className="abstractLink">
              <button onClick={() => window.open('https://research.csc.ncsu.edu/aial/home/', '_blank')}>
                View Lab Website
              </button>
            </div>
          </div>
        </div>
        <div className="experienceBar">
          <img src={CycLogo} alt="" className="experienceBarImg"></img>
          <div className="experienceBarText">
            <h2>Consult Your Community</h2>
            <p className="experienceRole">Lead Business Analyst</p>
            <p className="experienceDescription">
            Deliver actionable growth strategies and customized technology solutions for minority-owned small businesses in Raleigh to expand their market reach.
            </p>
            <div className="abstractLink">
              <button onClick={() => window.open('https://www.cycncstate.org/', '_blank')}>
                View Website
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
