import React from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css'

const Home = () => {
    return(
        <div className="home">
            <h1>Welcome</h1>
            <h2>Here you can buy your favourite games</h2>
            <NavLink to="/shop">Buy Games</NavLink>
        </div>
    )
}

export default Home