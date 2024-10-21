import React, { useRef } from "react";
import LinkedIn from "../images/linkedin_logo.png";
import "./contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qv3vmsk", 
        "template_uog7il6", 
        form.current, 
        "g0L_vdYXsVRRl9ogwp5To"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please reach out to me if you have any questions!
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
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <img src={LinkedIn} alt="LinkedIn" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
