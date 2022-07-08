import React, { useState, useEffect } from "react";
//import Overview  from "./components/Overview";
import NavBar from "./components/Navbar";

import "./App.css"
import Home from "./components/Home"
import Shop from "./components/Shop"
import Cart from "./components/Cart"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [games, setGames] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
      fetch('https://api.rawg.io/api/games?key=9cb54f7fab5949358b93787a7d0ccf46')
          .then(response => response.json())
          .then(data => {
              setGames(data.results)
              //console.log(data.results)
          })
  }, [])

  const addGameClick = (game) => {

    const gameAlreadyExists = cart.map(item => item.id).includes(game.id)

    if(gameAlreadyExists) {
      changeQuantity(game.id, 1)
    } else {
      setCart(cart.concat(game))
    }
  }

  const changeQuantity = (id, value) => {
    setCart(cart.map(item => item.id === id ? 
      {...item, quantity: item.quantity + value} :
      item))
  }

  const deleteGame = (id) => {
    setCart(cart.filter(item => item.id !== id ))
  }

  const emptyCart = () => {
    setCart([])
  }
    
  return (
    <div>
      <Router>
        <NavBar numberOfGames={cart.length} />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/shop">
              <Shop games={games} addGameClick={addGameClick} />
            </Route>
            <Route path="/cart">
              <Cart cart={cart} deleteGame={deleteGame} changeQuantity={changeQuantity} emptyCart={emptyCart} />
            </Route>
          </Switch>
      </Router>
    </div>
  );
 
}

export default App;
