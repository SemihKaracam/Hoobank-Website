import React from 'react'
import { feedback } from '../../constants'
import TestimonialCard from '../TestimonialCard/TestimonialCard'
import "./testimonials.css"

const Testimonials = () => {
  return (
    <div className='testimonials section-padding'>
      <div className='testimonials-info'>
        <h3 className='testimonials-title'>
          What People are <br /> saying about us
        </h3>
        <p className='testimonials-description opacity-low'>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className='testimonials-cards'>
        {
          feedback.map((fb) => (
            <TestimonialCard info={fb} />
          ))
        }
      </div>
    </div>
  )
}

export default Testimonials