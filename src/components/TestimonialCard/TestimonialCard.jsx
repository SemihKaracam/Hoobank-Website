import React from 'react'
import "./testimonialcard.css"
import quotes from "../../img/quotes.svg"

const TestimonialCard = ({ info }) => {
  return (
    <div className='testimonial-card'>
      <img src={quotes} alt="" />
      <p>{info.content}</p>
      <div className='testimonial-person'>
        <img src={info.img} alt="" />
        <div className='person-info'>
          <h5>{info.name}</h5>
          <span className='opacity-low'>{info.title}</span>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard