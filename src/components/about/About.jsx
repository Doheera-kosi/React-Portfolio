import React from 'react'
import './about.css'
import ME from '../../assets/avatar1.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About_Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years of Experience</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>Over 30+ nation wide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Project</h5>
              <small>40+ Completed projects</small>
            </article>

          </div>

          <p>
            I'm Evans Kupour a software developer specialized in different technologies ,Building web applications, Mobile apps and beautiful websites for companies. Love digging into hard problems, learning new languages and technologies.
          </p>
          
          <a href="#contact" className='btn btn-primary'>Let's Talk Now</a>
        </div>
      </div>
    </section>
  )
}

export default About