import React, { useEffect, useRef, useState } from "react";
import "./siderails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

// Sections tracked by the right-hand rail. `selector` points at an element
// inside each section that exists in the page today.
const SECTIONS = [
  { label: "Home", selector: "#intro" },
  { label: "Skills", selector: "#skills" },
  { label: "Experience", selector: "#experience" },
  { label: "Projects", selector: "#Projects" },
  { label: "About Me", selector: ".aboutme_title" },
  { label: "Contact", selector: "#contactPage" },
];

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/krish-piryani/", icon: faLinkedin },
  { label: "GitHub", href: "https://github.com/kpiryani", icon: faGithub },
  { label: "Email", href: "mailto:kopiryan@ncsu.edu", icon: faEnvelope },
];

const SideRails = () => {
  const [active, setActive] = useState(0);
  const fillRef = useRef(null);

  // Overall scroll progress → scaleY on the fill bar (compositor-only).
  // Active section = last section whose top has passed 40% of the viewport.
  useEffect(() => {
    let frame = null;
    const update = () => {
      frame = null;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      if (fillRef.current) fillRef.current.style.transform = `scaleY(${progress})`;

      const line = window.innerHeight * 0.4;
      let current = 0;
      SECTIONS.forEach((s, i) => {
        const el = document.querySelector(s.selector);
        if (el && el.getBoundingClientRect().top <= line) current = i;
      });
      setActive(current);
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

  const goTo = (selector) => {
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <aside className="sideRail sideRailLeft" aria-label="Social links">
        {SOCIALS.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="sideSocial"
            aria-label={s.label}
          >
            <FontAwesomeIcon icon={s.icon} />
            <span className="sideTip">{s.label}</span>
          </a>
        ))}
        <span className="sideLine" />
      </aside>

      <nav className="sideRail sideRailRight" aria-label="Page sections">
        <div className="sideTrack">
          <div className="sideTrackFill" ref={fillRef} />
        </div>
        <ul className="sideDots">
          {SECTIONS.map((s, i) => (
            <li key={s.label}>
              <button
                type="button"
                className={`sideDot ${i === active ? "isActive" : ""} ${i < active ? "isPast" : ""}`}
                aria-label={`Go to ${s.label}`}
                aria-current={i === active ? "true" : undefined}
                onClick={() => goTo(s.selector)}
              >
                <span className="sideDotLabel">{s.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default SideRails;
