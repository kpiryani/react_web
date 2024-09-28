import React from "react";
import "./works.css";
import Portfolio1 from "../images/black_resume_logo.jpg";
import Portfolio2 from "../images/github_logo.png";

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">
        {" "}
        The work I have done is a combination of internships and schoolwork.
      </span>
      <div className="worksImgs">
        <img src={Portfolio1} alt="" className="worksImg" />
        <img src={Portfolio2} alt="" className="worksImg" />
      </div>
      <button className="worksBtn">See More</button>
    </section>
  );
};

export default Works;
