import React from 'react'
import './Offers.css'
function Offers() {
    return (
        <div className='offers-container'>
            <div className='Fresh-offer'>
                <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fresh._SY116_CB431401553_.jpg' />
            </div>
            <div className='Mobiles-offer'>
                <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Mobile._SY116_CB431401553_.jpg' />
            </div>
            <div className='Fashion-offer'>
                <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fashion._SY116_CB431401553_.jpg' />
            </div>
            <div className='Electronics-offer'>
                <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Electronic._SY116_CB431401553_.jpg' />
            </div>
        </div>
    )
}

export default Offers