import React, { useState, useEffect, useRef } from "react";
import "./intro.css";
import bg from "../images/krish_sf.jpg";
import btnImg from "../images/linkedin_logo.png";
import gitImg from "../images/github_logo.png";

const Intro = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const introRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Scroll-linked exit transition: writes a 0→1 progress value to a CSS
  // variable once per animation frame, and the CSS turns it into
  // transform/opacity only (GPU-friendly, no layout or repaint).
  useEffect(() => {
    const el = introRef.current;
    if (!el) return;
    let frame = null;
    const update = () => {
      frame = null;
      const progress = Math.min(Math.max(window.scrollY / (window.innerHeight * 0.85), 0), 1);
      el.style.setProperty("--exit", progress.toFixed(3));
    };
    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="intro" ref={introRef} className={`intro ${fadeIn ? 'fade-in' : ''}`}>
      <div className="introContent">
        <span className="hello">
          Hello there! <span className="waving-hand">👋</span>
        </span>
        <span className="introText">
          I'm <span className="IntroName" data-text="Krish Piryani">Krish Piryani</span> <br />{" "}
        </span>
        <span className="role">
          And I am a senior at
          <br /> <span className="IntroUniv" data-text="NC State University">NC State University</span>
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
      <a href="#skills" className="scrollCue" aria-label="Scroll to skills"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("skills").scrollIntoView({ behavior: "smooth" });
        }}>
        <span className="scrollCueMouse"><span className="scrollCueWheel" /></span>
        <span className="scrollCueText">scroll</span>
      </a>
    </section>
  );
};

export default Intro;
