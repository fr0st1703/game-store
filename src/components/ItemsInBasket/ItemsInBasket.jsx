import React from 'react'
import './ItemsInBasket.css'

export const ItemsInBasket = ({
    quantity = 0,
}) => {
    return quantity > 0 ? (
        <div className='items-basket'>
            {quantity}
        </div>
    ) : null
}

