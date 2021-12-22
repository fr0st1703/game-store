import React from 'react'
import './GameBuy.css'
import { ButtonBuy } from '../ButtonBuy'
import { setItemInCart } from '../../redux/cart/reducer'
import { useDispatch } from 'react-redux'

export const GameBuy = ({ game }) => {
    const dispatch = useDispatch()

    const hendleClick = (e) => {
        e.preventDefault()
        dispatch(setItemInCart(game));
    }

    return (
        <div className='game-buy'>
            <span className='game-buy__price'>{game.price} руб.</span>
            <ButtonBuy type='primary' onClick={hendleClick}>В корзину</ButtonBuy>
        </div>
    )
}
