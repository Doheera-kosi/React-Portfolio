import React from 'react'
import './testimonials.css'
// import ME from '../../assets/avatar1.png'
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
    name: 'Mr. Joseph Irirwanirira (Full-Stack Developer)',
    review: 'I first met Evans 3 months ago, he is not only a good developer but also a good collaborator. He is capable of bringing good value to your company. He has good discipline in working and is very professional. He knows how to share his ideas and thoughts. He is keen on creating a great work environment with his ability in communicating with others professionally. He has a good knowledge of programming and knows how to develop IT solutions. He knows how to adapt and is very talented. His knowledge of programming is very interesting. I recommend you hire this awesome develope.'
  },
  {
    avatar: 'Avt2',
    name: 'Mr. Kwasi Antwi Baayeh (Software Developer)',
    review: 'Evans is a rare breed of a coder - one who will make your day easier. Working with him was always delightful and he never missed an opportunity to show off his skills. He takes pride in everything he does, and its quite easy to see how excited he becomes when taking on new challenges. Evans is dedicated beyond words, constantly striving for knowledge and ways to perfect himself. He will make you proud wherever you put him, not just for his coding abilities but also for how much he cares about the work that matters most: his life calling which is writing code'
  },
  {
    avatar: 'Avt',
    name: 'Mr. Abdelhafid Nejjari (Software Developer)',
    review: 'Evans is passionate about his work and solely concerned in delivering exactly what is expected and ready to improve if need be. He communicates nicely and make sure everyone in the team is up to speed. Work with Evans and experience a difference in your dev team. It has always been my pleasure working with you'
  },
  {
    avatar: 'Avt',
    name: 'Ajayi Ridwan (Software Developer)',
    review: ' had the privilege of working with Evans several times and he was such an amazing team member. He was a very productive person, hardworking, and broad-minded, who always focused on achieving the most important sustainable solution challenges. He showed descent skills in software development and fast learning ability, he is attentive to details and excellent solving problem-solving ability. Hiring Evans is the signature of success.'
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
                {/* <img src={ME} alt="Avatar1" /> */}
              </div>
              <h5 className='client__name'>{name}</h5>
                <small className="client__review">
                  {review}
                </small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials