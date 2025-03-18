import React, { useState, useEffect } from "react";
import "./intro.css";
import bg from "../images/krish_sf.jpg";
import btnImg from "../images/linkedin_logo.png";
import gitImg from "../images/github_logo.png";

const Intro = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="intro" className={`intro ${fadeIn ? 'fade-in' : ''}`}>
      <div className="introContent">
        <span className="hello">
          Hello there! <span className="waving-hand">👋</span>
        </span>
        <span className="introText">
          I'm <span className="IntroName">Krish Piryani</span> <br />{" "}
        </span>
        <span className="role">
          And I am a junior at
          <br /> <span className="IntroUniv">NC State University</span>
        </span>
        <p className="introPara"> * B. S. Computer Science</p>
        <p className="introPara"> * Email: kopiryan@ncsu.edu</p>
        <a
          href="https://www.linkedin.com/in/krish-piryani/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn">
            <img src={btnImg} alt="My LinkedIn!" className="btnImg" /> My
            LinkedIn!
          </button>
        </a>
        <a
          href="https://github.com/kpiryani"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn">
            <img src={gitImg} alt="My GitHub!" className="gitImg" /> My GitHub!
          </button>
        </a>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
