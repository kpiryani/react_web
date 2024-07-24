import React from 'react';
import './intro.css';
import bg from '../images/face.jpg'
import btnImg from '../images/suitcase.png'
import {Link} from 'react-scroll'

const Intro = () => {
  return (
    <section id="intro">
      <div class="introContent">
        <span class="hello">Hello there, </span>
        <span class="introText">I'm <span class="IntroName">Krish Piryani</span> <br /> </span>
        <span class="role">And I am a student <br/> at NC State University</span>
        <p class="introPara"> I am a junior majoring in Computer Science</p>
        <Link><button class="btn"><img src={btnImg} alt="Hire Me!" className = 'btnImg' /> Hire Me! </button></Link>
      </div>
      <img src={bg} alt="Profile" class="bg" />
    </section>
  )
}

export default Intro;