import React from 'react'
import { useNavigate } from 'react-router-dom'
import { GameCover } from '../GameCover/'
import { GameBuy } from '../GameBuy/'
import { GameGenre } from '../GameGenre/'
import { useDispatch } from 'react-redux'
import { setCurrentGame } from '../../redux/games/reducer'
import './GameItem.css'

export function GameItem({ game }) {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const hendleClick = () => {
        dispatch(setCurrentGame(game));
        navigate(`/app/${game.title}`); /* url/app/name of the game */
    }

    return (
        <div className='game-item'>
            <GameCover image={game.image}/>
            <div className="game-item__deteils" onClick={hendleClick}>
                <span className="game-item__title">{game.title}</span>
                <div className="game-item__genre">
                    {game.genres.map((genre) => <GameGenre genre={genre} key={genre} />)}
                </div>
            </div>
            <div className="game-item__buy">
                <GameBuy game={game} />
            </div>
        </div>
    )
}
