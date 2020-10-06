import React from 'react'
import Header from './HomeComponents/Header.js'
import Cards from './HomeComponents/Cards.js'
import Info from './HomeComponents/Info.js'

const Home = () => {
    return (
        <div className="home">
            <Header />
            <Cards />
            <Info />
        </div>
    )
}

export default Home
