import React from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, user }, logout }) => {
    if (!isAuthenticated) {
        return null;
    }

    return (
        <nav id="top-nav" className="navbar navbar-expand-lg navbar-light">
            <div className="navbar-brand">Hi {user ? user.name : null}</div>
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
                <ul className="navbar-nav mr-auto ml-5">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/prompts">
                            Prompts
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/stories">
                            Stories
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/community">
                            Community
                        </NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <NavLink
                            className="nav-link dropdown-toggle"
                            to="/"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Resources
                        </NavLink>
                        <div
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdown"
                        >
                            <NavLink
                                className="dropdown-item"
                                to="/resources/copyrights"
                            >
                                Action
                            </NavLink>
                            <NavLink
                                className="dropdown-item"
                                to="/resources/editing"
                            >
                                Editing
                            </NavLink>
                            <NavLink
                                className="dropdown-item"
                                to="/resources/agents"
                            >
                                Literary Agents
                            </NavLink>
                            <NavLink
                                className="dropdown-item"
                                to="/resources/marketing"
                            >
                                Marketing
                            </NavLink>
                            <NavLink
                                className="dropdown-item"
                                to="/resources/publishing"
                            >
                                Publishing
                            </NavLink>
                            <NavLink
                                className="dropdown-item"
                                to="/resources/classes"
                            >
                                Classes
                            </NavLink>
                            <div className="dropdown-divider"></div>
                            <NavLink className="dropdown-item" to="/resources">
                                All Resources
                            </NavLink>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <NavLink
                            className="nav-link dropdown-toggle"
                            to="/"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Support
                        </NavLink>
                        <div
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdown"
                        >
                            <NavLink
                                className="dropdown-item"
                                to="/support/faq"
                            >
                                Action
                            </NavLink>
                            <NavLink
                                className="dropdown-item"
                                to="/support/tickets"
                            >
                                Editing
                            </NavLink>
                            <NavLink
                                className="dropdown-item"
                                to="/support/about"
                            >
                                Literary Agents
                            </NavLink>
                            <NavLink
                                className="dropdown-item"
                                to="/support/advertising"
                            >
                                Marketing
                            </NavLink>
                        </div>
                    </li>
                </ul>
                <div className="form-inline my-2 my-lg-0">
                    <ul className="navbar-nav mr-auto ml-5">
                        <li className="nav-item">
                            <NavLink
                                className="btn btn-secondary"
                                to="/dashboard"
                            >
                                Dashboard
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                onClick={logout}
                                to="#"
                            >
                                Logout
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
