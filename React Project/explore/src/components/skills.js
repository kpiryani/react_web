import React from 'react';
import './skills.css';
import UIDesign from '../images/pnnl.png';
import WebDesign from '../images/siemens healthineers.jpg';
import AppDesign from '../images/ncsu_research.png';

const Skills = () => {
  return (
    <section id = 'skills'>
      <span class="skillTitle"> My Internship Experience</span>
      <div class="skillBars"> 
        <div class="skillBar">
          <img src={UIDesign} alt="" class="skillBarImg"></img>
          <div class="skillBarText">
            <h2>Pacific Northwest National Laboratory</h2>
            <p>AI Research Intern</p>
          </div>
        </div>
        <div class="skillBar">
          <img src={WebDesign} alt="" class="skillBarImg"></img>
          <div class="skillBarText">
            <h2>Siemens Healthineers</h2>
            <p>Data Analytics Intern</p>
          </div>
        </div>
        <div class="skillBar">
          <img src={AppDesign} alt="" class="skillBarImg"></img>
          <div class="skillBarText">
            <h2>North Carolina State University Undergraduate Research</h2>
            <p>Research Assistant at AI Assisted Learning Lab</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;