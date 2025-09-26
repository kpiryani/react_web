import React, { useEffect, useRef } from "react";
import "./skills.css";
import JavaLogo from "../images/java logo.jpg";
import PythonLogo from "../images/python logo.webp";
import LlamaLogo from "../images/llama_logo.jpg";
import ReactLogo from "../images/react_logo.png";
import HuggingLogo from "../images/huggingface_logo.png";
import CLogo from "../images/c++_logo.jpg";
import SQLLogo from "../images/sql_logo.png";
// import PyTorchLogo from "../images/pytorch_logo.png";
import StreamLitLogo from "../images/streamlit_logo.jpg";
import CelonisLogo from "../images/celonis_logo.jpg";
import LangchainLogo from "../images/langchain_logo.webp"
import JunitLogo from "../images/junit5_logo.jpg"
import JenkinsLogo from "../images/jenkins_logo.jpg"
import PowerBILogo from "../images/power_bi_logo.png"
import RestAPILogo from "../images/rest_api.jpg"
import ChromaLogo from "../images/chroma_logo.png"
import BigQueryLogo from "../images/bigquery_logo.jpeg"

import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faRobot} from '@fortawesome/free-solid-svg-icons';
const Skills = () => {
  const skillsRef = useRef(null);

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

    const skillBoxes = skillsRef.current.querySelectorAll(".skill-box");
    skillBoxes.forEach((box) => observer.observe(box));

    const skillBars = skillsRef.current.querySelectorAll(".skillBar");
    skillBars.forEach((bar) => observer.observe(bar));

    return () => {
      skillBoxes.forEach((box) => observer.unobserve(box));
      skillBars.forEach((bar) => observer.unobserve(bar));
    };
  }, []);

  return (
    <section id="skills" ref={skillsRef}>
      <span className="skillTitle">My Areas of Expertise</span>
      
      <div className="skills-grid">
        <div className="skill-box">
          <FontAwesomeIcon icon={faCode} size="3x" className="skill-icon"/>
          <div className="skill-content">
            <h3>Agile Software Development</h3>
            <p>Proficient in Java, Python, and C/C++ for building robust and efficient software solutions at scale.</p>
          </div>
        </div>
        <div className="skill-box">
          <FontAwesomeIcon icon={faRobot} size="3x" className="skill-icon"/>
          <div className="skill-content">
            <h3>ML Research and Deployment</h3>
            <p>Experienced in AI research and enhancing/deploying ML models using LlamaIndex, Langchain, and HuggingFace frameworks.</p>
          </div>
        </div>
        <div className="skill-box">
          <FontAwesomeIcon icon={faDatabase} size="3x" className="skill-icon"/>
          <div className="skill-content">
            <h3>Data Mining and Modeling</h3>
            <p>Skilled in data extraction, analysis, and visualization using SQL, MongoDB, and Google BigQuery.</p>
          </div>
        </div>
      </div>
      <div className="skillBars">
        <div className="skillBar">
          <img src={JavaLogo} alt="Java" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Java Programming</h2>
          </div>
        </div>
        <div className="skillBar">
          <img src={PythonLogo} alt="Python" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Python Programming</h2>
          </div>
        </div>
        <div className="skillBar">
          <img src={CLogo} alt="C++" className="skillBarImg" />
          <div className="skillBarText">
            <h2>C/C++ Programming</h2>
          </div>
        </div>
        <div className="skillBar">
          <img src={LlamaLogo} alt="LlamaIndex" className="skillBarImg" />
          <div className="skillBarText">
            <h2>LlamaIndex</h2>
          </div>
        </div>
        <div className="skillBar">
          <img src={ReactLogo} alt="React.js" className="skillBarImg" />
          <div className="skillBarText">
            <h2>React.js</h2>
          </div>
        </div>
        <div className="skillBar">
          <img src={HuggingLogo} alt="HuggingFace" className="skillBarImg" />
          <div className="skillBarText">
            <h2>HuggingFace</h2>
          </div>
        </div>
        <div className="skillBar">
          <img src={SQLLogo} alt="MySQL" className="skillBarImg" />
          <div className="skillBarText">
            <h2>MySQL</h2>
          </div>
        </div>
        <div className="skillBar">
          <img src={BigQueryLogo} alt="Bigquery" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Google BigQuery</h2>
          </div>
        </div>
        <div className="skillBar">
          <img src={StreamLitLogo} alt="Streamlit" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Streamlit</h2>
          </div>
        </div>
        <div className="skillBar">
          <img src={CelonisLogo} alt="Celonis" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Celonis</h2>
          </div>
        </div>
        <div className="skillBar">
          <img src={LangchainLogo} alt="Java" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Langchain</h2>
          </div>
        </div>
        <div className="skillBar">
        <img src={JunitLogo} alt="Java" className="skillBarImg" />
          <div className="skillBarText">
            <h2>JUnit</h2>
          </div>
        </div>
        <div className="skillBar">
        <img src={JenkinsLogo} alt="Java" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Jenkins</h2>
          </div>
        </div>
        <div className="skillBar">
        <img src={PowerBILogo} alt="Java" className="skillBarImg" />
          <div className="skillBarText">
            <h2>PowerBI</h2>
          </div>
        </div>
        <div className="skillBar">
        <img src={ChromaLogo} alt="Java" className="skillBarImg" />
          <div className="skillBarText">
            <h2>ChromaDB</h2>
          </div>
        </div>
        <div className="skillBar">
        <img src={RestAPILogo} alt="Java" className="skillBarImg" />
          <div className="skillBarText">
            <h2>REST API</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
