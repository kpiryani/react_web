import React from 'react';
import './skills.css';
import UIDesign from '../images/llamaindex logo.jpeg';
import WebDesign from '../images/java logo.jpg';
import AppDesign from '../images/python logo.webp';

const Skills = () => {
  return (
    <section id = 'skills'>
      <span class="skillTitle"> What I Do</span>
      <span class="skillDescription"> I am a skilled and passionate student with experience in internships and advanced coursework.</span>
      <div class="skillBars"> 
        <div class="skillBar">
          <img src={UIDesign} alt="" class="skillBarImg"></img>
          <div class="skillBarText">
            <h2>LlamaIndex</h2>
            <p>An AI framework that can be used to connect large data sources to Large Language Models</p>
          </div>
        </div>
        <div class="skillBar">
          <img src={WebDesign} alt="" class="skillBarImg"></img>
          <div class="skillBarText">
            <h2>Java Programming</h2>
            <p>Primarily coded in Java in advanced NC State Computer Science Classes</p>
          </div>
        </div>
        <div class="skillBar">
          <img src={AppDesign} alt="" class="skillBarImg"></img>
          <div class="skillBarText">
            <h2>Python Programming</h2>
            <p>Utilized Python programming to create the 1-1 Mappings for a LlamaIndex RAG Tool</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;