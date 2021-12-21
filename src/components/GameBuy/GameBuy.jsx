import React from 'react'
import './GameBuy.css'
import { ButtonBuy }from '../ButtonBuy'

export const GameBuy = ({ game }) => {
    return (
        <div className='game-buy'>
            <span className='game-buy__price'>{game.price} руб.</span>
            <ButtonBuy type='primary' onClick={() => null}>В корзину</ButtonBuy>
        </div>
    )
}
