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
        <Link class="desktopMenuListItem">Home</Link>
        <Link class="desktopMenuListItem">About Me</Link>
        <Link class="desktopMenuListItem">Experience</Link>
        <Link class="desktopMenuListItem">Projects</Link>
      </div>
    <button className="desktopMenuBtn">
      <img src={contactImg} alt="" class="desktopMenuImg" /> Contact Me </button>
    </nav>
  )
}

export default Navbar