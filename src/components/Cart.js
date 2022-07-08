import React, { useState } from "react";
import CartCard from './CartCard'
import './Cart.css'

const Cart = ({ cart, deleteGame, changeQuantity, emptyCart }) => {
    const [buttonText, setButtonText] = useState("Order")

    const cartInfo = cart.map(game => <CartCard key={game.id} game={game} deleteGame={deleteGame} changeQuantity={changeQuantity}  />)

    const totalQuantity = cart.reduce((acumulator, q) => acumulator + q.quantity, 0)
    
    const placeOrder = () => {
        setButtonText("Ordering...")
        setTimeout(() => {
            emptyCart()
            setButtonText("Order")
        }, 3000)
    }

    if(cart.length < 1) {
        return (
            <div className="shop empty">
                <h1>Your cart is empty</h1>
            </div>
        )
    }

    return(
        <div className="shop">
            <h1>Your Cart</h1>
            <div className="game">
                { cartInfo }
            </div>
            <div className="backGround">
                <h3>Total: {totalQuantity * 50} €</h3>
                <button className="order" onClick={placeOrder}>{buttonText}</button>
            </div>
            <div className="footer">
                Source data from <a href="https://rawg.io/" target="_blank" rel="noopener noreferrer">R A W G</a>
            </div>
        </div>
    )
}

export default Cart