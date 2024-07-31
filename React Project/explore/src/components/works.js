import React from 'react'
import './works.css'
import Portfolio1 from '../images/black_resume_logo.jpg'
import Portfolio2 from '../images/github_logo.png'

const Works = () => {
  return (
    <section id='works'>
      <h2 class="workstitle">My Portfolio</h2>
      <span class="worksDesc"> The work I have done is a combination of internships and schoolwork.</span>
      <div class="worksImgs">
        <img src={Portfolio1} alt="" class="worksImg" />
        <img src={Portfolio2} alt="" class="worksImg" />
      </div>
    </section>
  );
}

export default Works

