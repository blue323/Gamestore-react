import React from "react";
import "./ShopCard.css"

const ShopCard = ({ game, addGameClick }) => {
    const gameToAdd = {...game, price: 50, quantity: 1}

    return(
        <div className="card">
            <img src={game.background_image} alt={game.name}/>
            <p className="title"><span>{game.name}</span><span>Score: {game.metacritic}</span></p>
            <p><span>{game.released}</span></p>
            <p className="genres">{game.genres.map(genre => <span key={genre.id}>{genre.name}</span>)}</p>
            <p><span>Price: 50 €</span></p>
            <button className="shop-button" onClick={() => addGameClick(gameToAdd)}>Add to cart</button>
        </div>
    )
}

export default ShopCard