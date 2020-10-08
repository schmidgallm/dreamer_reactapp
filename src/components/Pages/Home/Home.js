// Dependencies
import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Components
import Header from './HomeComponents/Header.js'
import Cards from './HomeComponents/Cards.js'
import Info from './HomeComponents/Info.js'
import Navbar from '../../Layout/Navbar/Navbar'

const Home = ({ auth: { isAuthenticated } }) => {
    return (
        <div className="home">
            <Navbar />
            <Header />
            <Cards />
            <Info />
        </div>
    )
}

Navbar.propTypes = {
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth,
})

export default connect(mapStateToProps)(Home)
