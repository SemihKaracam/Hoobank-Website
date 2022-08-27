import React from 'react'
import "./billing.css"
import paypal from "../../img/paypal.png"
import apple from "../../img/apple.svg"
import gplay from "../../img/gplay.svg"
const Billing = () => {
  return (
    <div className='billing section-padding'>
      <div className='billing-img'>
        <img src={paypal} alt="" />
      </div>
      <div className='billing-info'>
        <h3>
          Easily control your <br/> billing &
          invoicing.
        </h3>
        <p className='opacity-low'>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className='billing-buttons'>
          <img src={apple} alt="" />
          <img src={gplay} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Billing