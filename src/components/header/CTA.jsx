import React from 'react'
// import CV from '../../assets/Evans_Kupour_Resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      {/* <a href={CV} download className='btn'>Download CV</a> */}
      <a href="https://docs.google.com/document/d/1q1_GE2zFmGiUGwJ8oVGmtWGXBYsYFBUzL7JvB1BFR8U/edit?usp=sharing" target='_blank' rel='noreferrer' download className='btn'>Download CV</a>
      <a href="#contact" className='btn btn-primary'>Let's talk</a>
    </div>
  )
}

export default CTA