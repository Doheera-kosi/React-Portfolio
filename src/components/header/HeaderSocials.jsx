import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub, FaWhatsapp, FaDribbble} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
      <a href="https://github.com/Doheera-kosi" target="_blank" rel="noreferrer"><FaGithub /></a>
      <a href="https://api.whatsapp.com/send?phone=+233203596223&text=Hello%20there!" target='_blank' rel='noreferrer'><FaWhatsapp /></a>
      <a href="https://dribble.com" target="_blank" rel="noreferrer"><FaDribbble /></a>
    </div>
  )
}

export default HeaderSocials