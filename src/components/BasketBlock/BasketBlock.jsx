import React from 'react'
import './BasketBlock.css'
import { BiCart } from 'react-icons/bi'

export function BasketBlock() {
    return (
        <div className='basket-block'>
            <BiCart size={25} className='basket-block__icon'/>
            <span className='basket-block__total-price'>1000 руб.</span>
        </div>
    )
}
