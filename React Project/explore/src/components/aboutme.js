import React, { useEffect, useRef } from 'react';
import bg from "../images/neuromorphic_computing.jpeg";
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
      As both a dedicated individual and a collaborative team player, I am excited to positively contribute to the rapidly evolving field of <span className="highlights">neurotechnology</span>. My passion lies in exploring the convergence of <span className="highlights_2">artificial intelligence</span> and <span className="highlights_2">brain-computer interfaces</span> to help people with neurological disorders effortlessly and fully communicate with the world around them. 
      </p>
      <img src={bg} alt="Neuro" class="bg" />
    </div>
    
  );
};

export default AboutMe;
