import React from 'react'
import './footer.css'
import {FaFacebookF, FaLinkedin, FaAngellist, FaTwitter, FaWhatsapp} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer id="footer">
      <a href="/" className='footer__logo'>Evans Kupour</a>

      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/evans"><FaFacebookF /></a>
        <a href="https://www.linkedin.com/in/evans-kupour-1879421a3/" target='_blank' rel='noreferrer'><FaLinkedin /></a>
        <a href="https://angellist.com/evans"><FaAngellist /></a>
        <a href="https://twitter.com/@KupourE" target='_blank' rel='noreferrer'><FaTwitter /></a>
        <a href="https://api.whatsapp.com/send?phone=+233203596223&text=Hello%20there!" target='_blank' rel='noreferrer'><FaWhatsapp /></a>
        <a href="https://github.com/Doheera-kosi" target='_blank' rel='noreferrer'><FaWhatsapp /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; 2023 Evans Kupour. All rights reseved</small>
      </div>
    </footer>
  )
}

export default Footer