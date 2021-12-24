import React from 'react'
import { useSelector } from 'react-redux'
import { GameBuy } from '../../components/GameBuy'
import { GameCover } from '../../components/GameCover'
import { GameGenre } from '../../components/GameGenre'
import './GamePage.css'

export const GamePage = () => {
    const game = useSelector(state => state.game.currentGame)

    if(!game) return null

    return (
        <div className='game-page'>
            <h1 className="game-page__title">
                {game.title}
            </h1>
            <div className="game-page__content">
                <div className="game-page__left">
                    <iframe
                        width="90%"
                        height="400px"
                        src={game.video}
                        title='yotube video player'
                        frameBorder='0'>
                    </iframe>
                </div>
                <div className='game-page__right'>
                    <GameCover image={game.image} />
                    <p>{game.description}</p>
                    <p className='secondary-text'>
                        Популярные метки этого продукта:
                    </p>
                    {game.genres.map(genre => <GameGenre genre={genre} key={`keys for ${genre}`} />)}
                    <div className="game-page__buy-game">
                        <GameBuy game={game} />
                    </div>
                </div>
            </div>
        </div>
    )
}
