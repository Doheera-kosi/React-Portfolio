import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I can offer</h5>
      <h2>Serveices</h2>
      
      <div className="container services__container">

      <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web Application / Business Software</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Content Management System</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Mobile Optimised Websites</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Custom Website Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Event Booking System</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Mobile Application</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Graphic Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Portals</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Portfolios</p>
            </li>
          </ul>
        </article>
        {/* End of Web Dev */}


        <article className="service">
          <div className="service__head">
            <h3>IT Support</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Monitoring</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Data Analytics</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Active Support</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Data Backup</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>

        {/* End of First Card */}
        
        <article className="service">
          <div className="service__head">
            <h3>Data Analytics</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Data Modelling</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Data Analytics</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Data Wrangling / Cleaning</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Data Visualization</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web Scrapping</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Model Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Model Testing</p>
            </li>
          </ul>
        </article>
{/* end of content Creation */}
      </div>
    </section>
  )
}

export default Services