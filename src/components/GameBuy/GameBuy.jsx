import React from 'react'
import './GameBuy.css'
import { ButtonBuy } from '../ButtonBuy'
import { setItemInCart, deleteItemFromCart } from '../../redux/cart/reducer'
import { useDispatch, useSelector } from 'react-redux'

export const GameBuy = ({ game }) => {
    const dispatch = useDispatch()
    const items = useSelector(state => state.cart.itemsInCart)
    const isItemInCart = items.some(item => item.id === game.id)

    const hendleClick = (e) => {
        e.preventDefault()
        if (isItemInCart) {
            dispatch(deleteItemFromCart(game.id))
        } else {
            dispatch(setItemInCart(game));
        }
    }

    return (
        <div className='game-buy'>
            <span className='game-buy__price'>{game.price} руб.</span>
            <ButtonBuy type={isItemInCart ? 'secondary' : 'primary'} onClick={hendleClick}>
                {isItemInCart ? 'Удалить' : 'В корзину'}
            </ButtonBuy>
        </div>
    )
}
