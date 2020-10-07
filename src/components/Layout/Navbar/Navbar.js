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
                    Dreamers is the premier writing management and communication
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
                                    <a
                                        className="dropdown-item"
                                        href="/resources"
                                    >
                                        All Resources
                                    </a>
                                </div>
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
