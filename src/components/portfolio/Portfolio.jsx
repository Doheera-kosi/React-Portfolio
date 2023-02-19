import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/avatar1.png'
// import IMG1 from '../../assets/avatar1.png'
// import IMG1 from '../../assets/avatar1.png'
// import IMG1 from '../../assets/avatar1.png'
// import IMG1 from '../../assets/avatar1.png'
// import IMG1 from '../../assets/avatar1.png'

const data = [
  {
    id: 1,
    image:'IMG1',
    title: 'Crypto Dashboard',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id: 2,
    image:'IMG1',
    title: 'Crypto Dashboard',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id: 3,
    image:'IMG1',
    title: 'Crypto Dashboard',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id: 4,
    image:'IMG1',
    title: 'Crypto Dashboard',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id: 5,
    image:'IMG1',
    title: 'Crypto Dashboard',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id: 6,
    image:'IMG1',
    title: 'Crypto Dashboard',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={IMG1} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
        
        {/* <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
          </div>
        </article>
        
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
          </div>
        </article>
        
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
          </div>
        </article>
        
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
          </div>
        </article>
        
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
          </div>
        </article> */}
      </div>
    </section>
  )
}

export default Portfolio