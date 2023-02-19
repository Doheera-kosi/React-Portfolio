import React from 'react'
import './testimonials.css'
import ME from '../../assets/avatar1.png'
// import ME2 from '../../assets/avatar1.png'
// import ME3 from '../../assets/avatar1.png'
// import ME4 from '../../assets/avatar1.png'

// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {
    avatar: 'Avt1',
    name: 'Mr. X-man',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet rem eaque illum! Sed reiciendis minima    consequatur pariatur odit aut, illum, eos facere dolorem aperiam numquam.'
  },
  {
    avatar: 'Avt2',
    name: 'Mr. X-man',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet rem eaque illum! Sed reiciendis minima    consequatur pariatur odit aut, illum, eos facere dolorem aperiam numquam.'
  },
  {
    avatar: 'Avt3',
    name: 'Mr. X-man',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet rem eaque illum! Sed reiciendis minima    consequatur pariatur odit aut, illum, eos facere dolorem aperiam numquam.'
  },
  {
    avatar: 'Avt4',
    name: 'Mr. X-man',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet rem eaque illum! Sed reiciendis minima    consequatur pariatur odit aut, illum, eos facere dolorem aperiam numquam.'
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
                      
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={ME} alt="Avatar1" />
              </div>
              <h5 className='client__name'>{name}</h5>
                <small className="client__review">
                  {review}
                </small>
            </SwiperSlide>
            )
          })
        }
        
        {/* <article className="testimonial">
          <div className="client__avatar">
            <img src={ME} alt="Avatar1" />
          </div>
          <h5 className='client__name'>Ican Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quidem consectetur perferendis repudiandae et. Itaque tempore unde aut porro repudiandae voluptates hic illo veniam necessitatibus.
            </small>
        </article>
        
        <article className="testimonial">
          <div className="client__avatar">
            <img src={ME} alt="Avatar1" />
          </div>
          <h5 className='client__name'>Ican Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quidem consectetur perferendis repudiandae et. Itaque tempore unde aut porro repudiandae voluptates hic illo veniam necessitatibus.
            </small>
        </article>
        
        <article className="testimonial">
          <div className="client__avatar">
            <img src={ME} alt="Avatar1" />
          </div>
          <h5 className='client__name'>Ican Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quidem consectetur perferendis repudiandae et. Itaque tempore unde aut porro repudiandae voluptates hic illo veniam necessitatibus.
            </small>
        </article> */}
      </Swiper>
    </section>
  )
}

export default Testimonials