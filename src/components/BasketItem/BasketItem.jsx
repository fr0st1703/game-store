import React from 'react'
import './BasketItem.css'

export const BasketItem = ({
    title,
    price,
    id
}) => {
    return (
        <div className='basket-item'>
            <span>{title}</span>
            <div className="basket-item__price">
                <span>{price}руб.</span>
            </div>
        </div>
    )
}
