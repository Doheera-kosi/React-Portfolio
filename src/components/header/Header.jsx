import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/avatar1.png'
import HeaderSocials  from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Evans Kupour</h1>
        <h5 className='text-light'>Fullstack Developer | Data Analyst | Forex Trader | Network Engineer </h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
        <img src={ME} alt="" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll down</a>
      </div>
    </header>
  )
}

export default Header
