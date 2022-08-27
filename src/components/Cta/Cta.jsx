import React from 'react'
import GetStarted from '../GetStarted/GetStarted'
import "./cta.css"

const Cta = () => {
  return (
    <div className='cta section-padding'>
        <div className='cta-wrapper'>
            <div className='cta-info'>
                <h3 className='cta-title'>Let’s try our service now!</h3>
                <p className='opacity-low'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div>
            <GetStarted/>
        </div>
    </div>
  )
}

export default Cta