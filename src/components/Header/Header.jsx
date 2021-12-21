import React from 'react'
import { Link } from 'react-router-dom'
import { BasketBlock } from '../BasketBlock'
import './Header.css'

export function Header() {
    return (
        <div className='header'>
            <div className="wrapper">
                <Link className="header__store-title" to='/'>GAME STORE</Link>
            </div>
            <div className="wrapper heder__store-btn-basket">
                <BasketBlock/>
            </div>
        </div>
    )
}
