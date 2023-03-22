import React, { useState } from 'react';
import { FaAward } from 'react-icons/fa';
import './certifications.css'

function Certificates() {
  const [showAll, setShowAll] = useState(false);

  const certificates = [
    {
      id: 1,
      issuer: 'IBM',
      title: 'IBM Data Science',
      link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/6CGRHP8K4LWB',
    },
    {
      id: 2,
      issuer: 'IBM',
      title: 'IBM IT Support',
      link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/G8RUPFRKY47G',
    },
    {
      id: 3,
      issuer: 'IBM',
      title: 'Introduction to Hardware and Operating Systems',
      link: 'https://www.coursera.org/account/accomplishments/certificate/VJ6JPRSZVYRN',
    },
    {
      id: 4,
      issuer: 'IBM',
      title: 'Introduction to Software, Programming, and Databases',
      link: 'https://www.coursera.org/account/accomplishments/certificate/A48AEFNQE6M6',
    },
    {
      id: 5,
      issuer: 'Microverse',
      title: 'Full Stack Capstone',
      link: 'https://www.credential.net/86d6d3dd-3f9f-40e8-84b2-515479da6285',
    },
    {
      id: 6,
      issuer: 'Microverse',
      title: 'Ruby',
      link: 'https://pdf.credential.net/8rzwb7we_1674472990269.pdf',
    },
    {
      id: 7,
      issuer: 'Microverse',
      title: 'React/Redux',
      link: 'https://www.credential.net/f358b075-22a1-400c-8d14-d6bec18767eb#gs.r1lgbo',
    },
    {
      id: 8,
      issuer: 'Microverse',
      title: 'JavaScript',
      link: 'https://www.credential.net/9e3a5063-48e0-4e5d-bc57-9856fae44339#gs.r1m0ct',
    },
    {
      id: 9,
      issuer: 'Microverse',
      title: 'HTML5/CSS3',
      link: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/59015425',
    },
    {
      id: 10,
      issuer: 'Meta',
      title: 'Introduction to Back-End Development',
      link: 'https://www.coursera.org/account/accomplishments/certificate/MAT6EWP8REUD',
    },
    {
      id: 11,
      issuer: 'Meta',
      title: 'Programming in Python',
      link: 'https://www.coursera.org/account/accomplishments/certificate/ML4C7DW3A9P6',
    },
    {
      id: 12,
      issuer: 'IBM',
      title: 'Data Analysis with Python',
      link: 'https://www.coursera.org/account/accomplishments/certificate/5YD4Z6CUCHGH',
    },
    {
      id: 13,
      issuer: 'IBM',
      title: 'Applied Data Science Capstone',
      link: 'https://www.coursera.org/account/accomplishments/certificate/PEE6TF54HMBF',
    },
    {
      id: 14,
      issuer: 'IBM',
      title: 'Databases and SQL for Data Science with Python',
      link: 'https://www.coursera.org/account/accomplishments/certificate/NUGWXEFLSQ2R',
    },
    {
      id: 15,
      issuer: 'IBM',
      title: 'Python Project for Data Science',
      link: 'https://www.coursera.org/account/accomplishments/certificate/J2AE7W83SAY6',
    },
    {
      id: 16,
      issuer: 'Interactive Brokers',
      title: 'Forex - Trading Around the World',
      link: 'https://www.coursera.org/account/accomplishments/certificate/5MABWL4S8UUW',
    },
    {
      id: 17,
      issuer: 'Yale',
      title: 'Finacial Markets',
      link: 'https://www.coursera.org/account/accomplishments/certificate/FP8VL8F4UPER',
    },
    {
      id: 18,
      issuer: 'IBM',
      title: 'Tools for Data Science',
      link: 'https://www.coursera.org/account/accomplishments/certificate/YJHWR3532H43',
    },
    {
      id: 19,
      issuer: 'IBM',
      title: 'Data Science Methodolog',
      link: 'https://www.coursera.org/account/accomplishments/certificate/TTSC4TTNW8Z9',
    },
    {
      id: 20,
      issuer: 'IBM',
      title: 'What is Data Science',
      link: 'https://www.coursera.org/account/accomplishments/certificate/X4DFVUMPK8BB',
    },
    {
      id: 21,
      issuer: 'IBM',
      title: 'Python for Data Science, AI & Development',
      link: 'https://www.coursera.org/account/accomplishments/certificate/8ZG2VUL7XP8S',
    },
    {
      id: 22,
      issuer: 'IBM',
      title: 'Data Visualization with Python',
      link: 'https://www.coursera.org/account/accomplishments/certificate/PEE6TF54HMBF',
    },
    {
      id: 23,
      issuer: 'IBM',
      title: 'Machine Learning with Python',
      link: 'https://www.coursera.org/account/accomplishments/certificate/9SKLKWZXVSX6',
    },
    {
      id: 24,
      issuer: 'IBM',
      title: 'Technical Support Case Studies and Capstone',
      link: 'https://www.coursera.org/account/accomplishments/certificate/KDT2J8M6AZQ4',
    },
    {
      id: 25,
      issuer: 'IBM',
      title: 'Introduction to Cybersecurity Essentials',
      link: 'https://www.coursera.org/account/accomplishments/certificate/MERCNA2LLMLM',
    },
    {
      id: 26,
      issuer: 'IBM',
      title: 'Introduction to Networking and Storage',
      link: 'https://www.coursera.org/account/accomplishments/certificate/6S9H25X6SX8S',
    },
    {
      id: 27,
      issuer: 'IBM',
      title: 'Introduction to Technical Support',
      link: 'https://www.coursera.org/account/accomplishments/certificate/SDC9CVBWEKFY',
    },
    {
      id: 28,
      issuer: 'Meta',
      title: 'Introduction to Databases for Back-End Development',
      link: 'https://www.coursera.org/account/accomplishments/certificate/LPL4Q2KDY6KE',
    },
    {
      id: 29,
      issuer: 'IBM',
      title: 'Introduction to Cloud Computing',
      link: 'https://www.coursera.org/account/accomplishments/certificate/ZYD8HLBKNUJA',
    },
    // Add the remaining certificates here
  ];

  const visibleCertificates = showAll ? certificates : certificates.slice(0, 3);

  return (
    <>
      <section id="certificates">
        <h5>Awards</h5>
        <h2>My Certifications</h2>

        <div className="container certificate__container">

          <div className="certificates__options">
            {visibleCertificates.map((certificate, index) => (
              <article className="certificate__option" key={index}>
                <FaAward className='certificate__option-icon' />
                <h4>{certificate.issuer}</h4>
                <h5>{certificate.title}</h5>
                <a href={certificate.link} target='_blank' rel='noreferrer'>Click to view</a>
              </article>
            ))}
            {!showAll && (
              <button className='show__more' onClick={() => setShowAll(true)}>Show More</button>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Certificates;
