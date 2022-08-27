import React from 'react'
import credit from "../../img/credit.png"
import GetStarted from '../GetStarted/GetStarted'
import "./card.css"

const Card = () => {
    return (
        <div className='card section-padding'>
            <div className='card-info'>
                <h3 className='card-title'>Find a better card deal <br /> in few easy steps.</h3>
                <p className='card-description opacity-low'>
                    Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
                    aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
                </p>
                <GetStarted />
            </div>
            <div className="card-img">
                <img src={credit} alt="" />
            </div>
        </div>
    )
}

export default Card