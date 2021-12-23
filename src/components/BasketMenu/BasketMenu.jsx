import React from 'react'
import { basketTotal } from '../utils'
import { ButtonBuy } from '../ButtonBuy'
import { BasketItem } from '../BasketItem'
import './BasketMenu.css'

export const BasketMenu = ({ items, onClick }) => {
    return (
        <div className='basket-menu'>
            <div className="basket-menu__games-list">
                {
                    items.length > 0
                        ? items.map((game) =>
                            <BasketItem
                                key={game.title}
                                price={game.price}
                                title={game.title}
                                id={game.id} />)
                        : 'корзина пуста'
                }
            </div>
            {
                items.length > 0 ?
                    <div className='basket-menu__arrage'>
                        <div className="basket-menu__total-price">
                            <span>Итог: </span>
                            <span>{basketTotal(items)} руб.</span>
                        </div>
                        <ButtonBuy type='primary' onClick={onClick}>
                            Оформить заказ
                        </ButtonBuy>
                    </div>
                    : null
            }
        </div>
    )
}
