import React from 'react'
import LinkedIn from '../images/linkedin_logo.png'
import './contact.css';

const Contact = () => {
  return (
    <section id="contactPage">

        <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please reach out to me if you have any questions!</span>
        <form className='contactForm'>
            <input type="text" className="name" placeholder='Your Name' />
            <input type="email" className="email" placeholder='Your Email' />
            <textarea className="msg" rows="5" placeholder='Your Message'></textarea>
            <button type='submit' value='Send' className="submitBtn">Submit</button>
            <div class="links">
                <img src={LinkedIn} alt="LinkedIn" class="link" />
            </div>
        </form>
        </div>
    </section>
  )
}

export default Contact