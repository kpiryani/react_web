import React from "react";
import "./skills.css";
import UIDesign from "../images/pnnl.png";
import WebDesign from "../images/siemens healthineers.jpg";
import AppDesign from "../images/ncsu_research.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle"> My Internship Experience</span>
      <span className="skillDescription">
        {" "}
        I am a skilled and passionate student with experience in internships and
        advanced coursework.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="" className="skillBarImg"></img>
          <div className="skillBarText">
            <h2>Pacific Northwest National Laboratory</h2>
            <p>AI Research Intern</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="" className="skillBarImg"></img>
          <div className="skillBarText">
            <h2>Siemens Healthineers</h2>
            <p>Data Analytics Intern</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="" className="skillBarImg"></img>
          <div className="skillBarText">
            <h2>North Carolina State University Undergraduate Research</h2>
            <p>Research Assistant at AI Assisted Learning Lab</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
