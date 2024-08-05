import React from 'react'
import './navbar.css'
import logo from '../images/k.jpg'
import {Link} from 'react-scroll'
import contactImg from '../images/black email logo.jpg'

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className='logo'/>
      <div className="desktopMenu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-200} duration={500} class="desktopMenuListItem">Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} class="desktopMenuListItem">About Me</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} class="desktopMenuListItem">Portfolio</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} class="desktopMenuListItem">Experience</Link>  {/* currently scrolling to contact page */}
      </div>
    <button className="desktopMenuBtn" onClick={() => {
      document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
    }}>
      <img src={contactImg} alt="" class="desktopMenuImg" /> Contact Me</button>
    </nav> 
  )
}

export default Navbar