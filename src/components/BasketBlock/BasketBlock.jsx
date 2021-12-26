import React, { useState, useCallback} from 'react'
import { BiCart } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import { BasketMenu } from '../BasketMenu/BasketMenu';
import { basketTotal } from '../utils';
import { ItemsInBasket } from '../ItemsInBasket'
import { useNavigate } from 'react-router-dom';
import './BasketBlock.css'

export function BasketBlock() {
    const [isBasketVisible, setIsBasketVisible] = useState(false);
    const items = useSelector(state => state.cart.itemsInCart);
    const totalPrice = basketTotal(items);
    const navigation = useNavigate();

    const handleClick = useCallback(() => {
        setIsBasketVisible(false)
        navigation('/order')
    }, [navigation])

    return (
        <div className='basket-block'>
            <ItemsInBasket quantity={items.length} />
            <BiCart size={25} className='basket-block__icon' onClick={() =>
                setIsBasketVisible(!isBasketVisible)} />
            {totalPrice > 0
                ? <span className='basket-block__total-price'>{`${totalPrice} руб.`}</span>
                : null}
            {isBasketVisible && <BasketMenu items={items} onClick={handleClick} />}
        </div>
    )
}
