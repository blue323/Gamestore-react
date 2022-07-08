import React from 'react'
import ShopCard from './ShopCard'
import "./Shop.css"

const Shop = ({ games, addGameClick }) => {

    const gameInfo = games.map(game => <ShopCard key={game.id} game={game} addGameClick={addGameClick}  />)

    return(
        <div className="shop">
            <h1>Games</h1>
            <div className="game">
                { gameInfo }
            </div>
            <div className="footer">
                Source data from <a href="https://rawg.io/" target="_blank" rel="noopener noreferrer">R A W G</a>
            </div>
        </div>
    )
}

export default Shop