import React from 'react';
import './intro.css';
import bg from '../images/krish face zoo.jpg'
import btnImg from '../images/linkedin_logo.png'
import gitImg from '../images/github_logo.png'

const Intro = () => {
  return (
    <section id="intro">
      <div class="introContent">
        <span class="hello">Hello there! 👋</span>
        <span class="introText">I'm <span class="IntroName">Krish Piryani</span> <br /> </span>
        <span class="role">And I am a junior at<br/> at NC State University</span>
        <p class="introPara"> * B. S. Computer Science</p>
        <div className="btnContainer">
          <a href="https://www.linkedin.com/in/krish-piryani/" target="_blank" rel="noopener noreferrer">
            <button className="btn">
              <img src={btnImg} alt="My LinkedIn!" className="btnImg" /> Let's Connect on LinkedIn!
            </button>
          </a>
          <a href="https://github.com/kpiryani" target="_blank" rel="noopener noreferrer">
            <button className="btn">
              <img src={gitImg} alt="My GitHub!" className="btnImg" /> Check Out My GitHub!
            </button>
          </a>
        </div>
        
      </div>
      <img src={bg} alt="Profile" class="bg" />
    </section>
  )
}

export default Intro;