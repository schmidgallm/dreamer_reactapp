import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../../actions/auth'

const Navbar = ({ auth: { isAuthenticated, user }, logout }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
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
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/prompts"
                                activeClassName="nav-active"
                            >
                                Prompts
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/stories"
                                activeClassName="nav-active"
                            >
                                Stories
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/community"
                                activeClassName="nav-active"
                            >
                                Community
                            </NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Resources
                            </a>
                            <div
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdown"
                            >
                                <a
                                    className="dropdown-item"
                                    href="/resources/copyrights"
                                >
                                    Copyrights
                                </a>
                                <a
                                    className="dropdown-item"
                                    href="/resources/editing"
                                >
                                    Editing
                                </a>
                                <a
                                    className="dropdown-item"
                                    href="/resources/agents"
                                >
                                    Literary Agents
                                </a>
                                <a
                                    className="dropdown-item"
                                    href="/resources/marketing"
                                >
                                    Marketing
                                </a>
                                <a
                                    className="dropdown-item"
                                    href="/resources/publishing"
                                >
                                    Publishing
                                </a>
                                <a
                                    className="dropdown-item"
                                    href="/resources/classes"
                                >
                                    Classes
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/resources">
                                    All Resources
                                </a>
                            </div>
                        </li>
                    </ul>
                    <div className="form-inline my-2 my-lg-0">
                        <div className="dropdown auth-links">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <i className="fa fa-user"></i>
                            </a>
                            <div
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdown"
                            >
                                {!isAuthenticated && (
                                    <Fragment>
                                        <a
                                            className="dropdown-item"
                                            href="/login"
                                        >
                                            Login
                                        </a>
                                        <a
                                            className="dropdown-item"
                                            href="/register"
                                        >
                                            Register
                                        </a>
                                    </Fragment>
                                )}
                                <a className="dropdown-item" href="/subscribe">
                                    Subscribe
                                </a>
                                {isAuthenticated && (
                                    <Fragment>
                                        <a
                                            className="dropdown-item"
                                            href="#"
                                            onClick={logout}
                                        >
                                            Logout
                                        </a>
                                        <div className="dropdown-divider"></div>
                                        <a
                                            className="dropdown-item"
                                            href="/dashboard"
                                        >
                                            Dashboard
                                        </a>
                                    </Fragment>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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

/*
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
                    <NavLink
                        activeClassName="nav-active"
                        className="nav-link"
                        to="/prompts"
                    >
                        <i className="fa fa-paper-plane" />
                        Prompts
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        activeClassName="nav-active"
                        className="nav-link"
                        to="/resources"
                    >
                        <i className="fa fa-book" />
                        Resources
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        activeClassName="nav-active"
                        className="nav-link"
                        to="/community"
                    >
                        <i className="fa fa-users" />
                        Community
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        activeClassName="nav-active"
                        className="nav-link"
                        to="/dashboard"
                    >
                        <i className="fa fa-pie-chart" />
                        Dashboard
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
*/
