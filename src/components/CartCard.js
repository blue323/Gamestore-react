import React from "react";
import "./ShopCard.css";
import "./CartCard.css";

const CartCard = ({ game, deleteGame, changeQuantity }) => {

    console.log(game)

    return(
        <div className="cartCard">
            <img src={game.background_image} alt={game.name}/>
            <p className="title"><span>{game.name}</span><span>Score: {game.metacritic}</span></p>
            <p><span>{game.released}</span></p>
            <p className="genres">{game.genres.map(genre => <span key={genre.id}>{genre.name}</span>)}</p>
            <p><span>Price: 50 €</span></p>
            <div className="cartOperations">
                <button className="operation" onClick={() => changeQuantity(game.id, 1)}>+</button>
                <input 
                    type="text" 
                    value={game.quantity}
                    onChange={"needWriteFunction"}    
                    />
                <button className="operation" onClick={() => changeQuantity(game.id, -1)} disabled={game.quantity < 2}>-</button>
            </div>
            <br/>
            <button className="delete" onClick={() => deleteGame(game.id)}>Delete Game</button>
        </div>
    )
}

export default CartCard