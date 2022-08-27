import React from 'react'
import "./stats.css"
const Stats = () => {
  return (
    <div className='stats section-padding'>
        <div className='stat-item'>
            <h4>3800+</h4>            
            <p className='aqua-text'>USER ACTIVE</p>            
        </div>
        <div className='vertical-line'></div>
        <div className='stat-item'>
            <h4>230+</h4>            
            <p className='aqua-text'>TRUSTED BY COMPANY</p>       
        </div>
        <div className='vertical-line'></div>
        <div className='stat-item'>
            <h4>$230M+</h4>            
            <p className='aqua-text'>TRANSACTION</p>   
        </div>
    </div>
  )
}

export default Stats