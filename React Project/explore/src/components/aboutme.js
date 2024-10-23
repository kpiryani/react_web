import React, { useEffect, useRef } from 'react';
import './aboutme.css';

const AboutMe = () => {
  const titleRef = useRef(null);
  const descriptionRefs = useRef([]);

  const addToDescriptionRefs = (el) => {
    if (el && !descriptionRefs.current.includes(el)) {
      descriptionRefs.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    });

    // Store current refs in local variables
    const currentTitleRef = titleRef.current;
    const currentDescriptionRefs = descriptionRefs.current;

    // Observe the title and all description elements
    if (currentTitleRef) {
      observer.observe(currentTitleRef);
    }
    currentDescriptionRefs.forEach((desc) => observer.observe(desc));

    return () => {
      // Clean up the observer when the component is unmounted
      if (currentTitleRef) observer.unobserve(currentTitleRef);
      currentDescriptionRefs.forEach((desc) => observer.unobserve(desc));
    };
  }, []);

  return (
    <div className="aboutme_container">
      <h1 className="aboutme_title" ref={titleRef}>
        About Me
      </h1>
      <p className="aboutme_description" ref={addToDescriptionRefs}>
        I am currently majoring in Computer Science and minoring in Cognitive Science at North Carolina State University. 
        As both a dedicated individual and a collaborative team player, I am excited to positively contribute to the rapidly 
        evolving field of neurotechnology. I am particularly passionate about the ethical implications of AI and investigating
        its role in advancing neuromorphic computing to create systems that mimic human intelligence and adaptability.
      </p>
      <p className="aboutme_description" ref={addToDescriptionRefs}>
        I am currently seeking internship opportunities for the summer of 2025!
      </p>
    </div>
  );
};

export default AboutMe;
//UNTILIZED AI FOR FADE IN FORMATTING