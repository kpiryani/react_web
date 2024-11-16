import React from "react";
import "./skills.css";
import JavaLogo from "../images/java logo.jpg";
import PythonLogo from "../images/python logo.webp";
import LlamaLogo from "../images/llama_logo.jpg";
import ReactLogo from "../images/react_logo.png";
import HuggingLogo from "../images/huggingface_logo.png";
import CLogo from "../images/c++_logo.jpg";
import SQLLogo from "../images/sql_logo.png"
import PyTorchLogo from "../images/pytorch_logo.png"
import StreamLitLogo from "../images/streamlit_logo.jpg"
import CelonisLogo from "../images/celonis_logo.jpg"

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">Skills</span>
      <span className="skillDesc">
        These are some of the skills I specialize most in.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={JavaLogo} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Java Programming</h2>
          </div>
        </div>
        <div className="skillBar">
          <img src={PythonLogo} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Python Programming</h2>
          </div>
        </div>
        <div className="skillBar">
          <img src={CLogo} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>C/C++ Programming</h2>
          </div>
        </div>
        <div className="skillBar">
          <img src={LlamaLogo} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>LlamaIndex</h2>
          </div>
        </div>
        <div className="skillBar">
          <img src={ReactLogo} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>React.js</h2>
          </div>
        </div>
        <div className="skillBar">
          <img src={HuggingLogo} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>HuggingFace</h2>
          </div>
        </div>
        <div className="skillBar">
          <img src={SQLLogo} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>MySQL</h2>
          </div>
        </div>
        <div className="skillBar">
          <img src={PyTorchLogo} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>PyTorch</h2>
          </div>
        </div>
        <div className="skillBar">
          <img src={StreamLitLogo} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Streamlit</h2>
          </div>
        </div>
        <div className="skillBar">
          <img src={CelonisLogo} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Celonis</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
