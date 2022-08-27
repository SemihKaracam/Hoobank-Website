import React from 'react'
import { clients } from '../../constants'
import "./clients.css"

const Clients = () => {
    return (
        <div className='clients section-padding'>
            {
                clients.map((client) => (
                    <div className='client-item'>
                        <img src={client.logo} alt="" />
                    </div>
                ))
            }
        </div>
    )
}

export default Clients