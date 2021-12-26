import React from 'react'
import { useDispatch } from 'react-redux'
import { GameCover } from '../GameCover'
import { IoCloseCircleOutline } from 'react-icons/io5'
import './OrderItem.css'
import { deleteItemFromCart } from '../../redux/cart/reducer'


export const OrderItem = ({ game }) => {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(deleteItemFromCart(game.id))
    }

    return (
        <div className='order-item'>
            <div className="order-item__cover">
                <GameCover image={game.image} />
            </div>
            <div className="order-item__title">
                {game.title}
            </div>
            <div className="order-item__price">
                {game.price} руб.
                <IoCloseCircleOutline 
                    size={20} 
                    className='order-item__delete-icon' 
                    onClick={handleClick} />
            </div>
        </div>
    )
}
