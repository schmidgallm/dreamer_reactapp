import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../../actions/auth'

const Navbar = ({ auth: { isAuthenticated }, logout }) => {
    return (
        <nav>
            <ul className="nav-list">
                <li className="nav-link nav-brand">
                    <NavLink className="nav-brand" to="/">
                        Dreamers
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                        <i className="fa fa-home " />
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/prompts">
                        <i className="fa fa-paper-plane" />
                        Prompts
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/resources">
                        <i className="fa fa-book" />
                        Resources
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/community">
                        <i className="fa fa-users" />
                        Community
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/dashboard">
                        <i className="fa fa-pie-chart" />
                        Dashboard
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        to={isAuthenticated ? '/dashboard' : '/login'}
                    >
                        <i className="fa fa-user"></i> Profile
                    </NavLink>
                </li>
                <li className="nav-item">
                    {isAuthenticated && (
                        <NavLink className="nav-link" onClick={logout} to="#!">
                            <i className="fa fa-sign-out" />
                            Logout
                        </NavLink>
                    )}
                </li>
            </ul>
        </nav>
    )
}

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth,
})

export default connect(mapStateToProps, { logout })(Navbar)
