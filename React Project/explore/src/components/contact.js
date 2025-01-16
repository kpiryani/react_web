import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission
    setIsSending(true); // Indicate the email is being sent

    emailjs
      .sendForm(
        "service_qv3vmsk", // EmailJS service ID
        "template_uog7il6", // EmailJS template ID
        form.current, // Reference to the form
        "PovihQqLJt-AA3aB9" // Public key
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Your email has been sent successfully!");
          e.target.reset(); // Reset form fields
        },
        (error) => {
          console.error("FAILED...", error.text);
          alert(
            "There was an issue sending your email. Please try again later."
          );
        }
      )
      .finally(() => {
        setIsSending(false); // Reset sending state
      });
  };

  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          What's holding you back? Please reach out to me if you have any questions!
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="your_name"
            required
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="your_email"
            required
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="submitBtn" disabled={isSending}>
            {isSending ? "Sending..." : "Submit"}
          </button>
          <div className="links">
            <a
              href="https://www.linkedin.com/in/krish-piryani/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-item"
            >
              <FontAwesomeIcon icon={faLinkedin} size="3x" className="link-icon" />
            </a>
            <a
              href="https://github.com/kpiryani"
              target="_blank"
              rel="noopener noreferrer"
              className="link-item"
            >
              <FontAwesomeIcon icon={faGithub} size="3x" className="link-icon" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
