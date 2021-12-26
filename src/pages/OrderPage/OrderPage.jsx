import React from 'react'
import { useSelector } from 'react-redux'
import { OrderItem } from '../../components/OrderItem/OrderItem'
import { basketTotal } from '../../components/utils'
import './OrderPage.css'

export const OrderPage = () => {
    const items = useSelector(state => state.cart.itemsInCart)

    if(items.length < 1) {
        <h1>Ваша корзина пуста</h1>
    }

    return (
        <div className='order-page'>
            <div className="order-page__left">
                {items.map(game => <OrderItem game={game} key={game.id}/>)}
            </div>
            <div className="order-page__right">
                <div className="order-page__total-price">
                    {items.length} товаров на сумму {basketTotal(items)} руб.
                </div>
            </div>
        </div>
    )
}
