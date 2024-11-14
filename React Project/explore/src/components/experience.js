import React from "react";
import "./experience.css";
import UIDesign from "../images/pnnl.png";
import WebDesign from "../images/siemens healthineers.jpg";
import AppDesign from "../images/ncsu_research.png";
import CycLogo from "../images/cyc_logo.png";

const Experience = () => {
  return (
    <section id="experience">
      <span className="experienceTitle"> My Internship Experience</span>
      <span className="experienceDesc">
        {" "}
        I am a skilled and passionate student with experience in internships and
        advanced coursework.
      </span>
      <div className="experienceBars">
        <div className="experienceBar">
          <img src={UIDesign} alt="" className="experienceBarImg"></img>
          <div className="experienceBarText">
            <h2>Pacific Northwest National Laboratory</h2>
            <p>AI Research Intern</p>
          </div>
        </div>
        <div className="experienceBar">
          <img src={WebDesign} alt="" className="experienceBarImg"></img>
          <div className="experienceBarText">
            <h2>Siemens Healthineers</h2>
            <p>Data Analytics Intern</p>
          </div>
        </div>
        <div className="experienceBar">
          <img src={AppDesign} alt="" className="experienceBarImg"></img>
          <div className="experienceBarText">
            <h2>North Carolina State University Undergraduate Research</h2>
            <p>Research Assistant at AI Assisted Learning Lab</p>
          </div>
        </div>
        <div className="experienceBar">
          <img src={CycLogo} alt="" className="experienceBarImg"></img>
          <div className="experienceBarText">
            <h2>Consult Your Community</h2>
            <p>Business Analyst</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
