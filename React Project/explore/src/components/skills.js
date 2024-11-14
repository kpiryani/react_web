import React from "react";
import "./skills.css";
import JavaLogo from "../images/java logo.jpg";
import PythonLogo from "../images/python logo.webp";
import LlamaLogo from "../images/llama_logo.jpg";
import ReactLogo from "../images/react_logo.png";
import HuggingLogo from "../images/huggingface_logo.png";

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
      </div>
    </section>
  );
};

export default Skills;
