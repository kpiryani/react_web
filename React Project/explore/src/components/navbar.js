import "./navbar.css";
import logo from "../images/k.jpg";
import { Link } from "react-scroll";
import contactImg from "../images/black email logo.jpg";
import menu from "../images/menu.jpg";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false); // State to manage mobile menu visibility
  const [fadeIn, setFadeIn] = useState(false); // State to manage fade-in effect

  // useEffect to trigger fade-in effect on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true); // Set fadeIn to true after 100ms to apply the fade-in class
    }, 100); // Adjust duration as needed
    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  return (
    <nav className={`navbar ${fadeIn ? 'fade-in' : ''}`}> {/* Apply fade-in class based on state */}
      <Link to="intro" spy={true} smooth={true} offset={-200} duration={500}>
        <img src={logo} alt="Logo" className="logo" />
      </Link>

      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-200}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="aboutme_title"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
          className="desktopMenuListItem"
        >
          About Me
        </Link>
        <Link
          activeClass="active"
          to="experienceTitle"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="desktopMenuListItem"
        >
          Experience
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="desktopMenuListItem"
        >
          Skills
        </Link>
      </div>

      <button
        className="desktopMenuBtn"
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img src={contactImg} alt="" className="desktopMenuImg" /> Contact Me
      </button>
      <img
        src={menu}
        alt="Menu"
        className="mobMenu"
        onClick={() => setShowMenu(!showMenu)}
      />

      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-200}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="aboutme"
          spy={true}
          smooth={true}
          offset={-150} 
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          About Me
        </Link>
        <Link
          activeClass="active"
          to="experience"
          spy={true}
          smooth={true}
          offset={-150} // Adjusted offset for "Experience"
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Experience
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-150} // Adjusted offset for "Skills"
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Contact Me
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
