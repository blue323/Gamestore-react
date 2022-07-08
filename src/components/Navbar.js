import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = ({ numberOfGames }) => {
    return(
            <nav>
                <h1 className="nav-title">GameStore</h1>
                <ul>
                    <li>
                        <NavLink exact to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop">Shop</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart">
                            <div>
                                <i className="fa fa-shopping-cart"></i>
                                <span>{ numberOfGames }</span>
                            </div>   
                        </NavLink>
                        
                    </li>
                </ul>
            </nav>
        
    )
}

export default NavBar