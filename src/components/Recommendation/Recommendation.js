import React from 'react'
import './Recommendation.css'
import RecommendationItem from './RecommendationItem'

const recommendationData = [
    {
        id: 1,
        title: 'Adaptor',
        description: 'rts Dual USB Universal Travel Adapter, International All in One Worldwide Travel Adapter and Wall Charger with USB Ports with Multi Type Power Outlet USB 2.1A,100-250 Voltage Travel Charger (Black)',
        price: 90,
        img: 'https://m.media-amazon.com/images/I/611RCy1XjsL._SL1500_.jpg'
    },
    {
        id: 2,
        title: 'Adaptor',
        description: 'rts Dual USB Universal Travel Adapter, International All in One Worldwide Travel Adapter and Wall Charger with USB Ports with Multi Type Power Outlet USB 2.1A,100-250 Voltage Travel Charger (Black)',
        price: 90,
        img: 'https://m.media-amazon.com/images/I/611RCy1XjsL._SL1500_.jpg'
    },
    {
        id: 3,
        title: 'Adaptor',
        description: 'rts Dual USB Universal Travel Adapter, International All in One Worldwide Travel Adapter and Wall Charger with USB Ports with Multi Type Power Outlet USB 2.1A,100-250 Voltage Travel Charger (Black) ',
        price: 90,
        img: 'https://m.media-amazon.com/images/I/611RCy1XjsL._SL1500_.jpg'
    },
    {
        id: 4,
        title: 'Adaptor',
        description: 'rts Dual USB Universal Travel Adapter, International All in One Worldwide Travel Adapter and Wall Charger with USB Ports with Multi Type Power Outlet USB 2.1A,100-250 Voltage Travel Charger (Black) ',
        price: 90,
        img: 'https://m.media-amazon.com/images/I/611RCy1XjsL._SL1500_.jpg'
    },
    {
        id: 5,
        title: 'Adaptor',
        description: 'rts Dual USB Universal Travel Adapter, International All in One Worldwide Travel Adapter and Wall Charger with USB Ports with Multi Type Power Outlet USB 2.1A,100-250 Voltage Travel Charger (Black) ',
        price: 90,
        img: 'https://m.media-amazon.com/images/I/611RCy1XjsL._SL1500_.jpg'
    },
]

function Recommendation() {
    return (
        <div className='recommendation-container'>
            <div className='recommendation-header'>
                Recommendation
            </div>
            <div className='recommendation-list'>
                {
                    recommendationData.map(item =>
                        <RecommendationItem
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            price={item.price}
                            img={item.img}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Recommendation