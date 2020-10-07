import React from 'react'
import Header from './HomeComponents/Header.js'
import Cards from './HomeComponents/Cards.js'
import Info from './HomeComponents/Info.js'
import Navbar from '../../Layout/Navbar/Navbar'

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <Header />
            <Cards />
            <Info />
        </div>
    )
}

export default Home
