import React from 'react'
import './Recommendationitem.css'

function Recommendationitem({
    key,
    title,
    description,
    price,
    img
}) {
    return (
        <div className='item-container'>
            <img src={img} />
            <div className='item-info'>
                <div className='item-title'>
                    {title}
                </div>
                <div className='item-description'>
                    {description}
                </div>
                <div className='item-footer'>
                    <div className='item-price'>
                        💲{price}
                    </div>
                    <div className='item-old-price'>
                        {price*1.05}
                    </div>
                </div>
                <div className='item-footer-btn'>
                    <button className='item-cart-btn btn-secondary'>
                        Add to wishlist
                    </button>
                    <button className='item-cart-btn btn-primary'>
                        Add to cart..!
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Recommendationitem