import React from 'react'
import './portfolio.css'
import Port1 from '../../assets/port1.png'
import Port2 from '../../assets/port2.png'
import Port3 from '../../assets/port3.png'
import Port4 from '../../assets/port4.png'
import Port5 from '../../assets/port5.png'
import Port6 from '../../assets/port6.png'

const data = [
  {
    id: 1,
    image: Port1,
    title: 'Activity Manager (Todo-list)',
    github: 'https://github.com/Doheera-kosi/todo-list-app',
    demo: 'https://doheera-kosi.github.io/todo-list-app/dist/'
  },
  {
    id: 2,
    image: Port2,
    title: 'Food Palace - (Non-mobile)',
    github: 'https://github.com/Doheera-kosi/Food-Palace',
    demo: 'https://doheera-kosi.github.io/Food-Palace/dist/'
  },
  {
    id: 3,
    image: Port3,
    title: 'Expenses Manager - (Mobile)',
    github: 'https://github.com/Doheera-kosi/Budget-App/tree/development',
    demo: 'https://budgets-ek.onrender.com/'
  },
  {
    id: 4,
    image: Port4,
    title: 'Crypto Stats Dashboard - (Mobile)',
    github: 'https://github.com/Doheera-kosi/Crypto-Metrics-App',
    demo: 'https://beautiful-cobbler-2a0f6f.netlify.app/'
  },
  {
    id: 5,
    image: Port5,
    title: 'JavaScript Currency Converter',
    github: 'https://github.com/Doheera-kosi/JavaScript-Currency-Converter/tree/working',
    demo: 'https://doheera-kosi.github.io/JavaScript-Currency-Converter/'
  },
  {
    id: 6,
    image: Port6,
    title: 'Leaderboard-(Non-mobile)',
    github: 'https://github.com/Doheera-kosi/Leaderboard-setup-project/tree/Leaderboard-final-tuches',
    demo: 'https://doheera-kosi.github.io/Leaderboard-setup-project/dist/'
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
                <img src={image} alt={title} />
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
      </div>
    </section>
  )
}

export default Portfolio
