import React from 'react'
import "./business.css"
import { features } from '../../constants'
import GetStarted from '../GetStarted/GetStarted'


const BusinessFeature = ({ feature }) => {
    return (
        <div className='feature'>
            <div className='feature-img'>
                <img src={feature.icon} alt="" />
            </div>
            <div className='feature-info'>
                <h4 className='feature-title'>{feature.title}</h4>
                <p className='opacity-low'>{feature.content}</p>
            </div>
        </div>
    )
}

const Business = () => {
    return (
        <div className='business section-padding'>
            <div className='business-info'>
                <h3 className='business-title'>You do the business,<br/>we'll handle the money.</h3>
                <p className='business-description opacity-low'>
                    With the right credit card, you can improve your financial life by
                    building credit, earning rewards and saving money. But with hundreds
                    of credit cards on the market.
                </p>
                <GetStarted/>
            </div>
            <div className='business-features'>
                {
                    features.map((feature) => (
                        <BusinessFeature feature={feature} />
                    ))
                }
            </div>
        </div>
    )
}

export default Business