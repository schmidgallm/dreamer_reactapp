import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../../actions/auth'

const Navbar = ({ auth: { isAuthenticated, user }, logout }) => {
    return (
        <Fragment>
            <div className="nav-header">
                <p>
                    Dreamers is the premier writing resource and communication
                    tool for authors and avid readers.
                </p>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="nav-container">
                    <NavLink className="navbar-brand" to="/">
                        Dreamers
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/how-it-works"
                                    activeClassName="nav-active"
                                >
                                    How it Works
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/pricing"
                                    activeClassName="nav-active"
                                >
                                    Pricing
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/community"
                                    activeClassName="nav-active"
                                >
                                    Our Community
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="btn btn-outline-primary ml-3 login-link"
                                    to="/login"
                                    activeClassName="nav-active"
                                >
                                    Login
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="btn btn-primary ml-3 subscribe-link"
                                    to="/subscribe"
                                    activeClassName="nav-active"
                                >
                                    Try it FREE
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
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
