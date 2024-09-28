import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_qv3vmsk', 
      'template_uog7il6', 
      form.current,
      'g0L_vdYXsVRRl9ogwp5To'
    )
    .then(
      (result) => {
        console.log('SUCCESS!', result.text);
        alert('Your message to Krish has been sent! You should receive a response within the next 48 hours.');
        e.target.reset();
      },
      (error) => {
        console.error('FAILED...', error.text);
        alert('Message failed to send. Please try again later.');
      }
    );
  };

  return (
    <section id="contactPage">

        <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please reach out to me if you have any questions!</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type="text" className="name" placeholder='Your Name' name='from_name' />
            <input type="email" className="email" placeholder='Your Email' name='your_email' />
            <textarea className="msg" name="message" rows="5" placeholder='Your Message'></textarea>
            <button type='submit' value='Send' className="submitBtn">Submit</button>
        </form>
        </div>
    </section>
  )
}

export default Contact