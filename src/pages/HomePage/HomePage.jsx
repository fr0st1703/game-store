import React from 'react';
import { GameItem } from '../../components/GameItem/'
import './HomePage.css';
import { games } from '../games';

export function HomePage() {
    return (
        <div className='home-page'>
            {games.map(game => <GameItem game={game} key={`games ${game.id}`}/>)}
        </div>
    )
}
