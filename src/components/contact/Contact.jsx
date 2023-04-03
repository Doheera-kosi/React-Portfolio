import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FaLinkedin, FaWhatsapp, FaAngellist} from 'react-icons/fa'

// Integrating email services
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  // For email
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_57iraz8', 'template_0km6gxl', form.current, 'bdQ8fQz7-6PWO9xMl')
    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Let's Get In touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>E-mail</h4>
            <h5>kupourevans99@gmail.com</h5>
            <a href="mailto:kupourevans99@gmail.com" target='_blank' rel='noreferrer'>Just mail me</a>
          </article>

          <article className="contact__option">
            <FaLinkedin className='contact__option-icon' />
            <h4>Linked-In</h4>
            <h5>Evans@Linked</h5>
            <a href="https://www.linkedin.com/in/evans-kupour-1879421a3/" target='_blank' rel='noreferrer'>Just send a message</a>
          </article>

          <article className="contact__option">
            <FaWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>(+233) 20 359 6223</h5>
            <a href="https://api.whatsapp.com/send?phone=+233203596223&text=Hello%20there!" target='_blank' rel='noreferrer'>Just send me a message</a>
          </article>

          <article className="contact__option">
            <FaAngellist className='contact__option-icon' />
            <h4>Well-Found</h4>
            <h5>Evans@WellFound</h5>
            <a href="https://wellfound.com/u/kupour-evans" target='_blank' rel='noreferrer'>Just send me a message</a>
          </article>
        </div>
        
        {/* End of Cantact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your E-mail' required />
          <textarea name="message" id="" cols="30" rows="10" placeholder='Type here...' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact